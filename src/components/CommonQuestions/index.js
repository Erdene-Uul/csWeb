import React from "react";
import { Collapse } from "antd";
import ellipse from "../../assets/images/Ellipse 10.png";
import ellipse1 from "../../assets/images/Ellipse 11.png";
import ellipse2 from "../../assets/images/Ellipse 12.png";
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  
`;

export default function CommonQuestions() {
  return (
    <div className="max-w-6xl flex mx-auto py-40 px-10 justify-between shadow-xl m-20 ">
      <div className="w-1/2 flex justify-center items-center relative">
        <div className="h-14 top-24 right-20 absolute">
          {" "}
          <img className="h-full" src={ellipse} alt="" />
        </div>
        <div className="h-44 top-40 left-0 absolute">
          {" "}
          <img className="h-full" src={ellipse1} alt="" />
        </div>

        <p className="text-2xl ">Нийтлэг асуулт</p>
      </div>
      <div className="w-1/2 relative">
        <div className="h-10 -top-10 right-64 absolute">
          {" "}
          <img className="h-full" src={ellipse2} alt="" />
        </div>
        <Collapse
          accordion
          defaultActiveKey={["1"]}
          bordered={false}
          expandIconPosition={"right"}
        >
          <Panel header="Хэзээ элсэлт авдаг вэ?" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="Хэзээ элсэлт авдаг вэ?" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="Оюутан солилцооны талаарх мэдээлэл?" key="3">
            <p>{text}</p>
          </Panel>
          <Panel
            header="Энэ сургуульд элссэнээр ямар ур чадвар эзэмших вэ?"
            key="4"
          >
            <p>{text}</p>
          </Panel>
          <Panel header="Арван жилээ хаана төгссөн бэ?" key="5">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
