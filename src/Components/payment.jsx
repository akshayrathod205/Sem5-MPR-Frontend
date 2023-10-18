import React, { useState } from 'react';
import './payment.css'

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [address, setAddress] = useState('');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Add your payment processing logic here
    alert(`Payment submitted using ${paymentMethod}`);
    // Reset the form after successful payment
    setCardNumber('');
    setExpiry('');
    setCvv('');
    setAddress('');
  };

  const [paymentMethod, setPaymentMethod] = useState('cash');

  return (
    <>
      <h2 className='payment'>Payment Details</h2>

      <div className="payment-form">
        <form onSubmit={handlePaymentSubmit}>
          <div className="form-group">
            <label>Method of payment</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="card">Card</option>
              <option value="cash">Cash</option>
            </select>
          </div>

          <div className="form-group">
                <label>Shipping Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter the Shipping Address"
                />
              </div>

          {paymentMethod === 'card' && (
            <>
              <div className="form-group">
                <label>Expiry Date</label>
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="CVV"
                />
              </div>
            </>
          )}

          <button type="submit">Submit Payment</button>
        </form>
      </div>
    </>
  );
};

export default Payment;
