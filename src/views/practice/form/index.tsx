// import InterForm from "./form";
// import InterItem from "./item";

// type InternalFormType = typeof InterForm;

// interface FormInterface extends InternalFormType {
//   Item: typeof InterItem;
// }

// const Form = InterForm as FormInterface;
// Form.Item = InterItem;

// export default Form;
import InternalForm from "./form";
import Item from "./item";

type InternalFormType = typeof InternalForm;

interface FormInterface extends InternalFormType {
  Item: typeof Item;
}

const Form = InternalForm as FormInterface;

Form.Item = Item;

export default Form;
