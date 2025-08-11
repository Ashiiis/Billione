import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-50 to-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo and Address */}
        <div>
          <img src="https://cdn.prod.website-files.com/65cc53411189234c497c8ee2/65d731bb2dd5416bfe0dd932_Layer_1.svg" alt="BillionE Logo" className="h-8 mb-4" />
          <p className="text-gray-600 text-sm">
            Billion Energy & Mobility Holdings Limited, DIFC Innovation One Hub,
            Unit IH-00-01-01-OF-01, Level 01, Sheikh Zayed Road, Gate Avenue, Dubai, 393609, UAE.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="border rounded-full p-2 hover:bg-gray-200">
              <FaLinkedinIn className="text-gray-700" />
            </a>
            <a href="#" className="border rounded-full p-2 hover:bg-gray-200">
              <FaInstagram className="text-gray-700" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="/careers">Career</a></li>
          </ul>
        </div>

        {/* Our Verticals */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Our Verticals</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>ChargeZone</li>
            <li>Chargezone Exp</li>
            <li>
              BillionE Mobility{" "}
              <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">COMING SOON</span>
            </li>
            <li>
              BillionE Energy{" "}
              <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">COMING SOON</span>
            </li>
            <li>
              BillionE Foundation{" "}
              <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">COMING SOON</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>+971 50 156 6273</li>
            <li>info@billione.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 mt-10 pt-4 text-sm text-gray-500">
        <p>2024 All Rights Reserved</p>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}
