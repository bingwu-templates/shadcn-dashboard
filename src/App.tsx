import { RouterProvider } from 'react-router';
import router from './routes/Router';
import { Toaster } from './components/ui/sonner';
import './css/globals.css';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
