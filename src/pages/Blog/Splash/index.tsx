import { useRef } from 'react';
import splash from '../../../assets/splash.mp4';

export const Splash = ({ onEnded }: { onEnded: () => void }) => {
  const splashRef = useRef<HTMLVideoElement>(null);
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
