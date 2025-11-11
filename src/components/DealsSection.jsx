
// Ye component special deals aur offers ko show karega
const DealsSection = ({ menuData, onAddToCart }) => {
  // Default deals agar API data available nahi hai
  const defaultDeals = [
    { name: "Shakes and Juices", id: 1, price: 120 },
    { name: "Soup", id: 2, price: 80 },
    { name: "Mocktails", id: 3, price: 150 },
    { name: "Choat", id: 4, price: 60 },
    { name: "Sandwich", id: 5, price: 90 },
    { name: "Starters", id: 6, price: 200 },
    { name: "Chinese Starters", id: 7, price: 180 },
    { name: "Tandoori Mushroom Starters", id: 8, price: 220 },
    { name: "Desserts", id: 9, price: 100 },
    { name: "Burgers", id: 10, price: 110 },
    { name: "FAMILY CLUB", id: 11, price: 500 },
    { name: "Choola", id: 12, price: 300 }
  ];

  const deals = menuData?.deals || defaultDeals;

  return (
    <section className="deals-section">
      <h2 className="section-title">Deals</h2>
      
      {/* Main Deals Grid */}
      <div className="deals-grid">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-card">
            <div className="deal-content">
              <h4 className="deal-name">{deal.name}</h4>
              <div className="deal-price">₹{deal.price}.00</div>
              <div className="service-options">
                <span className="service-tag">Take Away</span>
                <span className="service-tag">Dine in</span>
                <span className="service-tag">Delivery</span>
              </div>
              <button 
                className="add-deal-btn"
                onClick={() => onAddToCart({
                  id: deal.id,
                  name: deal.name,
                  price: deal.price,
                  quantity: 1
                })}
              >
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Special Deals Section */}
      <div className="special-deals">
        <div className="special-deal">
          <h3>Deaths (2)</h3>
          <div className="deal-price">₹500.00</div>
          <button className="add-btn">ADD</button>
        </div>
        
        <div className="special-deal">
          <h3>Second Deal</h3>
          <p>Sewcond</p>
          <div className="service-options">
            <span>Take Away</span>
            <span>Dine in</span>
            <span>Delivery</span>
          </div>
        </div>

        <div className="special-deal">
          <h3>Pizza Special Deal</h3>
          <p>Test</p>
          <div className="service-options">
            <span>Take Away</span>
            <span>Dine in</span>
            <span>Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;