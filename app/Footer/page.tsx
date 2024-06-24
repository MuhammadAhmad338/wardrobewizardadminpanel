'use client';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">WardrobeSeller</h2>
          <p>Your go-to place for selling wardrobes.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <Link href="home">
                <p className="hover:text-gray-400">Home</p>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="products">
                <p className="hover:text-gray-400">Products</p>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="about">
                <p className="hover:text-gray-400">About Us</p>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="contacts">
                <p className="hover:text-gray-400">Contact</p>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Support</h2>
          <ul>
            <li className="mb-2">
              <Link href="#faq">
                <p className="hover:text-gray-400">FAQ</p>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#shipping">
                <p className="hover:text-gray-400">Shipping & Returns</p>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#privacy">
                <p className="hover:text-gray-400">Privacy Policy</p>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#terms">
                <p className="hover:text-gray-400">Terms of Service</p>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>Email: support@wardrobeseller.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.5a10 10 0 0 1-2.88.79 5 5 0 0 0 2.16-2.76 10 10 0 0 1-3.16 1.21 5 5 0 0 0-8.53 4.57A14 14 0 0 1 1.64 3.1a5 5 0 0 0 1.55 6.68A5 5 0 0 1 1 9.09v.06a5 5 0 0 0 4 4.89 5 5 0 0 1-2.26.09 5 5 0 0 0 4.68 3.47A10 10 0 0 1 0 20.29a14 14 0 0 0 7.55 2.21c9.05 0 14-7.49 14-14 0-.21 0-.42-.01-.63A10 10 0 0 0 24 4.5z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.95 2H7.05A5.06 5.06 0 0 0 2 7.05v9.9A5.06 5.06 0 0 0 7.05 22h9.9A5.06 5.06 0 0 0 22 16.95v-9.9A5.06 5.06 0 0 0 16.95 2zm-4.1 15a4.1 4.1 0 1 1 4.1-4.1 4.1 4.1 0 0 1-4.1 4.1zm4.67-7.73a1.54 1.54 0 1 1-1.54-1.54 1.54 1.54 0 0 1 1.54 1.54z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 4.25 2.63 7.85 6.32 9.32-.09-.79-.17-2.03.04-2.92.18-.78 1.14-4.97 1.14-4.97s-.29-.58-.29-1.45c0-1.36.79-2.38 1.77-2.38.84 0 1.25.63 1.25 1.39 0 .85-.54 2.11-.83 3.28-.24 1.01.52 1.84 1.54 1.84 1.85 0 3.27-1.95 3.27-4.75 0-2.48-1.78-4.21-4.33-4.21-2.95 0-4.68 2.21-4.68 4.48 0 .88.34 1.82.77 2.33.08.1.09.2.06.3-.06.33-.2 1.04-.22 1.18-.03.15-.12.18-.27.11-1.01-.46-1.64-1.89-1.64-3.05 0-2.48 1.81-4.77 5.2-4.77 2.73 0 4.85 1.95 4.85 4.55 0 2.71-1.71 4.89-4.07 4.89-1.11 0-2.15-.58-2.5-1.26l-.68 2.58c-.24.92-.9 2.06-1.34 2.76 1.01.32 2.07.49 3.17.49 5.51 0 9.96-4.45 9.96-9.96 0-5.51-4.45-9.96-9.96-9.96z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4">
        <p className="text-center text-gray-500 text-sm">&copy; 2024 WardrobeSeller. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
