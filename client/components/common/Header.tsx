import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { getCurrentUser, isLoggedIn, logout } from "@/lib/auth";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = "" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(getCurrentUser());
  const [userLoggedIn, setUserLoggedIn] = useState(isLoggedIn());
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  // Check for user state changes (e.g., after login)
  useEffect(() => {
    const checkUserState = () => {
      setUser(getCurrentUser());
      setUserLoggedIn(isLoggedIn());
    };

    // Check immediately
    checkUserState();

    // Listen for storage changes (when user logs in from another tab)
    window.addEventListener("storage", checkUserState);

    // Also check periodically in case of programmatic changes
    const userCheckInterval = setInterval(checkUserState, 1000);

    return () => {
      window.removeEventListener("storage", checkUserState);
      clearInterval(userCheckInterval);
    };
  }, []);

  const servicesDropdownItems = [
    {
      name: "SOLAR PROJECTS",
      href: "/services/solar-projects",
    },
    { name: "SOLAR STREET LIGHT", href: "/services/solar-street-light" },
    { name: "CCTV CAMERA INSTALLATION", href: "/services/cctv-installation" },
    { name: "ROAD CONSTRUCTION PROJECTS", href: "/services/road-construction" },
    { name: "CONSTRUCTION PROJECTS", href: "/services/construction-projects" },
  ];

  const productsDropdownItems = [
    { name: "BOLTS & SCREWS", href: "/products/bolts-screws" },
    { name: "NUTS & WASHERS", href: "/products/nuts-washers" },
    { name: "THREADED RODS", href: "/products/threaded-rods" },
    { name: "MACHINED COMPONENTS", href: "/products/machined-components" },
    { name: "CUSTOM PARTS", href: "/products/custom-parts" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fe47a2c8dea8b451da551bc04f83bbb06?format=webp&width=800"
              alt="JB Industries Logo"
              className="h-16 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">JB Industries</h1>
              <p className="text-sm text-blue-600">
                Industries Fastening Solution
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                currentPage === "home"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                currentPage === "about"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              ABOUT US
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <Link
                to="/services"
                className={`flex items-center font-medium transition-colors ${
                  currentPage === "services"
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                SERVICES
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>

              {servicesDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    to="/services"
                    className="block px-4 py-3 text-sm font-semibold text-blue-600 border-b border-gray-100 hover:bg-blue-50 transition-colors"
                  >
                    📋 VIEW ALL SERVICES
                  </Link>
                  {servicesDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative">
              <Link
                to="/products"
                className={`flex items-center font-medium transition-colors ${
                  currentPage === "products"
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                PRODUCTS
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>

              {productsDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                >
                  <Link
                    to="/products"
                    className="block px-4 py-3 text-sm font-semibold text-blue-600 border-b border-gray-100 hover:bg-blue-50 transition-colors"
                  >
                    📋 VIEW ALL PRODUCTS
                  </Link>
                  {productsDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/certifications"
              className={`font-medium transition-colors ${
                currentPage === "certifications"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              CERTIFICATIONS
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                currentPage === "contact"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              CONTACT
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {userLoggedIn && user ? (
              <div className="hidden md:flex items-center space-x-3">
                <span className="text-sm text-gray-600">
                  Welcome,{" "}
                  <span className="font-semibold text-blue-600">
                    {user.name}
                  </span>
                </span>
                <Button
                  onClick={logout}
                  variant="outline"
                  size="sm"
                  className="text-gray-600 border-gray-300 hover:bg-gray-50"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button
                  variant="outline"
                  className="hidden md:block text-blue-600 border-blue-600 hover:bg-blue-50"
                >
                  LOGIN
                </Button>
              </Link>
            )}

            <Link to="/quote">
              <Button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white">
                Get Quote
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  currentPage === "home"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  currentPage === "about"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT US
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <div className="px-3 py-2 text-base font-medium text-gray-900">
                  SERVICES
                </div>
                <div className="pl-6 space-y-1">
                  {servicesDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Products Dropdown */}
              <div>
                <div className="px-3 py-2 text-base font-medium text-gray-900">
                  PRODUCTS
                </div>
                <div className="pl-6 space-y-1">
                  {productsDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/certifications"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  currentPage === "certifications"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                CERTIFICATIONS
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  currentPage === "contact"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>

              {userLoggedIn && user ? (
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="px-3 py-2 text-sm">
                    <span className="text-gray-600">Logged in as:</span>
                    <div className="font-semibold text-blue-600">
                      {user.name}
                    </div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                  </div>
                  <Button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    variant="outline"
                    className="w-full mt-2 text-gray-600 border-gray-300"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full mt-3 text-blue-600 border-blue-600"
                  >
                    LOGIN
                  </Button>
                </Link>
              )}

              <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
