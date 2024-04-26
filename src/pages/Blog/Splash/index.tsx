import { useEffect, useState } from 'react';
import aComputer from '../../../assets/A.png';
import cComputer from '../../../assets/C.png';
import wComputer from '../../../assets/W.png';
import yComputer from '../../../assets/Y.png';

const images = [aComputer, wComputer, cComputer, yComputer];

export const Splash = ({ onEnded }: { onEnded: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const delayBeforeNavigation = 5000;
  const delayBetweenImages = 400;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, delayBetweenImages);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const navigationTimeout = setInterval(() => {
      onEnded();
    }, delayBeforeNavigation);

    return () => clearTimeout(navigationTimeout);
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: window.innerHeight,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <img
        style={{ width: '80%', maxWidth: '300px' }}
        src={images[currentImageIndex]}
        alt={`hey`}
      />
    </div>
  );
};
