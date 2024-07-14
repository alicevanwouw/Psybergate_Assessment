import LogoPng from '../assets/sample-logo-light.png';

const Logo = () => {
    return (
        <div>
            <img className="logo mt-1" src={LogoPng} alt="Logo" />
        </div>
    );
};

export default Logo;