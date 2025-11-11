
// Ye header component hai jo restaurant ki basic information show karega
const Header = () => {
  return (
    <header className="header">
      <div className="restaurant-info">
        <h1 className="restaurant-name">FoodChow Demo India</h1>
        <p className="restaurant-address">Suret, Gujarat, India</p>
      </div>
      
      <div className="restaurant-status">
        <div className="status-open">
          <span className="status-dot"></span>
          <span className="status-text">Restaurant Is Open</span>
        </div>
        <p className="timing">Timing: Open 24 Hours</p>
      </div>

      <div className="service-options">
        <div className="service-buttons">
          <button className="service-btn book-now">Book Now</button>
          <button className="service-btn language">en</button>
          <button className="service-btn contact">7016997342</button>
        </div>
      </div>
    </header>
  );
};

export default Header;