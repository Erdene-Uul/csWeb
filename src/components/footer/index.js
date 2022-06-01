import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/image 47.png";

export const Footer = () => {
  const Reg = () => {
    window.open("https://elselt.huree.edu.mn/register.php", "_blank");
  };
  return (
    <div className="flex max-w-screen-2xl mx-auto">
      <div className="w-1/2 flex justify-center items-center">
        <iframe
          className="w-2/3 h-3/4"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Huree%20University%20of%20ICT,%20WVGM+HH3,%20Ulaanbaatar%20Ulan%20Bator+(Huree%20University%20of%20ICT)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="bg-[#2A35A7] w-1/2 rounded-t-[72px] ">
        <div className=" flex text-white space-x-5 ml-6 mt-6">
          <img className="h-full" src={Logo} alt="logo" />
          <p className="ml-1 text-[8px] lg:text-xs flex flex-col justify-center">
            <span className="block text-xs lg:text-lg font-bold ">ХҮРЭЭ</span>
            ПРОГРАМ ХАНГАМЖИЙН ТЭНХИМ
          </p>
        </div>
        <div className="bg-white h-1 my-6"></div>
        <div className="flex text-white m-4 p-7">
          <div className="w-1/2">
            <div>
              <p className="font-bold text-xl">МЭДЭЭ МЭДЭЭЛЭЛ</p>
              <p className="font-light">
                <div>Тэнхимийн Танилцуулагa </div>
                <div>Хөтөлбөрийн Зорилго</div>
                <div>Сургалтын Хөтөлбөр</div>
              </p>
            </div>
            <div className="font-light mt-6">
              <div className="font-bold text-xl mb-2">ЦАХИМ БҮРТГЭЛ</div>
              <button
                onClick={Reg}
                className="hover:text-[15px] hover:text-sky-600 hover:border-b-[1px]"
              >
                Онлайнаар бүртгүүлэх бол ЭНД дарна уу
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <p className="font-bold text-xl">Холбоо барих</p>
            <p className="font-light space-y-3">
              <div>
                Хасбаатрын гудамж, 11-р хороо, Бичил хороолол, Баянгол дүүрэг,
                Улаанбаатар, Монгол улс.
              </div>
              <div>Утас: (976) 88123-890, 8966-3927</div>
              <div>Цахим хаяг: gloriaym@yahoo.co.kr</div>
              <div> Фэйсбүүк хуудас: Huree ICT - CS & SE Department</div>
            </p>
          </div>
        </div>

        <div className="flex ml-11 mt-16 space-x-32 text-white text-2xl">
          <div>Facebook</div>
          <div>Instagram</div>
          <div>Youtube</div>
        </div>
        <div className=" flex justify-center mt-14 mb-5 font-Roboto text-[#7D82C3]">
          © 2021 JNS Ltd. Trademarks and brands are the property of their
          respective owners.
        </div>
      </div>
    </div>
  );
};
