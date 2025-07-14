import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  Sun,
  CheckCircle,
  ArrowRight,
  Download,
  Phone,
  Mail,
  Battery,
  Settings,
  Shield,
  Clock,
  MapPin,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/common/Header";

export default function SolarStreetLight() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="services" />

      {/* Hero Section */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-orange-600 text-white border-orange-600">
              💡 Smart Lighting Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Solar Street Light
              <span className="block text-orange-300">
                Intelligent Urban Lighting
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Revolutionary solar street lighting solutions with advanced LED
              technology, motion sensors, and smart controls. Perfect for urban
              areas, highways, parks, and rural communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  Get Lighting Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Download className="mr-2 h-5 w-5" />
                Product Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Banner */}
      <section className="bg-orange-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white font-medium">
            Advanced Solar Street Lighting - Energy Efficient, Smart Controls,
            Zero Operating Cost
          </p>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solar Street Light Range
            </h2>
            <p className="text-xl text-gray-600">
              Complete range of solar street lights for every application
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Lightbulb className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Standard Series
                </h3>
                <p className="text-gray-600 mb-4">
                  Basic solar street lights with reliable performance for
                  residential and commercial areas.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    12W to 60W LED power
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    6-8 hours backup time
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Dusk to dawn operation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    IP65 weatherproof rating
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold text-orange-600">
                    ₹8,000 - ₹25,000
                  </div>
                  <p className="text-sm text-gray-500">Per unit</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow border-2 border-orange-200 bg-orange-50">
              <CardContent className="p-8">
                <Settings className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Smart Series
                  <Badge className="ml-2 bg-orange-600 text-white">
                    Popular
                  </Badge>
                </h3>
                <p className="text-gray-600 mb-4">
                  Intelligent solar lights with motion sensors, dimming
                  controls, and IoT connectivity.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    20W to 100W LED power
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Motion sensor activation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    App-based monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Adaptive brightness control
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold text-orange-600">
                    ₹15,000 - ₹45,000
                  </div>
                  <p className="text-sm text-gray-500">Per unit</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Premium Series
                </h3>
                <p className="text-gray-600 mb-4">
                  High-performance solar lights for highways, industrial areas,
                  and large complexes.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    80W to 200W LED power
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    10-12 hours backup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Remote monitoring system
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    5-year comprehensive warranty
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold text-orange-600">
                    ₹35,000 - ₹80,000
                  </div>
                  <p className="text-sm text-gray-500">Per unit</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge technology for superior performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Motion Sensor
              </h3>
              <p className="text-gray-600 text-sm">
                PIR motion detection with automatic brightness adjustment for
                energy savings
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Battery className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Lithium Battery
              </h3>
              <p className="text-gray-600 text-sm">
                LiFePO4 batteries with 2000+ charge cycles and 5+ year lifespan
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Weather Resistant
              </h3>
              <p className="text-gray-600 text-sm">
                IP65 rating withstands rain, dust, and extreme temperatures
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Auto Timer
              </h3>
              <p className="text-gray-600 text-sm">
                Programmable time controls with seasonal light adjustment
              </p>
            </div>
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
              Perfect lighting solutions for various environments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Urban Areas
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• City streets and main roads</li>
                  <li>• Residential colonies</li>
                  <li>• Commercial complexes</li>
                  <li>• Bus stops and metro stations</li>
                  <li>• Public parks and gardens</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Settings className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Industrial Areas
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Factory premises</li>
                  <li>• Warehouse compounds</li>
                  <li>• Industrial estates</li>
                  <li>• Logistics parks</li>
                  <li>• Security checkpoints</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Sun className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Rural Areas
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Village roads</li>
                  <li>• Highway stretches</li>
                  <li>• Agricultural fields</li>
                  <li>• Remote locations</li>
                  <li>• Border area lighting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Installation Process
            </h2>
            <p className="text-xl text-gray-600">
              Professional installation with minimal disruption
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Site Assessment
              </h3>
              <p className="text-gray-600 text-sm">
                Detailed survey of installation area and lighting requirements
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Foundation Work
              </h3>
              <p className="text-gray-600 text-sm">
                Pole foundation and underground cable laying if required
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Installation
              </h3>
              <p className="text-gray-600 text-sm">
                Mounting of solar panels, LED lights, and control systems
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Testing & Handover
              </h3>
              <p className="text-gray-600 text-sm">
                System testing, training, and maintenance documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Installations
            </h2>
            <p className="text-xl text-gray-600">
              Successful solar street light projects across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <img
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Highway Solar Street Lights"
                className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                NH-48 Highway Lighting
              </h3>
              <p className="text-gray-600 text-sm">
                200 Units | 60W Smart Series | Delhi-Jaipur Highway
              </p>
            </div>

            <div className="group">
              <img
                src="https://images.pexels.com/photos/220182/pexels-photo-220182.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Urban Street Lighting"
                className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                Smart City Project - Gurgaon
              </h3>
              <p className="text-gray-600 text-sm">
                500 Units | 40W Smart Series | IoT Enabled Monitoring
              </p>
            </div>

            <div className="group">
              <img
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Rural Area Solar Lights"
                className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                Rural Electrification - Haryana
              </h3>
              <p className="text-gray-600 text-sm">
                150 Units | 30W Standard Series | Village Road Lighting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Illuminate Your Area with Solar
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Transform your streets, roads, and public spaces with our efficient
            solar street lighting solutions. Get a free site assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Site Visit
              </Button>
            </Link>
            <Link to="/quote">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get Lighting Quote
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
                  <h3 className="text-lg font-bold">Solar Street Lights</h3>
                  <p className="text-gray-400 text-sm">
                    Smart Lighting Solutions
                  </p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Premier provider of solar street lighting solutions with
                advanced LED technology and smart controls for urban and rural
                applications.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
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
              © 2024 Solar Street Lights. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
