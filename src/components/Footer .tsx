const Footer = () => {
    return (
      <footer className="bg-[#211ef3] text-white py-8 mt-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-white">
                We are a passionate team providing high-quality products for your everyday needs. Stay connected with us for the latest updates and offers.
              </p>
            </div>
  
            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-white hover:text-white">Home</a></li>
                <li><a href="#" className="text-sm text-white hover:text-white">Products</a></li>
                <li><a href="#" className="text-sm text-white hover:text-white">About</a></li>
                <li><a href="#" className="text-sm text-white hover:text-white">Contact</a></li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><span className="text-sm text-white">Email: support@yourwebsite.com</span></li>
                <li><span className="text-sm text-white">Phone: +1 234 567 890</span></li>
                <li><span className="text-sm text-white">Address: 123 Street Name, City, Country</span></li>
              </ul>
            </div>
  
            {/* Social Media Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i> {/* You can add icon libraries like FontAwesome */}
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
  
          </div>
  
          {/* Bottom Section */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  