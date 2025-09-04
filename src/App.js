import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
// import Home from './pages/home';
// import Contact from './pages/contacts/contact';
// import About from './pages/about/about';
// import NotFoundPage from './pages/NotFound';

// import Layout from './Layout/layout';
// import SingleContact from './pages/SingleContact';
import { getAllUsers } from './pages/api/api';
import { lazy, Suspense, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PrivateRoutes from './pages/PrivateRoutes';
// import Login from './pages/login/Login';

const Home = lazy(() => import('./pages/home'));
const Contact = lazy(() => import('./pages/contacts/contact'));
const About = lazy(() => import('./pages/about/about'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));
const Layout = lazy(() => import('./Layout/layout'));
const SingleContact = lazy(() => import('./pages/SingleContact'));
const Login = lazy(() => import('./pages/login/login'));

function App() {
  const [loginUser, setLoginUser] = useState({
    username: 'null',
    email: 'null',
  });
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const { data, isFetching } = useQuery({
    queryKey: ['usersList'],
    queryFn: getAllUsers,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  console.log(data, loginUser);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path='/'
          element={
            <Layout isFetching={isFetching} isAuthenticated={isAuthenticated} />
          }
        >
          <Route index element={<Home />} />
          <Route
            path='/login'
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route
            path='/contacts'
            element={
              <PrivateRoutes isAuthenticated={isAuthenticated}>
                <Contact />
              </PrivateRoutes>
            }
          />

          <Route
            path='/contacts/:id'
            element={
              <PrivateRoutes isAuthenticated={isAuthenticated}>
                <SingleContact />
              </PrivateRoutes>
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/404' element={<NotFoundPage />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
