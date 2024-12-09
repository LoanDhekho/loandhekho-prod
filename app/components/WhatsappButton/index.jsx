import './whatsapp-button.scss'; 
import Image from 'next/image';

const WhatsappButton = () => (
  <div className="whatsapp-button">
    <a href="https://wa.me/+918506917256" target="_blank" rel="noopener noreferrer">
      <img
        src="/img/svg/whatsapp.svg"  // Adjust path as necessary
        alt="WhatsApp"
        className="whatsapp-icon"
        width={60}
        height={60}
      />
    </a>
  </div>
);

export default WhatsappButton;