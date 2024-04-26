import { useRef } from 'react';
import splash from '../../../assets/splash.mp4';

export const Splash = ({ onEnded }: { onEnded: () => void }) => {
  const splashRef = useRef<HTMLVideoElement>(null);

  const getFPS = () =>
    new Promise((resolve) =>
      requestAnimationFrame((t1) =>
        requestAnimationFrame((t2) => resolve(1000 / (t2 - t1)))
      )
    );

  // Calling the function to get the FPS
  getFPS().then((fps) => console.log(fps));
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
      <video
        onEnded={onEnded}
        ref={splashRef}
        autoPlay
        muted
        playsInline
        src={splash}
        style={{ width: '100%', height: '100%', maxWidth: '900px' }}
      />
    </div>
  );
};
