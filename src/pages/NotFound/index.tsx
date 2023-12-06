import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div>
      Esta ruta no esiste debe ir al inicio{' '}
      <Button variant="outlined" onClick={handleRedirect}>
        Click para ir al Home
      </Button>
    </div>
  );
};

export default NotFound;
