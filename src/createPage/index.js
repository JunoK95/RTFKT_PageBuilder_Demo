import React, { Component, Fragment } from 'react';
import { findDOMNode } from 'react-dom'
import FieldWrap from './FieldWrap';
import style from './PageBuilder.module.scss';

export default function createPage(fieldTypes, defaultFields) {
  defaultFields || (defaultFields = {});
  const Page = {};
  const Context = React.createContext();

  Page.Provider = class extends Component {
    state = {
      fields: {},
      values: {...defaultFields},

      ensureField: (field, position) => this.setState({
        fields: {
          ...this.state.fields,
          [field]: position
        }
      }),

      setFieldValue: (field, nextValue) => this.setState({
        values: {
          ...this.state.values,
          [field]: nextValue
        }
      }),
    };

    render() {
      const {
        fields,
        values,
        setFieldValue
      } = this.state;

      return (
        <Context.Provider value={this.state}>
          <Fragment>{this.props.children}</Fragment>
          <div className={style.editor}>
            {Object.keys(fields).map(field => {
              if (fieldTypes[field] === undefined) return null;
              return (
                <FieldWrap
                  key={field}
                  left={fields[field].left}
                  top={fields[field].top}
                >
                  {fieldTypes[field].render(values[field], nextValue => setFieldValue(field, nextValue))}
                </FieldWrap>
              );
            })}
          </div>
        </Context.Provider>
      );
    }
  };

  Page.Field = class extends Component {
    static contextType = Context;
    
    element = React.createRef();

    refresh = () => {
      const boundRect = this.element.current.offsetParent.getBoundingClientRect();
      this.context.ensureField(this.props.field, {
        left: boundRect.left + this.element.current.offsetLeft + this.element.current.offsetWidth + document.body.scrollLeft,
        top: boundRect.top + this.element.current.offsetTop + document.body.scrollTop,
      });
    };

    componentDidMount() {
      this.element.current = findDOMNode(this);
      window.addEventListener('resize', this.refresh);
      window.addEventListener('scroll', this.refresh);
    
      // We defer it a few frames to make sure everything is rendered
      // - In this example, the React logo SVG tages a couple of frames to render
      window.requestAnimationFrame(
        () => window.requestAnimationFrame(
          () => window.requestAnimationFrame(
            this.refresh)));
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.refresh);
      window.removeEventListener('scroll', this.refresh);
    }

    render() {
      const {
        field
      } = this.props;
      const {
        values
      } = this.context;
      return this.props.children(values[field] === undefined ? defaultFields[field] : values[field]);
    }
  };

  Page.fields = Object.keys(fieldTypes).reduce((fields, fieldName) => {
    fields[fieldName] = fieldName;
    return fields;
  }, {});

  return Page;
};
