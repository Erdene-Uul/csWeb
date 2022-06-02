import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import Header from "../../components/header";
import vector from "../../assets/images/Vector.png";
import round from "../../assets/images/round.png";

const OnePost = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current ==$slug]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url,
                    }
                },
                body,
            }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="bg-[#2A35A7] lg:py-4 h-56 flex flex-col justify-between">
        <Header />
        <div className="absolute top-28 left-1/2">
          <img width={110} height={110} src={vector} />
        </div>
        <div className="absolute top-36 right-96">
          <img width={50} height={50} src={round} />
        </div>
        <div className="text-white flex justify-end mr-8 font-bold text-xl">
          МЭДЭЭ & БЛОГ
        </div>
      </div>
      {postData ? (
        <div>
          <div className="font-bold text-2xl text-center my-12">
            {postData.title}
          </div>
          <div className=" max-w-5xl mx-auto mb-28">
            <BlockContent
              projectId="dtuheuws"
              dataset="production"
              blocks={postData.body}
              className="flex flex-col items-center"
            />
          </div>
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
};
export default OnePost;
