import { Typography } from '@mui/material';
import { useState } from 'react';
import { LOGIN_TYPES } from '../Login'


const textStyles = {
    userSelect: "none",
    fontWeight: "medium",
    fontSize: 18
}

export default function SwitchLogin({loginType, setLoginType}) {
  const [translate , setTranslate] = useState(0)
  

  return (
    <>
      <div>
        <section>
          <div
            onClick={() => {
              setLoginType(LOGIN_TYPES.SIGN_IN);
              setTranslate(0);
            }}
          >
            <Typography
              align="center"
              sx={textStyles}
              color={
                loginType === LOGIN_TYPES.SIGN_IN ? "secondary" : "disabled"
              }
            >
              Sign In
            </Typography>
          </div>
          <div
            onClick={() => {
              setLoginType(LOGIN_TYPES.SIGN_UP);
              setTranslate(140);
            }}
          >
            <Typography
              align="center"
              sx={textStyles}
              color={
                loginType === LOGIN_TYPES.SIGN_UP ? "secondary" : "disabled"
              }
            >
              Sign Up
            </Typography>
          </div>
        </section>
        <div className="line">
          <div></div>
        </div>
      </div>
      <style jsx>
        {`
          section {
            display: flex;
            margin-top: 15px;
          }
          section div {
            width: 50%;
            margin-bottom: 8px;
            cursor: pointer;
          }
          .line {
            height: 1px;
            background: #d1d5db;
            width: 100%;
            position: relative;
          }
          .line div {
            border-radius: 10px;
            width: 50%;
            background: #ffb457;
            height: 3px;
            position: absolute;
            top: -1px;
            transition: ease .3s;
            transform: translateX(${translate}px);
          }
        `}
      </style>
    </>
  );
}
