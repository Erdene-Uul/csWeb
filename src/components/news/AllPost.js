import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client";
import { Tabs } from "antd";
import { Card } from "antd";
import moment from "moment";

const { TabPane } = Tabs;
const AllPost = () => {
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
  return (
    <div className="bg-[#F5F5F5] p-20">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Мэдээ & Блог" key={1}>
          {" "}
          {allPostData && (
            <div className="flex space-x-7 h-[670px]">
              <div className="w-2/3 space-y-7">
                {" "}
                <div>
                  <Link
                    to={"/" + allPostData[3].slug.current}
                    key={allPostData[3].slug.current}
                  >
                    <Card style={{ borderRadius: 25 }}>
                      <div className="flex space-x-10">
                        <img
                          className="rounded-lg"
                          width={340}
                          height={340}
                          src={allPostData[3].mainImage.asset.url}
                          alt="mainImage"
                        />
                        <div>
                          <h2>{allPostData[3].title}</h2>
                          <p>{allPostData[3].description}</p>
                          <div>
                            {moment(allPostData[3].publishedAt).format("L")}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </div>
                <div className="flex space-x-7">
                  <Link
                    to={"/" + allPostData[2].slug.current}
                    key={allPostData[2].slug.current}
                  >
                    <Card style={{ borderRadius: 25, height: "100%" }}>
                      <div>
                        <img
                          className="rounded-lg"
                          width={340}
                          height={340}
                          src={allPostData[2].mainImage.asset.url}
                          alt="mainImage"
                        />
                        <div className="mt-6">
                          <h2>{allPostData[2].title}</h2>
                          <p>{allPostData[2].description}</p>
                          <div>
                            {moment(allPostData[2].publishedAt).format("L")}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                  <Link
                    to={"/" + allPostData[1].slug.current}
                    key={allPostData[1].slug.current}
                  >
                    <Card style={{ borderRadius: 25, height: "100%" }}>
                      <div>
                        <img
                          className="rounded-lg"
                          width={340}
                          height={340}
                          src={allPostData[1].mainImage.asset.url}
                          alt="mainImage"
                        />
                        <div className="mt-6">
                          <h2>{allPostData[1].title}</h2>
                          <p>{allPostData[1].description}</p>
                          <div>
                            {moment(allPostData[1].publishedAt).format("L")}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </div>
              </div>
              <div className="w-1/3">
                <Link
                  to={"/" + allPostData[0].slug.current}
                  key={allPostData[0].slug.current}
                >
                  <Card style={{ borderRadius: 25, height: 685 }}>
                    <div className="flex flex-col items-center">
                      <img
                        className="rounded-lg"
                        width={340}
                        height={340}
                        src={allPostData[0].mainImage.asset.url}
                        alt="mainImage"
                      />
                      <div className="mt-6">
                        <h2>{allPostData[0].title}</h2>
                        <p>{allPostData[0].description}</p>
                        <div>
                          {moment(allPostData[0].publishedAt).format("L")}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>
          )}
        </TabPane>
        <TabPane tab="HureeChain Club" key={2}>
          <div className="h-[650px]">Content of tab 2</div>
        </TabPane>
      </Tabs>
    </div>
  );
};
export default AllPost;
