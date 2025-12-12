import logoSrc from '../assets/logo.png';

const Logo = ({ size = 48, showText = true }) => {
  return (
    <div className="flex items-center space-x-3">
      <img src={logoSrc} alt="Bruhs Labs" width={size} height={size} style={{ display: 'block' }} />
      {showText && (
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-white font-semibold">Bruhs Labs</span>
          <span className="text-xs text-neutral-400">Design & Product</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
