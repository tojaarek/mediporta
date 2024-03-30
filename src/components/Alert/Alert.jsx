import { Toaster } from 'react-hot-toast';

const Alert = () => (
  <Toaster
    toastOptions={{
      style: {
        backgroundColor: '#c24b44',
        color: '#fff',
      },
    }}
  />
);

export default Alert;
