import { useEffect } from 'react';
import firstVideo from '../../assets/video/brand.mp4';

const VideoSlider = () => {
  useEffect(() => {
    const vid = document.getElementById("video");
    if (vid) {
      vid.play();
    }
  }, []);

  return (
    <section>
      <video id="video" autoPlay loop muted>
        <source src={firstVideo} type="video/mp4" />
      </video>
    </section>
  );
};

export default VideoSlider;
