import { Provider } from 'react-redux';
import store from '../../redux/store';

import SortBy from '../SortBy/SortBy';

export default {
  title: 'Components/SortBy',
  component: SortBy,
};

export const Basic = () => (
  <Provider store={store}>
    <SortBy />
  </Provider>
);
