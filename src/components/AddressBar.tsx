import React from "react";
import { Input, Alert } from "antd";

interface AddressBarProps {
  placeholderText: string;
  classname: string;
}

const AddressBar: React.FC<AddressBarProps> = (props) => {
  const [address, setAddress] = React.useState<string>("");
  const [error, setError] = React.useState<boolean>(false);

  const handleError = () => {
    setError(true);
    const timer = setTimeout(() => {
        setError(false);
        }
    , 3000);
    return () => clearTimeout(timer);
    };


  const onSubmit = () => {
    if (!address.startsWith("0x") || address.length !== 42 || address === "") {
        handleError();
        return;
    }
    window.location.href = `?address=${address}`;
  };

  return (
    <>
      {error && <Alert
        className="absolute top-5 w-[400px] left-1/2 transform -translate-x-1/2"
        message="Error - invalid wallet address. Please try again."
        type="error"
        showIcon
      /> }
      <Input
        placeholder={props.placeholderText}
        className={props.classname}
        onChange={(e) => setAddress(e.target.value)}
        onPressEnter={onSubmit}
      />
    </>
  );
};

export default AddressBar;
