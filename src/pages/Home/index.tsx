import { Link } from 'react-router-dom';
import { Card, Container } from '@mui/material';

import { useGetUsersQuery } from '@/redux/services/user.service';
// import { ColorLens } from '@mui/icons-material';

interface User {
  name: string;
  email: string;
  _id: string;
}

const Home = () => {
  const { data } = useGetUsersQuery('');

  const users = data?.users || [];
  console.log(users);

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      {users.map((user: User) => (
        <Link
          key={user._id}
          to={`/user/${user._id}`}
          style={{ textDecoration: 'none' }}
        >
          <Card sx={{ mb: 2, p: 3 }}>
            {user.name}: {user.email}
          </Card>
        </Link>
      ))}
    </Container>
  );
};

export default Home;
