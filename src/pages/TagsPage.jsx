import { useSelector, useDispatch } from 'react-redux';
import {
  selectSort,
  selectOrder,
  selectPageSize,
  selectPage,
} from '../redux/tags.selectors';
import { useEffect } from 'react';
import { getTags } from '../redux/tags.actions';
import ResultsTable from '../components/ResultsTable/ResultsTable';
import PaginationBar from '../components/PaginationBar/PaginationBar';

const TagsPage = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  const order = useSelector(selectOrder);
  const pageSize = useSelector(selectPageSize);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(getTags({ order, sort, pageSize, page }));
  }, [order, sort, pageSize, page, dispatch]);

  return (
    <section>
      <ResultsTable />
      <PaginationBar />
    </section>
  );
};

export default TagsPage;
