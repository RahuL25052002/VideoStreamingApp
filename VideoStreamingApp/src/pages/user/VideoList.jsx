import React, { useState } from "react";

const VideoList = () => {
  const [videos] = useState([
    {
      id: 1,
      title: "React Basics",
      description: "Learn the fundamentals of React.",
      url: "https://www.youtube.com/embed/dGcsHMXbSOA",
    },
    {
      id: 2,
      title: "Advanced React",
      description: "Hooks, context and more.",
      url: "https://www.youtube.com/embed/Tn6-PIqc4UM",
    },
  ]);

  return (
    <div>
      <h2>All Videos</h2>
      {videos.map((video) => (
        <div key={video.id} style={{ marginBottom: "20px" }}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <iframe
            width="560"
            height="315"
            src={video.url}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={video.title}
          ></iframe>
          <RatingForm />
          <CommentForm />
        </div>
      ))}
    </div>
  );
};

const RatingForm = () => (
  <form>
    <label>Rate this video:</label>
    <select>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <button type="submit">Submit Rating</button>
  </form>
);

const CommentForm = () => (
  <form>
    <label>Leave a comment:</label>
    <textarea placeholder="Your comment here"></textarea>
    <button type="submit">Post Comment</button>
  </form>
);

export default VideoList;
