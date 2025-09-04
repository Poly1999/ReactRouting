import { useMutation, useQuery } from '@tanstack/react-query';
import styles from './contact.module.scss';
import { getContactsList, addContact, deleteContact } from '../api/api';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { useState } from 'react';

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  const { isFetching } = useQuery({
    queryKey: ['contactsList'],
    queryFn: getContactsList,
    onSuccess: data => {
      setContacts(data);
    },
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const { mutateAsync: handleAdd, isLoading: isLoadingAddNewContact } =
    useMutation({
      mutationFn: addContact,
      onSuccess: data => {
        setContacts(prev => [...prev, data]);
      },
    });

  const { mutateAsync: handleDelete, isLoading: isLoadingDeleteContact } =
    useMutation({
      mutationFn: deleteContact,
      onSuccess: (_, id) => {
        setContacts(prev => prev.filter(item => item.id !== id));
      },
    });

  const addNewContact = () => {
    const payload = {
      name: 'Luke',
      lastName: 'Skywalker',
      about: 'lorem epsum dolor sit amet, consectetur adip',
    };

    handleAdd(payload);
  };

  const deleteSpecificContact = id => {
    handleDelete(id);
  };

  return (
    <>
      <h1 className={styles.title}>Contacts</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {contacts?.map(contact => (
            <li key={contact.id} className={styles.item}>
              <p>{`${contact.name} ${contact.lastName} `}</p>
              <Button
                danger
                loading={isLoadingDeleteContact}
                onClick={() => deleteSpecificContact(contact.id)}
                type='primary'
              >
                Delete contact
              </Button>

              <Link style={{ color: 'skyblue' }} to={`${contact.id}`}>
                Click to check details
              </Link>
            </li>
          ))}
          <Button
            onClick={addNewContact}
            loading={isLoadingAddNewContact}
            type='primary'
          >
            Add new contact
          </Button>
        </ul>
      )}
    </>
  );
};

export default Contact;
