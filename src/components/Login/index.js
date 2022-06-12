import Card from "@mui/material/Card";
import theme from "../../theme";
import { CardContent,  Button } from "@mui/material";
import { useState } from 'react';
import InputField from '../InputField';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import SwitchLogin from '../SwitchLogin';
import { signUp, signIn } from "../../lib/firebase";

export const LOGIN_TYPES = {
    SIGN_IN: 'Sign In',
    SIGN_UP: 'Sign Up'
}

export default function Login() {
  const [fieldValue, setFieldValue] = useState({email: '', passsword: ''});
  const [error, setError] = useState({email: true, password: true});
  const [loginType, setLoginType] = useState(LOGIN_TYPES.SIGN_IN);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginType === LOGIN_TYPES.SIGN_UP) {
      signUp(fieldValue);
      return;
    }
    signIn(fieldValue);
  }

  return (
    <Card
      sx={{
        background: theme.palette.background.white,
        boxShadow: 3,
        borderRadius: 16,
        padding: 3,
        pt: 0,
      }}
    >
      <SwitchLogin loginType={loginType} setLoginType={setLoginType} />
      <CardContent sx={{ width: 280, height: 400 }}>
        <form
          onSubmit={handleSubmit}
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <InputField
            fieldValue={fieldValue}
            setFieldValue={setFieldValue}
            type="email"
            label="Email"
            error={error}
            setError={setError}
          />
          <InputField
            fieldValue={fieldValue}
            setFieldValue={setFieldValue}
            type="password"
            label="Password"
            error={error}
            setError={setError}
          />
          <Button
            disabled={error.password || error.email}
            sx={{ mb: 2, mt: 4 }}
            variant="outlined"
            color="secondary"
            startIcon={
              loginType === LOGIN_TYPES.SIGN_IN ? (
                <PersonIcon />
              ) : (
                <PersonAddIcon />
              )
            }
            type="submit"
          >
            {loginType}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
