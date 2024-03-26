import { useState, useEffect } from 'react';

const VideoPlayer = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [nextVideo, setNextVideo] = useState(1);

  const handleVideoEnd = () => {
    setCurrentVideo(nextVideo);
    setNextVideo((nextVideo + 1) % videos.length);
  };

  useEffect(() => {
    const timer = setTimeout(handleVideoEnd, 3000); // Change video every 3 seconds
    return () => clearTimeout(timer);
  }, [currentVideo, nextVideo]);

  return (
    <>
      <video
        key={videos[currentVideo]}
        src={videos[currentVideo]}
        autoPlay
        muted 
        loop={false}
        style={{ 
          position: 'fixed',
          top: 0, 
          left: 0,
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          objectPosition: videos[currentVideo] === "/chefVid.mp4" ? "50% 70%" 
          : (videos[currentVideo] === "/steakVid.mp4" ? "0% 100%" 
          : "50% 50%"),
          zIndex: -1,
          opacity: currentVideo === nextVideo ? 1 : 0,
          transition: 'opacity 1s'
        }} 
      />
      <video
        key={videos[nextVideo]}
        src={videos[nextVideo]}
        autoPlay
        muted 
        loop={false}
        style={{ 
          position: 'fixed',
          top: 0, 
          left: 0,
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          objectPosition: videos[nextVideo] === "/chefVid.mp4" ? "50% 70%" 
          : (videos[nextVideo] === "/steakVid.mp4" ? "0% 100%" 
          : "50% 50%"),
          zIndex: -1,
          opacity: currentVideo === nextVideo ? 0 : 1,
          transition: 'opacity 1s'
        }} 
      />
    </>
  );
};

export default VideoPlayer;
