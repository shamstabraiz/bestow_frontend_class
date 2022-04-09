import React, { useState, useEffect } from "react";
import BlogGrid from "../components/Blog/BlogGrid";
import Slider from "../components/Slider/Slider";

function Blog({ darkMode }) {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    // fetch("https://weedrive.herokuapp.com/api/blog")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setPosts(data);
    //     console.log(data);
    //   });

    setPosts([
      {
        title: "Hunza",
        content: "this blog is about hunza",
        img: "/hunza.jpg",
      },
      {
        title: "Aliabad",
        content: "aliabad is in hunza",
        img: "/aliabad.jpg",
      },
      {
        title: "Aliabad",
        content: "aliabad is in hunza",
        img: "/aliabad.jpg",
      },
      {
        title: "Aliabad",
        content: "aliabad is in hunza",
        img: "/aliabad.jpg",
      },
      {
        title: "Aliabad",
        content: "aliabad is in hunza",
        img: "/aliabad.jpg",
      },
      {
        title: "Hunza",
        content: "this blog is about hunza",
        img: "/hunza.jpg",
      },
      {
        title: "Aliabad",
        content: "aliabad is in hunza",
        img: "/aliabad.jpg",
      },
      {
        title: "Aliabad",
        content: "aliabad is in hunza",
        img: "/aliabad.jpg",
      },
      {
        title: "Aliabad",
        content: "aliabad is in hunza",
        img: "/aliabad.jpg",
      },
      {
        title: "Aliabad",
        content: "aliabad is in hunza",
        img: "/aliabad.jpg",
      },
    ]);
  }, []);
  return (
    <>
      <Slider image="aliabad.jpg" height ='250'/>
      <div className={darkMode ? `darkmode Blog` : `lightmode Blog`}>
        <div className={darkMode ? `darkmode` : `lightmode`}>
          <div className={darkMode ? `darkmode GridHome` : `lightmode GridHome`}>
            {posts && posts.map((post) => <BlogGrid key={post._id} darkMode={darkMode} props={post} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
