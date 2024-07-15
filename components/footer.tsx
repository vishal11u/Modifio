import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 12c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8zm-5.005-2.844a1 1 0 1 0-1.99-.313c0 .517.1 1.025.303 1.496A1 1 0 0 0 14.678 12c.005.017.01.033.017.05.025.068.06.133.107.193.086.104.199.188.325.25.272.156.613.23.976.21.8-.043 1.396-.507 1.78-1.091.51-.674.724-1.546.647-2.455-.118-1.118-.967-1.974-2.07-1.974-1.333 0-1.982.98-1.982 2.28 0 .18.021.36.062.533a.682.682 0 0 0 .202.36l.317-.318a1 1 0 0 0-1.415-1.414l-.317.317a.678.678 0 0 0-.36-.202c-.174-.041-.354-.062-.534-.062-1.3 0-2.28.65-2.28 1.982 0 1.104.857 1.953 1.974 2.07.91.077 1.781-.137 2.455-.648.584-.385 1.049-.98 1.092-1.78.02-.363-.054-.704-.21-.976-.063-.126-.147-.24-.25-.325a1.93 1.93 0 0 0-.193-.107c-.017-.008-.033-.013-.05-.018A1 1 0 0 0 14 10c-.48 0-.89.342-.985.813a3.43 3.43 0 0 1-.318 1.49z"
              />
            </svg>
          </a>

          <input
            type="text"
            placeholder="Subscribe to our newsletter"
            className="bg-gray-700 text-white border border-gray-600 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
