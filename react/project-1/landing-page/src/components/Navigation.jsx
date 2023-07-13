const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/image/brand_logo.png" alt="" />
      </div>
      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navigation;