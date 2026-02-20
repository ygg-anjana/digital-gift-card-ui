import React from 'react';
import DigitalGiftCard from './components/DigitalGiftCard';
import './App.css';

function App() {
  const handleRedeem = () => {
    alert('Redirecting to redemption page...');
    // In production, this would navigate to the actual redemption flow
  };

  return (
    <div className="App">
      <DigitalGiftCard
        amount="500"
        currency="AED"
        recipientName="Sarah Ahmed"
        senderName="Mohammed Ali"
        cardNumber="9876543212345678"
        validUntil="2026-12-31"
        onRedeem={handleRedeem}
      />
    </div>
  );
}

export default App;
