import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Sun,
  CheckCircle,
  ArrowRight,
  Download,
  Phone,
  Mail,
  Battery,
  Home,
  Building,
  Leaf,
  DollarSign,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/common/Header";

export default function SolarProjects() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="services" />

      {/* Hero Section */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-yellow-600 text-white border-yellow-600">
              🌞 Solar Energy Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Solar Projects
              <span className="block text-yellow-300">
                Clean Energy for Tomorrow
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transform your energy consumption with our comprehensive solar
              solutions. From residential rooftops to large-scale commercial
              installations, we deliver sustainable and cost-effective solar
              energy systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button
                  size="lg"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white"
                >
                  Get Solar Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Download className="mr-2 h-5 w-5" />
                Solar Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Banner */}
      <section className="bg-yellow-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white font-medium">
            Leading Solar Energy Solutions Provider - Sustainable, Reliable,
            Cost-Effective
          </p>
        </div>
      </section>

      {/* Solar Solution Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solar Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Complete range of solar energy systems for every need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Home className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Residential Solar
                </h3>
                <p className="text-gray-600 mb-4">
                  Customized solar solutions for homes with rooftop
                  installations, energy storage, and grid-tie systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    1kW to 10kW systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Net metering support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    25-year warranty
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    EMI options available
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow border-2 border-yellow-200 bg-yellow-50">
              <CardContent className="p-8">
                <Building className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Commercial Solar
                  <Badge className="ml-2 bg-yellow-600 text-white">
                    Popular
                  </Badge>
                </h3>
                <p className="text-gray-600 mb-4">
                  Large-scale solar installations for businesses, factories, and
                  commercial complexes with maximum ROI.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    10kW to 1MW+ systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    CAPEX/OPEX models
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Energy management systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Performance monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Industrial Solar
                </h3>
                <p className="text-gray-600 mb-4">
                  Mega-scale solar projects for industries with high energy
                  consumption and sustainability goals.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    1MW to 100MW+ projects
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Ground-mounted systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Power purchase agreements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Grid integration services
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Solar Energy?
            </h2>
            <p className="text-xl text-gray-600">
              Multiple benefits for your home, business, and environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Cost Savings
              </h3>
              <p className="text-gray-600 text-sm">
                Reduce electricity bills by up to 90% with our efficient solar
                systems
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Eco-Friendly
              </h3>
              <p className="text-gray-600 text-sm">
                Zero carbon emissions and contribute to a cleaner, greener
                planet
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Energy Independence
              </h3>
              <p className="text-gray-600 text-sm">
                Reduce dependence on grid electricity and protect against rising
                energy costs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Battery className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Low Maintenance
              </h3>
              <p className="text-gray-600 text-sm">
                Minimal maintenance required with 25+ year system lifespan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Installation Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple, efficient, and professional solar installation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Site Survey
              </h3>
              <p className="text-gray-600 text-sm">
                Free site assessment and energy requirement analysis
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                System Design
              </h3>
              <p className="text-gray-600 text-sm">
                Custom solar system design based on your energy needs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Installation
              </h3>
              <p className="text-gray-600 text-sm">
                Professional installation by certified technicians
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Commissioning
              </h3>
              <p className="text-gray-600 text-sm">
                System testing, grid connection, and performance monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solar Projects
            </h2>
            <p className="text-xl text-gray-600">
              Completed installations across various sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <img
                src="https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Residential Solar Installation"
                className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                Residential Rooftop - 5kW System
              </h3>
              <p className="text-gray-600 text-sm">
                Delhi NCR | Annual savings: ₹60,000
              </p>
            </div>

            <div className="group">
              <img
                src="https://images.pexels.com/photos/9875421/pexels-photo-9875421.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Commercial Solar Installation"
                className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                Commercial Complex - 100kW System
              </h3>
              <p className="text-gray-600 text-sm">
                Gurgaon | Annual savings: ₹12,00,000
              </p>
            </div>

            <div className="group">
              <img
                src="https://images.pexels.com/photos/9875425/pexels-photo-9875425.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Industrial Solar Installation"
                className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                Industrial Plant - 500kW System
              </h3>
              <p className="text-gray-600 text-sm">
                Manesar | Annual savings: ₹60,00,000
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Start your journey towards energy independence. Get a free solar
            assessment and customized quote for your property today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-yellow-600 hover:bg-gray-100"
              >
                <Phone className="mr-2 h-5 w-5" />
                Free Consultation
              </Button>
            </Link>
            <Link to="/quote">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-yellow-600"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get Solar Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white rounded-full p-1 flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fb733383f99d740dca5d656219d6f58b6?format=webp&width=800"
                    alt="Company Logo"
                    className="h-6 w-auto"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Solar Solutions</h3>
                  <p className="text-gray-400 text-sm">Clean Energy Provider</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Leading provider of solar energy solutions with expertise in
                residential, commercial, and industrial installations across
                India.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Solar Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/services/solar-projects"
                    className="hover:text-white transition-colors"
                  >
                    Solar Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/solar-street-light"
                    className="hover:text-white transition-colors"
                  >
                    Solar Street Light
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors"
                  >
                    All Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quote"
                    className="hover:text-white transition-colors"
                  >
                    Get Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Solar Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
