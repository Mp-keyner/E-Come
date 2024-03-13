import { useState } from "react";

const useForm = (initState) => {
  const [state, setState] = useState(initState);

  const onChangeInfo = (value, key) => {
    console.log(value);
    setState({
      ...state,
      [key]: value,
    });
  };
  const resetForm = () => {
    setState(initState);
  };

  return {
    ...state,
    form: state,
    onChangeInfo,
    resetForm,
  };
};

export default useForm;
