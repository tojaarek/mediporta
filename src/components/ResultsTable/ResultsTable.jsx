import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { selectTags, selectIsLoading } from '../../redux/tags.selectors';
import Loader from '../Loader/Loader';

const ResultsTable = () => {
  const tags = useSelector(selectTags);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer
        component={Paper}
        style={{
          maxHeight: '81vh',
          height: '81vh',
          marginBottom: 20,
        }}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <Table
            sx={{ minWidth: 650 }}
            size="small"
            aria-label="a dense table"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Tag name</TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="right">
                  Related posts
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tags.map(({ name, count }) => (
                <TableRow key={name}>
                  <TableCell component="th" scope="row">
                    {name}
                  </TableCell>
                  <TableCell align="right">{count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Box>
  );
};

export default ResultsTable;
