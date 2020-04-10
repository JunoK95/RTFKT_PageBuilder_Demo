import React, { useState } from 'react';
import classNames from 'classnames';
import style from './FieldWrap.module.scss';

export default function FieldWrap({ children, left, top }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        left,
        top
      }}
      className={classNames(style.wrap, {
        [style['wrap--open']]: open
      })}
    >
      <button
        className={style.handle}
        onClick={() => setOpen(!open)}
      >
        {open ? 'Close' : 'Edit'}
      </button>
      <div className={style.control}>
        <div className={style.control_inner}>
          {children}
        </div>
      </div>
    </div>
  );
}
