import React from "react";
import Shadow from "../Shadow";
import Logo from "../../assets/images/image 47.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
export default function SideBar(props) {
  return (
    <div>
      <Shadow close={props.close} />
      <div
        onClick={props.close}
        className="w-[74%] h-screen bg-white z-50 fixed top-0 left-0"
      >
        <div className="fixed top-3 left-2">
          <FontAwesomeIcon icon={faClose} />
        </div>
        <div className="flex justify-center h-12 p-1 ">
          <img src={Logo} alt="logo" />
          <p className="ml-1 text-[8px] flex flex-col justify-center">
            <span className="block text-xs font-bold">ХҮРЭЭ</span>
            ПРОГРАМ ХАНГАМЖ
          </p>
        </div>
        <div className="w-4/5 h-[2px] bg-black mx-auto mt-2 "></div>
        <ul className="w-4/5 mx-auto my-3 text-sm space-y-2">
          <li>Нүүр</li>
          <li>Танилцуулга</li>
          <li>Үйл ажиллагаа</li>
        </ul>
        <div className="w-4/5 h-[2px] bg-black mx-auto mt-2 "></div>
      </div>
    </div>
  );
}
