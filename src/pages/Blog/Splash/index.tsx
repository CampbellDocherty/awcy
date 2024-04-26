import { useEffect, useState } from 'react';
import { Grid, SplashContainer, SplashImage } from './styles';

import aComputer from '../../../assets/A.png';
import cComputer from '../../../assets/C.png';
import wComputer from '../../../assets/W.png';
import yComputer from '../../../assets/Y.png';

export const Splash = ({ onEnded }: { onEnded: () => void }) => {
  const animationDuration = 4000;
  const navigateAwayAfter = 4500;
  const delayBetweenImages = 500;

  const [images, setImages] = useState([
    aComputer,
    wComputer,
    cComputer,
    yComputer,
  ]);
  const [showOriginalOrder, setShowOriginalOrder] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const navigationTimeout = setTimeout(() => {
      onEnded();
    }, navigateAwayAfter);

    return () => clearTimeout(navigationTimeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 4);
    }, delayBetweenImages);

    setTimeout(() => {
      setImages([aComputer, wComputer, cComputer, yComputer]);
      setShowOriginalOrder(true);
      clearInterval(interval);
    }, animationDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <SplashContainer>
      <Grid>
        {[0, 1, 2, 3].map((index) => {
          const imageIndexToRender = showOriginalOrder
            ? index
            : (imageIndex + index) % 4;
          return (
            <SplashImage
              key={index}
              $show={true}
              src={images[imageIndexToRender]}
              alt={`loading computer ${index}`}
            />
          );
        })}
      </Grid>
    </SplashContainer>
  );
};
