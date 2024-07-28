import { useRef } from 'react';

import Bell from '../../../assets/img/bell.jpg';

import './NotificationIcon.scss';

const NotificationIcon = () => {
  const audioRef = useRef<any>(null);

  const handlePlay = () => {
    audioRef.current.play().catch((error: any) => {
      // Autoplay was prevented, handle the error or show a user interaction prompt.
    });
  };

  return (
    <div>
      <img src={Bell} alt="notification-icon" className="bell" onClick={handlePlay} />
      {/* <audio src={audioFile} controls ref={audioRef} style={{ display: 'none' }}></audio> */}
    </div>
  );
};

export default NotificationIcon;
