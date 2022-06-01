import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
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
    <div>
      {postData ? (
        <div>
          <h1>{postData.title}</h1>
          <img src={postData.mainImage.asset.url} />
          <div>
            <BlockContent blocks={postData.body} />
          </div>
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
};
export default OnePost;
