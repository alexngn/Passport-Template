import React from "react";

const SocialMediaButtons = () => {
  return (
    <>
      <p>Or sign in with social media below</p>
      <a className="px-3 mr-3 ui red google button" href="/auth/google">
        <i className="google icon" />
        Google
      </a>
      <a className="px-auto mr-3 mb-3 ui facebook button" href="/auth/facebook">
        <i className="facebook icon"></i>
        Facebook
      </a>
      <a className="px-auto mr-3 ui linkedin button" href="/auth/linkedin">
        <i className="linkedin icon" />
        LinkedIn
      </a>
      <a className="px-auto mr-3 ui twitter button" href="/auth/twitter">
        <i className="twitter icon" />
        Twitter
      </a>
    </>
  );
};

export default SocialMediaButtons;
