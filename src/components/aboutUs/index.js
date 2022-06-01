import React from "react";
import temp from "../../assets/images/filter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faGaugeSimpleHigh,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto lg:my-24 ">
      <div className="font-bold lg:text-4xl">
        Бидний <span className="text-[#49B3FF]">тухай</span>
      </div>
      <div className="my-6 lg:text-base mx-auto lg:max-w-3xl text-center sm:max-w-xl max-w-lg text-xs">
        Хүрээ МХТДС-ийн ууган тэнхимүүдийн нэг болох Компьютерийн програм
        хангамжийн тэнхим нь анх 2002 онд 30 оюутан 3 багштайгаар гараагаа
        эхэлсэн бол өнөөдөр тус сургуулийн шилдэг тэнхимүүдийн болон
        програмистууд төрүүлэн гаргасаар байна.
      </div>
      <div className="mt-8 flex items-center ">
        <div className="mr-28">
          <iframe
            className="rounded-xl"
            width="560"
            height="345"
            src="https://www.youtube.com/embed/zoh19bWOHHw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <div className="text-xs lg:text-lg font-bold">
            Миний төрсөн нутаг Монгоын сайхан орон
          </div>
          <div className="text-[10px] lg:text-sm">
            Ямар новшоо бичээд бгаа ийн бэ
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faPeopleGroup} color="#49B3FF" />
            <div>
              <p className="text-[10px] lg:text-lg font-bold ">
                Хаана юу болоод байна
              </p>
              <p className="text-[8px] lg:text-sm">Энд гоё юм болж байна .</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faGaugeSimpleHigh} color="#49B3FF" />
            <div>
              <p className="text-[10px] lg:text-lg font-bold ">
                Хаана юу болоод байна
              </p>
              <p className="text-[8px] lg:text-sm">Энд гоё юм болж байна .</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
