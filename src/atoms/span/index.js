import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";
import FacebookIcon from "@mui/icons-material/Facebook";

const Index = (props) => {
  switch (props.tag) {
    case "verifiedSelfie":
      return (
        <span className=" bg-white text-blue-800 ml-2">
          {props.value ? <VerifiedIcon /> : null}
        </span>
      );
    case "verifiedPhone":
      return (
        <span className=" bg-white text-green-800 ml-2">
          {props.value ? <SystemSecurityUpdateGoodIcon /> : null}
        </span>
      );
    case "verifiedFb":
      return (
        <span className=" bg-white text-blue-800 ml-2">
          {props.value ? <FacebookIcon /> : null}
        </span>
      );
    case "age":
    case "city":
    default:
      return <span className=" bg-white text-black ml-1">{props.value}</span>;
  }
};

export default Index;
