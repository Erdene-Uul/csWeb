import Cover from "../../components/cover";
import AboutUs from "../../components/aboutUs";
import Goals from "../../components/goal";
import CommonQuestions from "../../components/CommonQuestions";
import AllPost from "../../components/news/AllPost";
import Comments from "../../components/comments";
import sanityClient from "../../client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import moment from "moment";
import bg from "../../assets/images/Frame 47207.png";
const Home = (props) => {
  const [allPostData, setAllPost] = useState(null);
  window.scrollTo(0, 0);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
           title, 
           slug,
           description,
           publishedAt,
           mainImage{
               asset->{
                   _id,
                   url,
               }
           }
       }`
      )
      .then((data) => setAllPost(data))
      .catch((err) => console.log(err));
  }, []);
  const Reg = () => {
    window.open("https://elselt.huree.edu.mn/register.php", "_blank");
  };
  return (
    <div className="">
      <Cover sideBar={props.sideBar} toggleSideBar={props.toggleSideBar} />
      <AboutUs />
      <Goals />
      <CommonQuestions />
      <Comments />
      <div className="">
        <img src={bg} className="absolute z-10" />
        <div className="absolute z-40 flex justify-center items-center py-10">
          {allPostData && (
            <div>
              <Link
                to={"/" + allPostData[4].slug.current}
                key={allPostData[4].slug.current}
              >
                <Card style={{ borderRadius: 25 }}>
                  <div className="flex space-x-10">
                    <img
                      className="rounded-lg"
                      width={140}
                      height={140}
                      src={allPostData[4].mainImage.asset.url}
                      alt="mainImage"
                    />
                    <div>
                      <h2>{allPostData[4].title}</h2>
                      <p>{allPostData[4].description}</p>
                      <div className="text-[#777181]">
                        {moment(allPostData[4].publishedAt).format("L")}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          )}
          <button
            onClick={Reg}
            className="text-white text-4xl hover:text-[37px] hover:text-gray-200 hover:border-b-[1px]"
          >
            Онлайнаар бүртгүүлэх бол энд дарна уу!
          </button>
        </div>
      </div>
      <AllPost allPostData={allPostData} />
    </div>
  );
};

export default Home;
