import TextField, { TextFieldProps } from "@mui/material/TextField";
import React, { forwardRef } from "react";

const TextInput = ({
  label,
  placeholder,
  type,
  onChange,
  value,
  inputProps,
  color,
  helperText,
  ref,
}: TextFieldProps) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
      inputProps={inputProps}
      color={color}
      ref={ref}
      helperText={helperText}
    />
  );
};

export default TextInput;
