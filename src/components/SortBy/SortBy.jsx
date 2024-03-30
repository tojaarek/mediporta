import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import { selectSort } from '../../redux/tags.selectors';
import { setSort } from '../../redux/tags.slice';

const SortBy = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  return (
    <Box sx={{ minWidth: 145 }}>
      <FormControl sx={{ m: 1, minWidth: 145 }} size="small">
        <InputLabel sx={{ color: '#494949' }} id="sort-by-select-label">
          Sort by
        </InputLabel>
        <Select
          labelId="sort-by-select-label"
          id="sort-by-select"
          value={sort}
          label="Sort by"
          onChange={(event) => dispatch(setSort(event.target.value))}
          sx={{ color: '#494949' }}
        >
          <MenuItem value={'popular'}>Popularity</MenuItem>
          <MenuItem value={'activity'}>Activity</MenuItem>
          <MenuItem value={'name'}>Tag name</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortBy;
