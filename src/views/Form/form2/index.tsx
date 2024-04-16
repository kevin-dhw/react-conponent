import InternalForm from "./form";
import Item from "./item";

type InterFormType = typeof InternalForm;

interface FormInterface extends InterFormType {
  Item: typeof Item;
}

const Form = InternalForm as FormInterface;

Form.Item = Item;

export default Form;
