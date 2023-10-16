import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/images/loading.json'; // Import your animation file

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
   
      <Lottie options={defaultOptions} height={200} width={200} isClickToPauseDisabled={true} />
    
  );
};

export default LottieAnimation;