import { Provider } from 'react-redux';
import store from '../../redux/store';
import Header from '../Header/Header';

export default {
  title: 'Components/Header',
  component: Header,
};

export const Basic = () => (
  <Provider store={store}>
    <Header />
  </Provider>
);
