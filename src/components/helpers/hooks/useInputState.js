import { useState } from "react";

export default function useInputState(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const reset = (resetValue) => {
    setValue(resetValue);
  };

  return [value, handleChange, reset];
}
