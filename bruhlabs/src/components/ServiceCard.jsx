import React from 'react';

const ServiceCard = ({ title, icon }) => {
  const boxStyle = {
    position: 'relative',
    width: '164px',
    height: '164px',
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
    <div style={boxStyle} aria-hidden={false}>
      {/* Paint palette: absolute 94x94 background image placed at left:35px top:19px. It sits behind the title. */}
      {icon && (
        <div
          style={{
            position: 'absolute',
            left: 40,
            top: 22,
            width: 76,
            height: 76,
            backgroundImage: `url(${icon})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 12,
            zIndex: 8,
            opacity: 0.98,
            pointerEvents: 'none'
          }}
        />
      )}

      {/* Title placed at the bottom to avoid overlapping the palette/icon */}
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, zIndex: 20, textAlign: 'center', padding: '0 12px' }}>
        <div style={{ fontSize: 14, fontWeight: 600, textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>{title}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
