import { useState } from "react";

export default function Input(props) {
  const { value, onChange } = props;
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Add new Todo..."
      name="todos"
      value={value}
      required
      onChange={onChange}
    />
  );
}
