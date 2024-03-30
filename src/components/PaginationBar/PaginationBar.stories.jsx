import { Provider } from 'react-redux';
import store from '../../redux/store';
import PaginationBar from '../PaginationBar/PaginationBar';

export default {
  title: 'Components/PaginationBar',
  component: PaginationBar,
};

export const Basic = () => (
  <Provider store={store}>
    <PaginationBar />
  </Provider>
);
