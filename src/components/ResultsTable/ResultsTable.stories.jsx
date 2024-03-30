import { Provider } from 'react-redux';
import store from '../../redux/store';
import ResultsTable from '../ResultsTable/ResultsTable';

export default {
  title: 'Components/ResultsTable',
  component: ResultsTable,
};

export const Basic = () => (
  <Provider store={store}>
    <ResultsTable />
  </Provider>
);
