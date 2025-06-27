import React from 'react';

const VideoDetailModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-3/4 max-w-2xl">
        <h2 className="text-xl font-bold mb-4">{video.title}</h2>
        <video src={video.videoUrl} controls className="w-full mb-4" />
        <p>{video.description}</p>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default VideoDetailModal;