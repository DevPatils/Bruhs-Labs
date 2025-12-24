import React, { useState } from 'react';

const ServiceCard = ({ title, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const containerStyle = {
    perspective: '1000px',
    width: '100%',
    height: '100%',
  };

  const cardStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s ease-out',
    transform: isFlipped ? 'rotateY(180deg) scale(1.2)' : 'rotateY(0deg) scale(1)',
  };

  const faceStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    background: 'rgba(19, 16, 2, 0.1)',
    boxShadow:
      'inset 0px 6px 12px #FFFFFF, inset 0px 15px 48px #FDDE48, inset 0px 36px 48px #C74643, inset 0px 96px 120px #000000',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    borderRadius: '50px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const backFaceStyle = {
    ...faceStyle,
    transform: 'rotateY(180deg)',
  };

  return (
    <div
      className="relative w-40 h-40 md:w-[164px] md:h-[164px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div style={containerStyle}>
        <div style={cardStyle} className="cursor-pointer">
          {/* Front Face */}
          <div style={faceStyle}>
            {/* Paint palette: centered background image with reduced opacity */}
            {icon && (
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '42%',
                  transform: 'translate(-50%, -50%)',
                  width: 56,
                  height: 56,
                  backgroundImage: `url(${icon})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 12,
                  zIndex: 8,
                  opacity: 0.4,
                  pointerEvents: 'none'
                }}
              />
            )}

            {/* Title placed at the bottom */}
            <div className="absolute bottom-6 left-0 right-0 z-20 text-center px-3">
              <div className="text-xs md:text-sm font-semibold opacity-80" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)', color: 'white' }}>{title}</div>
            </div>
          </div>

          {/* Back Face */}
          <div style={backFaceStyle}>
            {/* Paint palette: centered background image with reduced opacity */}
            {icon && (
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '42%',
                  transform: 'translate(-50%, -50%)',
                  width: 56,
                  height: 56,
                  backgroundImage: `url(${icon})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 12,
                  zIndex: 8,
                  opacity: 0.4,
                  pointerEvents: 'none'
                }}
              />
            )}

            {/* Title placed at the bottom */}
            <div className="absolute bottom-6 left-0 right-0 z-20 text-center px-3">
              <div className="text-xs md:text-sm font-semibold opacity-80" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)', color: 'white' }}>{title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

