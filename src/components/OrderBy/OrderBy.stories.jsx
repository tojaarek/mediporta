import { Provider } from 'react-redux';
import store from '../../redux/store';

import OrderBy from '../OrderBy/OrderBy';

export default {
  title: 'Components/OrderBy',
  component: OrderBy,
};

export const Basic = () => (
  <Provider store={store}>
    <OrderBy />
  </Provider>
);
