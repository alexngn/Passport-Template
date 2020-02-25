import React from "react";
import { Link } from "react-router-dom";
import FlashMessagesList from "../flash/flashMessagesList";
import SocialMediaButtons from "./createAccount/socialMediaButtons";
import TitlePhoto from "./createAccount/titlePhoto";

const LoginTemplate = props => {
  return (
    <div className="container-fluid p-0 m-0 ">
      <div className="row h-100 p-0 m-0">
        <TitlePhoto />
        <div className="col pt-5 mt-5">
          <div className="form pl-5 mw-75 pr-5">
            <Link to="/" className="text-reset">
              <p className="display-3">Passport Template</p>
            </Link>
            <div className="w-75">
              <FlashMessagesList className="w-50" />
            </div>
            <div className="w-100 mt-4">
              {props.form()}
              <SocialMediaButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;
