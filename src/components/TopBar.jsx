import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

function TopBar() {
    return (
        <div className="bg-slate-950 text-gray-200 text-sm">
            <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-orange-400" />
            <span>+254 713 241 117</span>
        </div>

         <div className="flex items-center gap-2">
            <FaEnvelope className="text-orange-400" />
            <span>kianelecservices@gmail.com</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FaClock className="text-orange-400" />
          <span>Mon - Sat : 8:00 AM - 6:00 PM</span>
        </div>
      </div>
    </div>
    );
}

export default TopBar;