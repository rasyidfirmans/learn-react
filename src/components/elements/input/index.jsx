/* eslint-disable react/prop-types */
import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { htmlFor, label, type, placeholder, name } = props;

  return (
    <div className="mb-6">
      <Label htmlfor={htmlFor}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name}></Input>
    </div>
  );
};

export default InputForm;
