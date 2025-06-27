import React from "react";

const UploadVideo = () => (
  <div>
    <h2>Upload Video</h2>
    <form>
      <input type="text" placeholder="Title" required />
      <textarea placeholder="Description" required></textarea>
      <input type="url" placeholder="Video URL" required />
      <button type="submit">Upload</button>
    </form>
  </div>
);

export default UploadVideo;