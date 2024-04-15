import { useRef, FC } from "react";
import Form from "../../views/practice/form";

const Test: FC = () => {
  const formRef = useRef(null);
  return (
    <>
      {/* <br /> */}
      {/* <Form /> */}
      <Form ref={formRef}>
        <Form.Item></Form.Item>
      </Form>
    </>
  );
};

export default Test;
