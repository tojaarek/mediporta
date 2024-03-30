import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import { selectOrder } from '../../redux/tags.selectors';
import { setOrder } from '../../redux/tags.slice';

const OrderBy = () => {
  const dispatch = useDispatch();
  const order = useSelector(selectOrder);

  return (
    <Box sx={{ minWidth: 145 }}>
      <FormControl sx={{ m: 1, minWidth: 145 }} size="small">
        <InputLabel sx={{ color: '#494949' }} id="order-by-select-label">
          Order by
        </InputLabel>
        <Select
          labelId="oreder-by-select-label"
          id="order-by-select"
          value={order}
          label="Order by"
          onChange={(event) => dispatch(setOrder(event.target.value))}
          sx={{ color: '#494949' }}
        >
          <MenuItem value={'desc'}>Descending</MenuItem>
          <MenuItem value={'asc'}>Ascending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default OrderBy;
