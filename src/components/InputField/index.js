import { TextField, Input } from "@mui/material";
import { validateEmail, validatePassword } from "../../utils/regex";

export const INPUT_TYPES_INTERFACE = {
  email: (fieldValue) => validateEmail(fieldValue),
  password: (fieldValue) => validatePassword(fieldValue),
  
  text: "text",
};

export default function InputField({
  type,
  label,
  error,
  setError,
  fieldValue,
  setFieldValue,
}) {
  const handleChange = (e) => {
    setFieldValue({
      ...fieldValue,
      [type]: e.target.value,
    });

    const validate = INPUT_TYPES_INTERFACE[type](fieldValue[type]);

    if (!validate) {
      setError({
        ...error,
        [type]: true,
      });
      return;
    }

    setError({
      ...error,
      [type]: false,
    });
    
  };

  return (
    <TextField
      sx={{ my: 2 }}
      color={error[type] ? "error" : "third"}
      value={fieldValue[type]}
      id="outlined-basic"
      label={label}
      onChange={handleChange}
      variant="standard"
      type={type}
      fullWidth
    >
    </TextField>
  );
}
