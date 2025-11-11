import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import DealsSection from './components/DealsSection';
import Header from './components/Header';
import MenuSection from './components/MenuSection';
import './styles/App.css';

// यह main App component hai जो पूरी website को manage करता hai
function App() {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  // API se data fetch karne ka function
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const response = await fetch(
        'https://www.foodchow.com/api/FoodChowWD/GetRestaurantMenuWDWidget_multi?ShopId=3161&locale_id=null'
      );
      const data = await response.json();
      setMenuData(data);
      setLoading(false);
    } catch (error) {
      console.error('API data fetch karne mein error aaya:', error);
      setLoading(false);
    }
  };

  // Cart mein item add karne ka function
  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Cart se item remove karne ka function
  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading delicious food items...</p>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Header section jo top par dikhega */}
      <Header />
      
      <div className="main-container">
        {/* Left side - Menu aur Deals */}
        <div className="content-section">
          <MenuSection 
            menuData={menuData} 
            onAddToCart={addToCart}
          />
          <DealsSection 
            menuData={menuData} 
            onAddToCart={addToCart}
          />
        </div>
        
        {/* Right side - Cart */}
        <div className="cart-section">
          <Cart 
            cartItems={cartItems} 
            onRemoveFromCart={removeFromCart}
          />
        </div>
      </div>

      {/* Footer section */}
      <footer className="footer">
        
        <p>Food Ordering System by FOOD CHOW</p>
      </footer>
    </div>
  );
}

export default App;