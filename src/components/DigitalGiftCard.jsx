import React from 'react';
import './DigitalGiftCard.css';

const DigitalGiftCard = ({
  amount = '100',
  currency = 'AED',
  recipientName = 'Valued Customer',
  senderName = 'YOUGotaGift',
  cardNumber = '1234567812345678',
  validUntil = '2026-12-31',
  onRedeem = () => {},
  qrCodeUrl = null
}) => {
  // Mask card number: show only last 4 digits
  const maskCardNumber = (number) => {
    if (!number || number.length < 4) return '•••• •••• •••• ••••';
    const lastFour = number.slice(-4);
    return `•••• •••• •••• ${lastFour}`;
  };

  // Format date
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="gift-card-container">
      <div className="gift-card">
        {/* Background Pattern Overlay */}
        <div className="card-pattern"></div>
        <div className="card-shine"></div>

        {/* Header Section */}
        <div className="card-header">
          <div className="logo">YOUGotaGift</div>
          <div className="card-badge">Gift Card</div>
        </div>

        {/* Center Content */}
        <div className="card-content">
          <div className="gift-icon">🎁</div>
          <div className="amount-display">
            <span className="currency">{currency}</span>
            <span className="amount">{amount}</span>
          </div>
          <div className="amount-label">Gift Card Value</div>
        </div>

        {/* Bottom Section */}
        <div className="card-footer">
          <div className="card-info">
            <div className="info-row">
              <span className="info-label">To:</span>
              <span className="info-value">{recipientName}</span>
            </div>
            <div className="info-row">
              <span className="info-label">From:</span>
              <span className="info-value">{senderName}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Card:</span>
              <span className="info-value card-number">{maskCardNumber(cardNumber)}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Valid Until:</span>
              <span className="info-value">{formatDate(validUntil)}</span>
            </div>
          </div>

          {qrCodeUrl && (
            <div className="qr-code">
              <img src={qrCodeUrl} alt="QR Code for redemption" />
            </div>
          )}
        </div>

        {/* Redeem Button */}
        <button className="redeem-button" onClick={onRedeem}>
          Redeem Now
        </button>
      </div>
    </div>
  );
};

export default DigitalGiftCard;
