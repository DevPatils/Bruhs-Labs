import React from 'react';

const ServiceCard = ({ title, icon }) => {
  const boxStyle = {
    position: 'relative',
    background: 'rgba(19, 16, 2, 0.1)',
    boxShadow:
      'inset 0px 6px 12px #FFFFFF, inset 0px 15px 48px #FDDE48, inset 0px 36px 48px #C74643, inset 0px 96px 120px #000000',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    borderRadius: '50px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const innerStyle = {
    zIndex: 10,
    textAlign: 'center',
    color: 'white'
  };

  const iconWrapper = {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    background: 'rgba(0,0,0,0.45)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={boxStyle} className="relative w-40 h-40 md:w-[164px] md:h-[164px]" aria-hidden={false}>
      {/* Paint palette: centered background image with reduced opacity */}
      {icon && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
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

      {/* Title placed at the bottom to avoid overlapping the palette/icon */}
      <div className="absolute bottom-3 left-0 right-0 z-20 text-center px-3">
        <div className="text-sm md:text-base font-semibold" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>{title}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
