import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Wrench,
  Shield,
  CheckCircle,
  ArrowRight,
  Download,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/common/Header";

export default function HighTensileSteel() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="services" />

      {/* Hero Section */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2Fca1cf24c6c334c83ba51991b9affb647%2F8a14e3d77dae4821a9786760c484a1db?format=webp&width=1920&quality=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white bg-opacity-20 text-white border-white border-opacity-30">
              Premium Service
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              High Tensile Steel
              <span className="block text-blue-300">Fasteners</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Premium grade fasteners designed for heavy-duty applications with
              superior strength and durability for demanding industrial
              environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                High Tensile Steel Fasteners
              </h2>
              <p className="text-gray-600 mb-6">
                Our high tensile steel fasteners are engineered for applications
                requiring superior mechanical properties and resistance to high
                stress loads. Perfect for automotive, construction, and heavy
                machinery applications.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Superior Strength
                    </h4>
                    <p className="text-gray-600">
                      Tensile strength up to 1200 MPa for demanding applications
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Automotive Grade
                    </h4>
                    <p className="text-gray-600">
                      Meets automotive industry standards for critical
                      applications
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Custom Specifications
                    </h4>
                    <p className="text-gray-600">
                      Available in custom sizes and specifications as per
                      requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F536025be4d6244ff84d126cfe63225bb%2Fbe103cd509794847bb8d30812a672ee6?format=webp&width=1200&quality=85"
                alt="High Tensile Steel Fasteners"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F536025be4d6244ff84d126cfe63225bb%2Ffcc5e27aaf9f49e0a1bee7fcb024a277?format=webp&width=1200&quality=85"
                alt="Industrial Applications"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600">
              Detailed specifications for high tensile steel fasteners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <Wrench className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Material Grade
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• High Carbon Steel</li>
                  <li>• Grade 8.8, 10.9, 12.9</li>
                  <li>• ISO 4762, DIN 912</li>
                  <li>• ASTM A325, A490</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Size Range
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• M6 to M48 (Metric)</li>
                  <li>• 1/4" to 2" (Imperial)</li>
                  <li>• Length: 10mm to 500mm</li>
                  <li>• Custom sizes available</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Surface Finish
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Zinc Plating (Cr6 Free)</li>
                  <li>• Black Oxide</li>
                  <li>• Dacromet Coating</li>
                  <li>• Custom finishes available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Applications
            </h2>
            <p className="text-xl text-gray-600">
              Industries where our high tensile steel fasteners excel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Primary Applications
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">
                    Automotive engine components
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Construction machinery</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Heavy-duty equipment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Structural applications</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Mining equipment</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Industry Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    Reduced maintenance costs
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Extended service life</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Enhanced safety factors</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    Superior load-bearing capacity
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    Excellent fatigue resistance
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need High Tensile Steel Fasteners?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our experts are ready to help you select the right high tensile
            steel fasteners for your specific application requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
            <Link to="/quote">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Mail className="mr-2 h-5 w-5" />
                Request Quote
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
                    alt="JB Industries Logo"
                    className="h-6 w-auto"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">JB Industries</h3>
                  <p className="text-gray-400 text-sm">Fastening Solution</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Leading manufacturer and supplier of high-quality fastening
                solutions. ISO 45001:2018 certified for excellence in
                occupational health and safety management.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/services/high-tensile-steel"
                    className="hover:text-white transition-colors"
                  >
                    High Tensile Steel
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/stainless-steel"
                    className="hover:text-white transition-colors"
                  >
                    Stainless Steel
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/precision-machining"
                    className="hover:text-white transition-colors"
                  >
                    Precision Machining
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
              © 2024 JB Industries. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
