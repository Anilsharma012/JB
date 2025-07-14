import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Wrench,
  Shield,
  Zap,
  Settings,
  CheckCircle,
  ArrowRight,
  Package,
  Cog,
  Star,
  Award,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ImageModal } from "@/components/ui/image-modal";
import Header from "@/components/common/Header";

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    src: "",
    alt: "",
    title: "",
  });

  const banners = [
    {
      image: "/image/S1.jpg",
      title: "Premium Services",
      subtitle: "Comprehensive Fastening Solutions & Manufacturing Services",
    },
    {
      image: "/image/S2.jpg",
      title: "High Tensile Steel",
      subtitle: "Advanced Manufacturing of Heavy-Duty Fasteners",
    },
    {
      image: "/image/S3.jpg",
      title: "Stainless Steel Solutions",
      subtitle: "Corrosion-Resistant Components for Marine Applications",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fca1cf24c6c334c83ba51991b9affb647%2F8a14e3d77dae4821a9786760c484a1db?format=webp&width=1920&quality=80",
      title: "Precision Components",
      subtitle: "CNC Machined Parts to Exact Specifications",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fca1cf24c6c334c83ba51991b9affb647%2F3bb246b707364c0899a08b4b9ffba3c0?format=webp&width=1920&quality=80",
      title: "Complete Hardware Range",
      subtitle: "Industrial Nuts, Bolts & Custom Fastening Solutions",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fca1cf24c6c334c83ba51991b9affb647%2F21eca86535bb4f57b0979ccc68c6e08d?format=webp&width=1920&quality=80",
      title: "Quality Manufacturing",
      subtitle: "ISO Certified Excellence in Fastener Production",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const handleDownloadCatalog = () => {
    window.open(
      "https://cdn.builder.io/o/assets%2Fca1cf24c6c334c83ba51991b9affb647%2Fab88a7a1eef24752876cb2e5fd03066b?alt=media&token=e61b2fc5-7697-4571-a3aa-01b53e561e05&apiKey=ca1cf24c6c334c83ba51991b9affb647",
      "_blank",
    );
  };

  const handleViewProducts = () => {
    window.location.href = "/products";
  };

  const handleImageClick = (
    imageSrc: string,
    imageAlt: string,
    imageTitle: string,
  ) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt, title: imageTitle });
    setImageModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="services" />

      {/* Hero Banner Slider */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center relative cursor-pointer group"
                style={{ backgroundImage: `url(${banner.image})` }}
                onClick={() =>
                  handleImageClick(banner.image, banner.title, banner.subtitle)
                }
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>

                {/* Click indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>

                {/* JB Industries Watermark */}
                <div className="absolute top-4 right-4 opacity-20">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fb733383f99d740dca5d656219d6f58b6?format=webp&width=800"
                    alt="JB Industries Watermark"
                    className="h-16 w-auto filter invert"
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      {banner.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">
                      {banner.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={handleViewProducts}
                      >
                        View Products <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-gray-900"
                        onClick={handleDownloadCatalog}
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download Catalog
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Company Banner */}
      <section className="bg-blue-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white font-medium">
            Professional Manufacturing & Supply of High Tensile & Stainless
            Steel Fasteners
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              JB Industries provides comprehensive fastening and manufacturing
              solutions across multiple industries. Our expertise spans from
              high-tensile steel fasteners to precision machined components,
              delivering quality, reliability, and innovation in every project.
            </p>
          </div>

          {/* Service Overview Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  SOLAR PROJECTS
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Comprehensive solar energy solutions for residential and
                  commercial applications with cutting-edge technology.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Photovoltaic cell installation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Grid-tie and off-grid systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Energy storage solutions
                  </li>
                </ul>
                <Link to="/services/solar-projects">
                  <Button className="w-full mt-6 bg-yellow-600 hover:bg-yellow-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  SOLAR STREET LIGHT
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Energy-efficient solar street lighting solutions for urban and
                  rural areas with automatic controls.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    LED lighting technology
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Motion sensor integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Weather-resistant design
                  </li>
                </ul>
                <Link to="/services/solar-street-light">
                  <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  CCTV CAMERA INSTALLATION
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Professional security camera installation and monitoring
                  systems for enhanced safety and surveillance.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    HD and 4K camera systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Remote monitoring capabilities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    24/7 surveillance solutions
                  </li>
                </ul>
                <Link to="/services/cctv-installation">
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  ROAD CONSTRUCTION
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Complete road construction and infrastructure development
                  services with modern equipment and techniques.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Highway construction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Bridge and flyover projects
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Quality assurance standards
                  </li>
                </ul>
                <Link to="/services/road-construction">
                  <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Package className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  CONSTRUCTION PROJECTS
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Full-scale construction services for residential, commercial,
                  and industrial building projects.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Residential buildings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Commercial complexes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Industrial facilities
                  </li>
                </ul>
                <Link to="/services/construction-projects">
                  <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Manufacturing Excellence
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Wrench className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      High Tensile Steel Fasteners
                    </h4>
                    <p className="text-gray-600">
                      Premium grade fasteners designed for heavy-duty
                      applications. Our high tensile steel fasteners offer
                      superior strength and durability for demanding industrial
                      environments.
                    </p>
                    <ul className="mt-3 space-y-1 text-sm text-gray-500">
                      <li>• Bolts, screws, and nuts</li>
                      <li>• Washers and spacers</li>
                      <li>• Threaded rods and studs</li>
                      <li>• Custom fastening solutions</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Stainless Steel Components
                    </h4>
                    <p className="text-gray-600">
                      Corrosion-resistant solutions for demanding environments.
                      Our stainless steel components provide long-lasting
                      performance in harsh conditions.
                    </p>
                    <ul className="mt-3 space-y-1 text-sm text-gray-500">
                      <li>• Marine grade stainless steel</li>
                      <li>• Food grade components</li>
                      <li>• Chemical resistant fasteners</li>
                      <li>• Custom alloy specifications</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Cog className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Precision Machined Components
                    </h4>
                    <p className="text-gray-600">
                      Precision-engineered parts manufactured to exact
                      specifications using advanced machining techniques and
                      quality control processes.
                    </p>
                    <ul className="mt-3 space-y-1 text-sm text-gray-500">
                      <li>• CNC machined parts</li>
                      <li>• Custom specifications</li>
                      <li>• Tight tolerance components</li>
                      <li>• Surface treatment options</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F536025be4d6244ff84d126cfe63225bb%2F307f5d7b039c453ea4f7337bab0b114d?format=webp&width=1200&quality=85"
                alt="Complete Product Range"
                className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  handleImageClick(
                    "https://cdn.builder.io/api/v1/image/assets%2F536025be4d6244ff84d126cfe63225bb%2F307f5d7b039c453ea4f7337bab0b114d?format=webp&width=1920&quality=90",
                    "Complete Product Range",
                    "Comprehensive Fastening Solutions",
                  )
                }
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F536025be4d6244ff84d126cfe63225bb%2F97844ca425bd422293a61059402ef8ee?format=webp&width=1200&quality=85"
                alt="Specialized Fastening Solutions"
                className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  handleImageClick(
                    "https://cdn.builder.io/api/v1/image/assets%2F536025be4d6244ff84d126cfe63225bb%2F97844ca425bd422293a61059402ef8ee?format=webp&width=1920&quality=90",
                    "Specialized Fastening Solutions",
                    "High-Quality Manufacturing Excellence",
                  )
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive range of fastening solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Package className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Standard Fasteners
                </h3>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Hex Head Bolts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Socket Head Cap Screws
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Nuts & Washers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Threaded Rods
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  View Products
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Settings className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Custom Solutions
                </h3>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Custom Specifications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Special Alloys
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Unique Designs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Volume Production
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Get Custom Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Specialty Items
                </h3>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    High Strength Grades
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Corrosion Resistant
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Temperature Resistant
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Special Coatings
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-gray-600">
              Quality and excellence in every component
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ISO Certified
              </h3>
              <p className="text-gray-600 text-sm">
                ISO 45001:2018 certified manufacturing processes ensuring
                highest quality standards.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Premium Materials
              </h3>
              <p className="text-gray-600 text-sm">
                High-grade steel and stainless steel materials sourced from
                trusted suppliers.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quality Testing
              </h3>
              <p className="text-gray-600 text-sm">
                Rigorous quality control and testing procedures for every
                product batch.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Custom Solutions
              </h3>
              <p className="text-gray-600 text-sm">
                Tailored fastening solutions designed to meet your specific
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Excellence
            </h2>
            <p className="text-xl text-gray-600">
              State-of-the-art manufacturing facilities and capabilities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Ffef6356fd69e43a6bc63db3bb0262367?format=webp&width=1200&quality=85"
              alt="Manufacturing Facilities and Equipment"
              className="w-full h-80 object-cover rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() =>
                handleImageClick(
                  "https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Ffef6356fd69e43a6bc63db3bb0262367?format=webp&width=1920&quality=90",
                  "Manufacturing Facilities and Equipment",
                  "Advanced Manufacturing Capabilities",
                )
              }
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Advanced Manufacturing Capabilities
              </h3>
              <div className="grid grid-cols-1 gap-4 text-sm">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Metric Specifications
                  </h4>
                  <p className="text-gray-600">
                    Diameter: M2 to M48 (MM) | Length: 6 to 1000 (MM)
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Inch Specifications
                  </h4>
                  <p className="text-gray-600">
                    Diameter: 1/16" to 1 3/4" | Length: 1/4" to 40"
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Surface Finishes
                  </h4>
                  <p className="text-gray-600">
                    Zinc Plating Cr6 Free, Nickle, Decro
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Special Facilities
                  </h4>
                  <p className="text-gray-600">
                    Wire Drawing (2 Stations) | Heat Treatment (Continuous
                    Furnace)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Secondary Operations & Machining
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Thread Rolling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Parting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Straightening
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Facing & Centering
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    CNC Turning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Vertical Milling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Knurling
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Drilling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Grooving
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Tapping
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Shot Blasting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Grinding
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Broaching
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Stamping & Buffing
                  </li>
                </ul>
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fad2f5b4c5c2d4b768505492936d5e2fb?format=webp&width=1200&quality=85"
              alt="Secondary Operations and Machining"
              className="w-full h-80 object-cover rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() =>
                handleImageClick(
                  "https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2Fad2f5b4c5c2d4b768505492936d5e2fb?format=webp&width=1920&quality=90",
                  "Secondary Operations and Machining",
                  "Precision Machining & Operations",
                )
              }
            />
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600">
              Serving diverse industries with specialized solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Serving Multiple Sectors
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg text-gray-700">Automotive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg text-gray-700">Electronics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg text-gray-700">
                    Agricultural Machine
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg text-gray-700">Wind Power</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg text-gray-700">Heavy Machinery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg text-gray-700">Thermal Power</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg text-gray-700">
                    Metro & Railways
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-lg text-gray-700">Electricals</span>
                </div>
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F0cf7d7d9639843ba918d2688f0be7b1e?format=webp&width=1200&quality=85"
              alt="Industries We Serve"
              className="w-full h-80 object-cover rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() =>
                handleImageClick(
                  "https://cdn.builder.io/api/v1/image/assets%2F955730e514434f058fe2d673677d0799%2F0cf7d7d9639843ba918d2688f0be7b1e?format=webp&width=1920&quality=90",
                  "Industries We Serve",
                  "Multiple Industry Applications",
                )
              }
            />
          </div>
        </div>
      </section>

      {/* Trusted by Leading Companies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              Trusted Partners
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve top-tier companies across various industries with
              our premium fastening solutions.
            </p>
          </div>

          {/* Company Logos in 2 Rows */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            {/* Row 1 */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
              {/* FRICK */}
              <div className="bg-white rounded-lg p-4 hover:bg-gray-100 transition-colors flex items-center justify-center hover-lift">
                <img
                  src="image/m.webp"
                  alt="FRICK Logo"
                  className="h-12 w-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* MAHINDRA */}
              <div className="bg-white rounded-lg p-4 hover:bg-gray-100 transition-colors flex items-center justify-center hover-lift">
                <img
                  src="image/f.png"
                  alt="Mahindra Logo"
                  className="h-12 w-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* LGB */}
              <div className="bg-white rounded-lg p-4 hover:bg-gray-100 transition-colors flex items-center justify-center hover-lift">
                <img
                  src="image/b.png"
                  alt="LGB Logo"
                  className="h-12 w-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* FASTENAL */}
              <div className="bg-white rounded-lg p-4 hover:bg-gray-100 transition-colors flex items-center justify-center hover-lift">
                <img
                  src="image/ff.png"
                  alt="Fastenal Logo"
                  className="h-12 w-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* SANSERA */}
              <div className="bg-white rounded-lg p-4 hover:bg-gray-100 transition-colors flex items-center justify-center hover-lift">
                <img
                  src="image/l.png"
                  alt="Sansera Logo"
                  className="h-12 w-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* BOSSARD */}
              <div className="bg-white rounded-lg p-4 hover:bg-gray-100 transition-colors flex items-center justify-center hover-lift">
                <img
                  src="image/s.jpg"
                  alt="Bossard Logo"
                  className="h-12 w-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* REYHER */}
              <div className="bg-white rounded-lg p-4 hover:bg-gray-100 transition-colors flex items-center justify-center hover-lift">
                <img
                  src="image/ss.jfif"
                  alt="Reyher Logo"
                  className="h-12 w-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* C&S ELECTRIC */}
              <div className="bg-white rounded-lg p-4 hover:bg-gray-100 transition-colors flex items-center justify-center hover-lift">
                <img
                  src="image/mm.png"
                  alt="C&S Electric Logo"
                  className="h-12 w-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* WÜRTH */}
              <div className="bg-white rounded-lg p-4 hover:bg-gray-100 transition-colors flex items-center justify-center hover-lift">
                <img
                  src="image/ll.jfif"
                  alt="Würth Logo"
                  className="h-12 w-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* Company Names */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 font-medium">
                Trusted by Leading Companies: Frick • Mahindra • LGB • Fastenal
                • Sansera • Bossard • Reyher • C&S Electric • Würth
              </p>
              <div className="flex justify-center mt-4">
                <Badge
                  variant="outline"
                  className="text-green-700 border-green-200 bg-green-50"
                >
                  <CheckCircle className="h-3 w-3 mr-1" />
                  200+ Satisfied Clients Worldwide
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Custom Fastening Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you find the perfect fastening
            solution for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Download Catalog
            </Button>
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
              <p className="text-sm text-gray-500">GST: 06AGZPJ8621P1ZF</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quality"
                    className="hover:text-white transition-colors"
                  >
                    Quality Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 JB Industries. All rights reserved. | Proprietary business
              by Rajni Jain
            </p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      <ImageModal
        open={imageModalOpen}
        onOpenChange={setImageModalOpen}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
        title={selectedImage.title}
      />
    </div>
  );
}
