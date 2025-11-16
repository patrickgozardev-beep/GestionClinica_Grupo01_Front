import { ToastContainer } from 'react-toastify';
import AppRouter from './routes/AppRouter';
import { GlobalStyles } from './styles/globalStyles';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <AppRouter />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
