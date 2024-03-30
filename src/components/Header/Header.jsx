import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SortBy from '../SortBy/SortBy';
import OrderBy from '../OrderBy/OrderBy';
import PerPage from '../PerPage/PerPage';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: '#fefefe' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: '#494949' }}
          >
            Stack Overflow Tags
          </Typography>
          <PerPage />
          <SortBy />
          <OrderBy />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
