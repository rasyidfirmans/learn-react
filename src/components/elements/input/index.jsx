/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { htmlFor, label, type, placeholder, name } = props;

  return (
    <div className="mb-6">
      <Label htmlfor={htmlFor}>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        ref={ref}
      ></Input>
    </div>
  );
});

export default InputForm;
