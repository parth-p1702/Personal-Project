
// Ye component main menu categories ko display karega
const MenuSection = ({ menuData, onAddToCart }) => {
  // Agar menu data available nahi hai toh ye default categories show karega
  const defaultMenuItems = [
    { name: "Breedfast", id: 1 },
    { name: "Dinnermenu", id: 2 }
  ];

  const menuItems = menuData?.categories || defaultMenuItems;

  return (
    <section className="menu-section">
      <h2 className="section-title">Main Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item-card">
            <div className="menu-item-content">
              <h3 className="menu-item-name">{item.name}</h3>
              {/* Yahan par price aur description add kar sakte hain agar API se mile toh */}
              <div className="menu-item-price">Starting from ₹99</div>
              <button 
                className="add-to-cart-btn"
                onClick={() => onAddToCart({
                  id: item.id,
                  name: item.name,
                  price: 99, // Default price
                  quantity: 1
                })}
              >
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;