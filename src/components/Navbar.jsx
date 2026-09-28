function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="navbar">
      <div className="logo">Image Gallery</div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search images..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </nav>
  );
}

export default Navbar;