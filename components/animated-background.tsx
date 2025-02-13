import React from "react";
interface Props {
  onStart: () => void;
}

const AnimatedBackground: React.FC<Props> = (props) => {
  return (
    <video
      className="background-video hide"
      onPlay={() => props.onStart()}
      preload="auto"
      autoPlay
      playsInline={true}
      muted={true}
      loop={false}
    >
      <source src='/GradientBackground.mp4' />
    </video>
  );
};

export default AnimatedBackground;
