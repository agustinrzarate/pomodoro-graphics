import { TextField, Input } from "@mui/material";
import { useState } from "react";
import { validateEmail, validatePassword } from "../../utils/regex";

export const typesInput = {
    EMAIL : 'email',
    PASSWORD: 'password',
    TEXT: 'text'
}

export default function InputField({type, label, error, setError}) {
    const [value, setValue] = useState("");
   

    const handleChange = (e) => {
       setValue(e.target.value);
       let validate;

       switch (type) {
           case typesInput.EMAIL:
               validate= validateEmail(value);
            break;

           case typesInput.PASSWORD:
               validate= validatePassword(value);
            break;

           default:
               break;
       }

       if (!validate) {
         setError({
           ...error,
           [type]: true
         });
         return;
       }   
       setError({
           ...error,
           [type]: false
        });
    };

    return (
    <TextField
      sx={{my: 2}}
      color={error[type]? "error" : "third"}
      value={value}
      id="outlined-basic"
      label={label}
      onChange={handleChange}
      variant="standard"
      fullWidth
    >
      <Input type={type} />
    </TextField>
  );
}
