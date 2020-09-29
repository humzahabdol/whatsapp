import React from "react";
import "../../css/Login/Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./../../Services/firebase.js";
import { actionTypes } from "../../Services/reducer";
import { useStateValue } from "../../Services/StateProvider.js";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/120px-WhatsApp_logo-color-vertical.svg.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to Whatsapp</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign in to whatsapp
        </Button>
      </div>
    </div>
  );
}

export default Login;
