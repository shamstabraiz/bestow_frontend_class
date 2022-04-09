import React, { useEffect, useState } from "react";
import NewBlog from "../components/Blog/NewBlog";
import { store } from "../redux/store";

function CreateBlog({ darkMode }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const profile = store.getState().value;
    if (profile !== {} || profile !== undefined) {
      setUser(profile);
    }
  }, []);

  return (
    <>
      {user ? (
        <>
          <NewBlog darkMode={darkMode} />
        </>
      ) : (
        <h1>Please Login And Continue</h1>
      )}
    </>
  );
}

export default CreateBlog;
