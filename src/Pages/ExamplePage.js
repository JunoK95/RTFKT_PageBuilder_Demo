import createPage from '../createPage';
import FieldTypes from '../createPage/FieldTypes';

const fieldTypes = {
  learnMore: FieldTypes.string,
  file: FieldTypes.string,
  isRunning: FieldTypes.boolean,
  someText: FieldTypes.blob,
};

const defaultValues = {
  learnMore: "World",
  file: "src/App.js",
  isRunning: true,
  someText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra sollicitudin augue ut ullamcorper. Mauris sit amet felis condimentum ipsum volutpat posuere non vestibulum turpis. Aenean semper, enim ac ultrices iaculis, ligula ipsum elementum libero, eget molestie ligula ligula eu magna. Sed convallis venenatis quam nec efficitur. Praesent leo elit, volutpat vitae leo et, viverra rutrum ligula. Curabitur maximus nibh vitae felis luctus consequat. Cras sollicitudin quis neque ut luctus. Aliquam lacinia ultricies porttitor."
};

const ExamplePage = createPage(
  fieldTypes,
  defaultValues
);

export const Provider = ExamplePage.Provider;
export const Field = ExamplePage.Field;
export const fields = ExamplePage.fields;
