import React from 'react';
import 'remixicon/fonts/remixicon.css'

const FooterOverlay = () => (
  <div className="footer">
    <div className="footer_copyright">
      &#169; All Rights Reserverd By&nbsp;&nbsp;&nbsp;Main In Heaven
    </div>
    <div className='footer_links'>
          <a href='https://www.facebook.com' className='footer-facebook'><i class="ri-facebook-box-line"></i></a>
          <a href='https://www.instagram.com' className='footer-instagram'><i class="ri-instagram-line"></i></a>
          <a href='https://www.messenger.com' className='footer-messenger'><i class="ri-messenger-line"></i></a>
          <a href='https://www.whatsapp.com' className='footer-whatsapp'><i class="ri-whatsapp-line"></i></a>
    </div>
  </div>
);

export default FooterOverlay;