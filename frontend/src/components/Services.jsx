import React from "react";
import {
  FaWrench,
  FaBolt,
  FaSpa,
  FaCamera,
  FaCar,
  FaBroom,
  FaUserCheck,
  FaShieldAlt,
  FaThumbsUp,
} from "react-icons/fa";

const Services = () => {
  const popularServices = [
    {
      icon: <FaWrench className="text-blue-500 text-4xl" />,
      title: "Plumbing",
      desc: "Expert plumbers for all your needs",
      rating: "⭐⭐⭐⭐⭐",
      price: "Starting at ₹199",
    },
    {
      icon: <FaBolt className="text-yellow-500 text-4xl" />,
      title: "Electric",
      desc: "Licensed electricians available 24/7",
      rating: "⭐⭐⭐⭐",
      price: "Starting at ₹299",
    },
    {
      icon: <FaSpa className="text-pink-500 text-4xl" />,
      title: "Beauty & Spa",
      desc: "Professional beauty services at home",
      rating: "⭐⭐⭐⭐⭐",
      price: "Starting at ₹499",
    },
    {
      icon: <FaCamera className="text-purple-500 text-4xl" />,
      title: "Photography",
      desc: "Capture your special moments",
      rating: "⭐⭐⭐⭐",
      price: "Starting at ₹399",
    },
    {
      icon: <FaCar className="text-red-500 text-4xl" />,
      title: "Car Repair",
      desc: "Mobile car services at your location",
      rating: "⭐⭐⭐⭐⭐",
      price: "Starting at ₹999",
    },
    {
      icon: <FaBroom className="text-green-500 text-4xl" />,
      title: "Home Cleaning",
      desc: "Professional cleaning services",
      rating: "⭐⭐⭐⭐",
      price: "Starting at ₹999",
    },
  ];

  const whyChooseUs = [
    {
      icon: <FaUserCheck className="text-blue-500 text-3xl" />,
      title: "Verified Professionals",
      desc: "All service providers are background verified and trained",
    },
    {
      icon: <FaShieldAlt className="text-green-500 text-3xl" />,
      title: "Safe & Secure",
      desc: "Strict safety measures to ensure your well-being",
    },
    {
      icon: <FaThumbsUp className="text-yellow-500 text-3xl" />,
      title: "Quality Assured",
      desc: "Rated services with customer satisfaction guarantee",
    },
  ];

  return (
    <>
      {/* Popular Services */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Popular Services
          </h1>
          <p className="text-gray-600 mb-8">
            Trusted professionals for every need
          </p>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {popularServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h6 className="text-lg font-semibold text-gray-800 mb-1">
                  {service.title}
                </h6>
                <p className="text-gray-600 text-sm mb-2">{service.desc}</p>
                <p className="text-yellow-500 mb-1">{service.rating}</p>
                <p className="font-semibold text-gray-800">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Why choose HyperCare?
          </h1>
          <p className="text-gray-600 mb-8">
            Experience the difference with our platform
          </p>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-3 flex justify-center">{item.icon}</div>
                <h6 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.title}
                </h6>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
