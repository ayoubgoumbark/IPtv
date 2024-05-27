import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p>Email: contact@moonlightodyssey.com</p>
            <p>Phone: +123-456-7890</p>
          </div>
          <div className="mt-4 md:mt-0">
            <h2 className="text-2xl font-semibold mb-2 text-center">Follow Us</h2>
            <div className="flex justify-center md:justify-start">
              <a href="_blank" className="mr-4">
                <FaFacebook size={32} />
              </a>
              <a href="_blank" className="mr-4">
                <FaTwitter size={32} />
              </a>
              <a href="_blank">
                <FaInstagram size={32} />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white" />
        <p className="text-center">© 2023 Moonlight Odyssey. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;