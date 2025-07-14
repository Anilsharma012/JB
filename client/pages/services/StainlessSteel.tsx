import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Droplets,
  CheckCircle,
  ArrowRight,
  Download,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/common/Header";

export default function StainlessSteel() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="services" />

      {/* Hero Section */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2Fca1cf24c6c334c83ba51991b9affb647%2F3bb246b707364c0899a08b4b9ffba3c0?format=webp&width=1920&quality=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white bg-opacity-20 text-white border-white border-opacity-30">
              Corrosion Resistant
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stainless Steel
              <span className="block text-blue-300">Components</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Premium corrosion-resistant solutions for demanding marine,
              chemical, and food-grade applications with exceptional durability
              and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Stainless Steel Components
              </h2>
              <p className="text-gray-600 mb-6">
                Our stainless steel components offer superior corrosion
                resistance and longevity, making them ideal for harsh
                environments including marine, chemical processing, and food
                industry applications.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Marine Grade Quality
                    </h4>
                    <p className="text-gray-600">
                      Grade 316 stainless steel for maximum saltwater resistance
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Droplets className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Chemical Resistance
                    </h4>
                    <p className="text-gray-600">
                      Excellent resistance to chemicals and acidic environments
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Food Grade Certified
                    </h4>
                    <p className="text-gray-600">
                      FDA approved materials for food processing applications
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F536025be4d6244ff84d126cfe63225bb%2F307f5d7b039c453ea4f7337bab0b114d?format=webp&width=1200&quality=85"
                alt="Stainless Steel Components"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F536025be4d6244ff84d126cfe63225bb%2F97844ca425bd422293a61059402ef8ee?format=webp&width=1200&quality=85"
                alt="Marine Applications"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grades & Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stainless Steel Grades
            </h2>
            <p className="text-xl text-gray-600">
              Complete range of stainless steel grades for every application
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">304</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Grade 304
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• General purpose grade</li>
                  <li>• Good corrosion resistance</li>
                  <li>• Food processing applications</li>
                  <li>• Non-magnetic when annealed</li>
                  <li>• Temperature range: -196°C to 800°C</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">316</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Grade 316 <Badge className="ml-2 bg-blue-600">Marine</Badge>
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Superior corrosion resistance</li>
                  <li>• Marine and chemical applications</li>
                  <li>• Molybdenum enhanced</li>
                  <li>• Chloride resistant</li>
                  <li>• Temperature range: -196°C to 800°C</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-xl">316L</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Grade 316L
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Low carbon content</li>
                  <li>• Enhanced weldability</li>
                  <li>• Pharmaceutical grade</li>
                  <li>• Superior pitting resistance</li>
                  <li>• FDA approved</li>
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
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600">
              Versatile solutions across multiple industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Marine Industry
              </h3>
              <p className="text-gray-600 text-sm">
                Shipbuilding, offshore platforms, and marine equipment
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Chemical Processing
              </h3>
              <p className="text-gray-600 text-sm">
                Chemical plants, refineries, and processing equipment
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Food & Beverage
              </h3>
              <p className="text-gray-600 text-sm">
                Food processing, brewing, and packaging equipment
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Pharmaceutical
              </h3>
              <p className="text-gray-600 text-sm">
                Clean room environments and sterile processing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Stainless Steel Components?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our specialists can help you select the right stainless steel grade
            and specifications for your corrosion-resistant requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Specialists
              </Button>
            </Link>
            <Link to="/quote">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get Custom Quote
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
