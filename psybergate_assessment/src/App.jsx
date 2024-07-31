import './App.css';
import { AppRoutes } from './AppRoutes';
import { FormProvider } from './components/FormContext';

function App() {
    return (
        <FormProvider>
            <AppRoutes />
        </FormProvider>
  )
}

export default App
