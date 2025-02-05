import React from "react";
import imgUrl from "../assets/logo-footer.png";

export default function Nav() {
  return (
    <div >
      <img src={imgUrl} alt="Footer logo" className="z-20 absolute fixed left-0 top-0 md:w-48 w-28 m-4" />
    </div>
  );
}
