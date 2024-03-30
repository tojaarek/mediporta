import { Provider } from 'react-redux';
import store from '../../redux/store';
import PerPage from '../PerPage/PerPage';

export default {
  title: 'Components/PerPage',
  component: PerPage,
};

export const Basic = () => (
  <Provider store={store}>
    <PerPage />
  </Provider>
);
