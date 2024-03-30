import Alert from '../Alert/Alert';
import { toast } from 'react-hot-toast';

export default {
  title: 'Components/Alert',
  component: Alert,
};

const notify = (message) => toast(message);

export const Basic = () => {
  return (
    <>
      <Alert />
      <button onClick={() => notify('This is an alert!')}>Show alert</button>
    </>
  );
};
