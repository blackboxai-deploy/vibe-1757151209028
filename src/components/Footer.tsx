import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rounded"></div>
              </div>
              <span className="text-xl font-bold">CyberSafe Community</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering our community with essential cybersecurity knowledge to stay safe online. 
              Learn, practice, and protect yourself from digital threats.
            </p>
            <div className="flex space-x-4">
              <div className="text-sm text-gray-400">
                <p>© 2024 CyberSafe Community</p>
                <p>Educational Initiative</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/threats" className="text-gray-300 hover:text-white transition-colors">
                  Common Threats
                </Link>
              </li>
              <li>
                <Link href="/prevention" className="text-gray-300 hover:text-white transition-colors">
                  Prevention Guide
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-gray-300 hover:text-white transition-colors">
                  Security Quiz
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Need Help?</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">
                <Link href="/emergency" className="hover:text-white transition-colors">
                  Emergency Response
                </Link>
              </li>
              <li className="text-gray-300">
                IT Support: help@cybersafe.community
              </li>
              <li className="text-gray-300">
                Security Incidents: security@cybersafe.community
              </li>
              <li className="text-gray-300">
                Report Phishing: phishing@cybersafe.community
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              This campaign is designed for educational purposes to promote cybersecurity awareness.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;