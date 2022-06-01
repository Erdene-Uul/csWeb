import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../sideBar";

import Logo from "../../assets/images/image 47.png";
export default function Header(props) {
  return (
    <div className=" justify-between flex w-full h-14 lg:h-16 p-2 ">
      <div className=" flex text-white ">
        <img className="h-full" src={Logo} alt="logo" />
        <p className="ml-1 text-[8px] lg:text-xs flex flex-col justify-center">
          <span className="block text-xs lg:text-lg font-bold ">ХҮРЭЭ</span>
          ПРОГРАМ ХАНГАМЖ
        </p>
      </div>
      <div className="hidden lg:block ">
        <ul className="flex text-white space-x-12 ">
          <li>Нүүр</li>
          <li>Танилцуулга</li>
          <li>Үйл ажиллагаа</li>
        </ul>
      </div>
      <div className="lg:hidden">
        {props.sideBar ? (
          <SideBar show={props.sideBar} close={props.toggleSideBar} />
        ) : (
          <div className="mt-2" onClick={props.toggleSideBar}>
            <FontAwesomeIcon icon={faBars} color="white" />
          </div>
        )}
      </div>
    </div>
  );
}
