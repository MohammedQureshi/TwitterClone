import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetTextBox from "./TweetTextBox";
import Post from "./Post";
import FlareIcon from "@material-ui/icons/Flare";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("text", "asc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        <FlareIcon className="flareIconStyle" />
      </div>
      <TweetTextBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            avatar={post.avatar}
            text={post.text}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
