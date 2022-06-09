import React from "react";
import Header from "../header";
import students from "../../assets/images/Rectangle 4422.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faUsersLine,
  faBuildingColumns,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Cover(props) {
  const Reg = () => {
    window.open("https://www.facebook.com/huree.university/", "_blank");
  };
  return (
    <div className="md:flex max-w-screen-2xl mx-auto shadow-lg" id="home">
      <div className="2xl:h-[795px] xl:h-[670px] lg:h-[620px]  md:w-2/3 w-full  h-[400px] bg-[#153690]">
        <div className="lg:ml-8 xl:mr-[150px] lg:mr-[60px]  lg:pt-8">
          <Header sideBar={props.sideBar} toggleSideBar={props.toggleSideBar} />
        </div>
        <div className=" flex w-full h-full justify-center   text-white  relative">
          <div className="absolute 2xl:top-48 lg:top-20 2xl:left-32 lg:left-16 lg:p-0 p-5 lg:max-w-none max-w-xs ">
            <div className=" lg:text-3xl text-lg">
              <span className="lg:text-7xl  font-bold text-3xl block">
                ХҮРЭЭ
              </span>
              <span className="text-[#49B3FF]">ПРОГРАМ ХАНГАМЖ</span> ТЭНХИМ
            </div>

            <p className="mt-3 lg:text-base text-xs max-w-md font-light">
              Бид бүхэн шинийг эрэлхийлж, шинэлэг зүйл сорьж шилдэгийн шилдэг
              залуу компьютерийн инженерүүдийг бэлтгэж байна
            </p>
            <div className="flex justify-around xl:text-5xl lg:text-4xl text-lg mt-12">
              {" "}
              <div className="flex flex-col items-center lg:space-y-2 space-y-1">
                <FontAwesomeIcon icon={faBuildingColumns} />
                <p className="mb-0 text-xs">2002</p>
                <p className="mb-0 text-xs ">Үүссэн</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FontAwesomeIcon icon={faUsersLine} />
                <p className="mb-0 text-xs">349</p>
                <p className="mb-0 text-xs">Нийт төгсөгч</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FontAwesomeIcon icon={faUserGraduate} />
                <p className="mb-0 text-xs">157</p>
                <p className="text-center mb-0 text-xs">
                  Суралцаж буй <br /> оюутнууд
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-full hidden lg:block absolute top-64 2xl:right-64 xl:right-64 xl:h-[450px] lg:h-[400px] right-40  2xl:h-[600px]">
          <img className="h-full" src={students} alt="students" />
        </div>
      </div>
      <div className="hidden md:block w-1/3 text-xs overflow-auto">
        <div className="flex justify-around items-center mt-3 ">
          <ul className="flex space-x-4  ">
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                color={"#777181"}
                className="text-xl"
              />
              <span className="ml-2 text-[#777181]">cs.hureeict@gmail.com</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                color={"#777181"}
                className="text-xl"
              />
              <span className="ml-2 text-[#777181]">(+976)8812-3890</span>
            </li>
          </ul>
          <ul className="flex space-x-4">
            <li>
              <button onClick={Reg}>
                <FontAwesomeIcon icon={faFacebook} className="text-xl" />
              </button>
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            </li>
            <li>
              <FontAwesomeIcon icon={faPinterest} className="text-xl" />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </li>
          </ul>
        </div>
        <div className="w-full h-[1px] bg-[#777181] "></div>
        <div className="flex justify-end items-center space-x-3 mr-3 mt-3">
          <span className=" text-[#777181]">
            Хасбаатрын гудамж, 11-р хороо, Бичил хороолол,
            <br /> Баянгол дүүрэг, Улаанбаатар, Монгол улс.
          </span>
          <Link
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              color="#777181"
              className="text-3xl"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
