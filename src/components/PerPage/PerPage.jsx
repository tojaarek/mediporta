import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import { selectPageSize } from '../../redux/tags.selectors';
import { setPageSize } from '../../redux/tags.slice';

const PerPage = () => {
  const dispatch = useDispatch();
  const pageSize = useSelector(selectPageSize);

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 90 }} size="small">
        <InputLabel sx={{ color: '#494949' }} id="per-page-select-label">
          Per page
        </InputLabel>
        <Select
          labelId="per-page-select-label"
          id="per-page-select"
          value={pageSize}
          label="Per page"
          onChange={(event) => dispatch(setPageSize(event.target.value))}
          sx={{ color: '#494949' }}
        >
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={60}>60</MenuItem>
          <MenuItem value={80}>80</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default PerPage;
