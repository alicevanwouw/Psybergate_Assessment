import LogoPng from '../assets/images/sample-logo-light.png';

const Logo = () => {
    return (
        <div>
            <img className="logo" src={LogoPng} alt="Logo" />
        </div>
    );
};

export default Logo;