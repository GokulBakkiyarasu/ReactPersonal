import { useState } from "react";

// Custom hook for managing input state
export default function useInputState(initialValue) {
  const [value, setValue] = useState(initialValue);

  // Handler for when the input value changes
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Function to reset the input value
  const reset = () => {
    setValue("");
  };

  // Return the input value, the handler to update it, and the reset function
  return [value, handleChange, reset];
}
