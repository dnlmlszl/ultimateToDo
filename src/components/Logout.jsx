import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import { useGlobalContext } from '../context/UserContext';

const Logout = () => {
  const { logout } = useGlobalContext();
  return (
    <Button variant="contained" onClick={logout}>
      <LogoutIcon />
    </Button>
  );
};

export default Logout;
