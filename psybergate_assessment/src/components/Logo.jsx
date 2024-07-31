import LogoPng from '../assets/images/logo-image.png';

const Logo = () => {
    return (
        <div>
            <img className="logo" src={LogoPng} alt="Logo" />
        </div>
    );
};

export default Logo;