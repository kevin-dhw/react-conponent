import IternalForm from "./form";
import Item from "./item";

type InternalFormType = typeof IternalForm;

interface FormInterface extends InternalFormType {
  Item: typeof Item;
}

const Form = IternalForm as FormInterface;
Form.Item = Item;

export default Form;
