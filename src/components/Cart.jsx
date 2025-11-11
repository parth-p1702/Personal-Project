
// Ye component shopping cart ko handle karega
const Cart = ({ cartItems, onRemoveFromCart }) => {
  // Total price calculate karne ka function
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <p className="empty-cart-message">
            Your Cart is Empty! Add Some Delicious Food Items And Satisfy Your Cravings.
          </p>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-price">₹{item.price} x {item.quantity}</p>
                <p className="item-total">₹{item.price * item.quantity}</p>
              </div>
              <button 
                className="remove-btn"
                onClick={() => onRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          
          <div className="cart-total">
            <h3>Total: ₹{calculateTotal()}.00</h3>
          </div>
          
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;