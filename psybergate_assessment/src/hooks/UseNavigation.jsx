import { useNavigate } from 'react-router-dom';

const UseNavigation = () => {
    const navigate = useNavigate();

    const navigateToPage = (link) => {
        navigate(link);
    };

    return { navigateToPage };
};

export default UseNavigation;