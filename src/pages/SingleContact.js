import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getSingleContact } from './api/api';

const SingleContact = () => {
  const { id } = useParams();

  const { data, isFetching } = useQuery({
    queryKey: ['singleContact'],
    queryFn: () => getSingleContact(id),
  });
  
  return isFetching ? (
    <div>Loading...</div>
  ) : (
    <div>
      <p>Name: {data.name}</p>
      <p>Last name: {data.lastName}</p>
      <p>About: {data.about}</p>
    </div>
  );
};

export default SingleContact;
