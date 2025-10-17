import React from "react";
import { useAppDispatch } from "../../lib/hooks";
import { login } from "../../lib/features/authSlice";

const AuthUpdater = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <button onClick={() => dispatch(login("token"))}>Log in</button>
      <button onClick={() => dispatch(login("no token"))}>Log out</button>
    </div>
  );
};
export default AuthUpdater;
