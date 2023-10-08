"use client"
import { useRouter } from 'next/navigation';
import { CheckUserExistence } from "./CheckUserExsistence";

import { useAuth0 } from "@auth0/auth0-react";

/**
 * Component that renders login page
 * @returns {JSX.Element} Element with login page
 */
function GoogleLogin() {
    
  const { user, isAuthenticated } = useAuth0();
  /**
   * Function that checks if user is exist in database
   */
  const handleChangeToken = (user) => {
    CheckUserExistence(1).then((r) => {
      
      const res = r.response;
      localStorage.setItem("avatar", res.avatar);
      console.log(user)
      user.picture = res.avatar;
    });
  };
  /**
   * Function with the logic to redirect to the home page or dashboard
   * @returns {JSX.Element} Navigate element
   */
  function comprobacion() {
    if (JSON.parse(localStorage.getItem("id")) !== null) {
      return redirect(`/`)
    }
    return redirect(`/callback`)
  }
  return (
    <div>
      {handleChangeToken(user)}
      {isAuthenticated ? comprobacion() : null}
    </div>
  );
}

export default GoogleLogin;