import { useNavigate } from 'react-router-dom';
import styles from './about.module.scss';

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className={styles.title}>About Page</h1>
      <p>This page provides information about our project.</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
