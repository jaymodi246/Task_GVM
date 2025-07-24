import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-6 py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-sm">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-3">Categories</h4>
            <ul className="space-y-2">
              <li>User Interface</li>
              <li>User Experience</li>
              <li>Digital Media</li>
              <li>Lifestyle</li>
              <li>Programming</li>
              <li>Animation</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="space-y-2">
              <li>Pricing</li>
              <li>Overview</li>
              <li>Browse</li>
              <li>Accessibility</li>
              <li>Five</li>
              <li>Changelog</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-3">Solutions</h4>
            <ul className="space-y-2">
              <li>Brainstorming</li>
              <li>Ideation</li>
              <li>Wireframing</li>
              <li>Research</li>
              <li>Design</li>
              <li>Concept</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>Blog</li>
              <li>Tutorials</li>
              <li>FAQs</li>
              <li>Community</li>
              <li>Events</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>Developers</li>
              <li>Documentation</li>
              <li>Integrations</li>
              <li>Reports</li>
              <li>Webinar</li>
            </ul>
          </div>

          {/* Column 6 */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>About</li>
              <li>Press</li>
              <li>Events</li>
              <li>Careers</li>
              <li>Customers</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-t border-gray-200" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-blue-600 font-bold text-lg">Appy</div>
          <div className="text-gray-500 text-sm text-center">@ 2023 All rights reserved.</div>
          <div className="flex items-center space-x-4 text-gray-500 text-xl">
            <a href="#" aria-label="YouTube" className="hover:text-blue-600 transition">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-600 transition">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-600 transition">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-600 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
