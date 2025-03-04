import React, { useEffect, useState, useContext } from 'react';
import './viewcart.css';
import { cartcontext } from './App';
import emptycart from './img/emptycart.png';

function Viewcart() {
  const cartpick = emptycart;
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('0');
  const [isVerified, setIsVerified] = useState(false);
  const { cart = [], setCart } = useContext(cartcontext);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    const totalAmount = cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0);
    const formattedTotal = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(totalAmount);

    setTotal(formattedTotal);

    if (cart.length === 0) {
      setShowOrderForm(false);
    }
  }, [cart]);

  const removeCart = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };

  const handleOrder = () => {
    setShowOrderForm(true);
  };

  const sendOtp = () => {
    if (phone.length < 10) {
      alert('Phone number must be at least 10 digits long.');
      return;
    }else if(phone.length >10){
      alert('Enter valid mobile number');
      return;
    }
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otp);
    alert(`Your OTP is: ${otp}`);
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      alert('Phone number verified successfully!');
      setIsVerified(true);
    } 
    else {
      alert('Invalid OTP. Please try again.');
    }
   
  };

  const submitOrder = (e) => {
    e.preventDefault();
    if (name && phone && address && isVerified) {
      alert('Your items are successfully placed!');
      setCart([]);
      setShowOrderForm(false);
      setName('');
      setPhone('');
      setAddress('');
      setOtp('');
      setGeneratedOtp('');
      setIsVerified(false);
    } else {
      alert('Please fill in all the details and verify your phone number before placing the order.');
    }
  };

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await response.json();
          setAddress(data.display_name);
        } catch (error) {
          alert('Failed to fetch your location');
        }
      });
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <>
      {cart?.length > 0 ? (
        <h1 className="head">Cart items</h1>
      ) : (
        <h1 className="head"> Your Cart has empty</h1>
      )}

      <div className="productcontainer" >
        <div className="cart-container" >
          {cart.map((data) => (
            <div className="cart-product" key={data.id}>
              <div className="img1">
                <img src={data.pic} alt={data.name}></img>
              </div>
              <div className="detail">
                <h3 className="pname">{data.name}</h3>
                <p className="price">Price Rs:{data.amt}</p>
                <button className="cancel-button" onClick={() => removeCart(data.id)}>Cancel</button>
              </div>
            </div>
          ))}

          {cart?.length > 0 ? (
            <h1 className="total">Total: Rs.{total}</h1>
          ) : (
            <img src={cartpick} className="emptypick" alt="Empty cart"></img>
          )}

          {cart?.length > 0 && !showOrderForm && (
            <button className="orderbtn" onClick={handleOrder}>Buy</button>
          )}
        </div>

        {showOrderForm && cart.length > 0 && (
          <div className="order-form-container" >
            <form className="order-form" onSubmit={submitOrder}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button type="button" className="btn btn-primary" onClick={sendOtp}>Send OTP</button>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button type="button" className="btn btn-success" onClick={verifyOtp}>Verify OTP</button>
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
           <h5 className='text-danger'>Product available only cash on delivery!</h5>
              <button type="button" className="btn btn-secondary" onClick={detectLocation}>Use my location</button>
              <button type="submit" className="orderbtn" disabled={!isVerified}>Confirm Order</button>
            </form>
          </div>
        )}
      </div>
    
    </>
  );
}

export default Viewcart;
