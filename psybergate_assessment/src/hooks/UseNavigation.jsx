// useNavigation.js
import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
    const navigate = useNavigate();

    const navigateToPage = (path, state) => {
        console.log('Navigating to:', path, 'with state:', state); 
        navigate(path, { state });
    };

    return { navigateToPage };
};

export default useNavigation;
