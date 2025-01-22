import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="bg-white text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-black">MyStore</h2>
          <p className="text-sm text-black">Your favorite products in one place.</p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
