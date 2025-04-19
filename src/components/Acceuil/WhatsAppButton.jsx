import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '+212622570787';
  const message = encodeURIComponent("Bonjour, je souhaite commander un produit.");

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: isHovered ? '30px' : '50%',
          width: isHovered ? '200px' : '60px',
          height: '60px',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          textDecoration: 'none',
          overflow: 'hidden',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaWhatsapp style={{ fontSize: '30px', flexShrink: 0 }} />
        {isHovered && (
          <span style={{ marginLeft: '10px', whiteSpace: 'nowrap' }}>
            Commander via WhatsApp
          </span>
        )}
      </a>
    </div>
  );
};

export default WhatsAppButton;