import React from "react";
import { BsArrowRightShort } from "react-icons/bs";


const CallToAction = ({action, icon }:any) => {
  return (
    <div className="call-to-action bg-gradient-to-tr from-[#7cc9fc] to-[#99a8ff] " onClick={action}>
      <span className="text-action  ">Download CV</span>
      {icon ? <div className="icon">{icon}</div> : <BsArrowRightShort></BsArrowRightShort>}
    </div>
  );
};

export default CallToAction;