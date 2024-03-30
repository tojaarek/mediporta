import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPage,
  selectPageSize,
  selectTotalResults,
} from '../../redux/tags.selectors';
import { setPage } from '../../redux/tags.slice';

const PaginationBar = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const pageSize = useSelector(selectPageSize);
  const totalResults = useSelector(selectTotalResults);

  const checkTotalPages = (totalResults, pageSize) => {
    return Math.ceil(totalResults / pageSize);
  };

  const totalPages = checkTotalPages(totalResults, pageSize);

  const handleChange = (event, value) => {
    dispatch(setPage(value));
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        variant="outlined"
        shape="rounded"
        color="primary"
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default PaginationBar;
