import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const Services = () => {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [allServices, setAllServices] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/services");
        const data = await res.json();
        setAllServices(data);
        setResults(data.slice(0, 4));
      } catch (err) {
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    if (!allServices.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [allServices, loading]);

  const handleSearch = () => {
    let filtered = allServices;

    if (service) {
      filtered = filtered.filter((item) =>
        item.service.toLowerCase().includes(service.toLowerCase())
      );
    }
    if (location) {
      filtered = filtered.filter((item) =>
        item.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    setVisibleCount(4);
    setResults(filtered.slice(0, 4));
  };

  const loadMore = () => {
    if (results.length < allServices.length) {
      const nextCount = results.length + 4;
      setResults(allServices.slice(0, nextCount));
      setVisibleCount(nextCount);
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="font-extrabold text-4xl md:text-5xl text-gray-800 mb-4">
          Professional Services At Your Doorstep
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Book trusted local professionals for all your home and personal needs
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="relative w-full md:w-1/3">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="search"
              placeholder="What service do you need?"
              value={service}
              onChange={(e) => setService(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="relative w-full md:w-1/3">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="search"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            onClick={handleSearch}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            Search Services
          </button>
        </div>

        {loading && <p className="mt-8 text-blue-600">Loading services...</p>}

        {!loading && results.length === 0 && (service || location) && (
          <p className="mt-8 text-gray-500">No services found matching your search.</p>
        )}

        {results.length > 0 && (
          <div className="mt-12 text-left">
            <h2 className="text-2xl font-bold mb-6">Available Services:</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {results.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row gap-4 p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-full border"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h2 className="font-bold text-lg">{item.name}</h2>
                      <span className="text-blue-600 font-semibold">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="text-blue-500">{item.service}</p>
                    <p className="text-gray-600">
                      ⭐ {item.rating} ({item.reviews}) • {item.time}
                    </p>
                    <p className="text-gray-500">
                      📍 {item.location} • {item.distance}
                    </p>
                    <p className="text-gray-500">
                      {item.experience} • {item.availability}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-sm rounded-full border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-3">
                      <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                        View Profile
                      </button>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div ref={loaderRef} className="mt-6 h-10 flex items-center justify-center">
              {results.length < allServices.length && (
                <p className="text-blue-500">Loading more...</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
