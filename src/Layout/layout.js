import { NavLink, Outlet } from 'react-router-dom';

const layout = () => {
  return (
    <>
      <header>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contacts'>Contact</NavLink>
        <NavLink to='/about'>About</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer
        style={{
          textAlign: 'center',
          padding: '20px',
          marginTop: '20px',
          borderTop: '1px solid #ccc',
        }}
      >
        Have a good day 😊 2025
      </footer>
    </>
  );
};

export default layout;
