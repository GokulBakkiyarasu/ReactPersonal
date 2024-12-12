import { useState } from "react";

export default function useToggle(defaultValue = false) {
  const [state, setState] = useState(defaultValue);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}
