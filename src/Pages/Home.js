import React from "react";
import Slider from "../components/Slider/Slider";
import BlogGrid from "../components/Blog/BlogGrid";
import TeamMember from "../components/TeamMember";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
function Home({ darkMode }) {
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
      <div className={darkMode ? `darkmode Home` : `lightmode Home`}>
        <Slider image={"/hunza.jpg"} />
        <div className={darkMode ? `darkmode Team` : `lightmode Team`}>
          <h1 className=" headingHome pb-3">Our Team</h1>
          <div className="GridHome">
            <TeamMember name="Shams Tabraiz" facebook="shamstabraizofficial" image="hunza.jpg" job="Backen Dev" />
            <TeamMember name="Ali Hunza" image="aliabad.jpg" job="Backen Dev" />
            <TeamMember name="Shezi Roy" image="hunza.jpg" job="Backen Dev" />
          </div>
        </div>
        <div className={darkMode ? `darkmode recentposts` : `lightmode recentposts`}>
          <h1 className="headingHome pb-3">Recent Posts</h1>
          <div className="GridHome">
            {posts && posts.slice(0, 4).map((post) => <BlogGrid key={post._id} darkMode={darkMode} props={post} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
