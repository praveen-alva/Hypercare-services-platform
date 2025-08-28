const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const services = [
  {
    id: 1,
    name: "Rajesh Kumar",
    service: ["Plumbing", "Plumber"],
    category: "Home Repair",
    rating: 4.8,
    reviews: 127,
    experience: "8 years",
    availability: "Available now",
    time: "30 mins",
    location: "Koramangala, Bangalore",
    distance: "2.1 km",
    price: 299,
    skills: ["Pipe Repair", "Bathroom Fitting", "Water Heater"],
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    service: ["Beauty & Spa", "Beauty"],
    category: "Personal Care",
    rating: 4.9,
    reviews: 89,
    experience: "5 years",
    availability: "Available today",
    time: "1 hour",
    location: "Indiranagar, Bangalore",
    distance: "3.5 km",
    price: 599,
    skills: ["Facial", "Hair Styling", "Manicure"],
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Amit Verma",
    service: ["Electrician"],
    category: "Power Care",
    rating: 4.6,
    reviews: 73,
    experience: "6 years",
    availability: "Available today",
    time: "45 mins",
    location: "BTM Layout, Bangalore",
    distance: "4.0 km",
    price: 399,
    skills: ["Wiring", "Switch Repair", "Lighting"],
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    service: ["Photography", "Photographer"],
    category: "Event Services",
    rating: 4.9,
    reviews: 120,
    experience: "7 years",
    availability: "Available on booking",
    time: "2 hours",
    location: "Jayanagar, Bangalore",
    distance: "5.2 km",
    price: 1500,
    skills: ["Wedding", "Portrait", "Editing"],
    image: "https://randomuser.me/api/portraits/women/46.jpg"
  },
  {
    id: 5,
    name: "Ravi Singh",
    service: ["Car Repair", "Mechanic"],
    category: "Auto Care",
    rating: 4.7,
    reviews: 95,
    experience: "9 years",
    availability: "Available today",
    time: "1 hour",
    location: "HSR Layout, Bangalore",
    distance: "6.3 km",
    price: 799,
    skills: ["Engine Repair", "Brake Fixing", "Servicing"],
    image: "https://randomuser.me/api/portraits/men/47.jpg"
  },
  {
    id: 6,
    name: "Neha Reddy",
    service: ["Home Cleaning", "Cleaning"],
    category: "Housekeeping",
    rating: 4.8,
    reviews: 102,
    experience: "4 years",
    availability: "Available tomorrow",
    time: "2 hours",
    location: "Whitefield, Bangalore",
    distance: "8.1 km",
    price: 499,
    skills: ["Dusting", "Mopping", "Kitchen Cleaning"],
    image: "https://randomuser.me/api/portraits/women/48.jpg"
  }
];

// Get all services
app.get("/services", (req, res) => {
  res.json(services);
});

// Search services by type or category
app.get("/services/:type", (req, res) => {
  const type = req.params.type.toLowerCase();
  const result = services.filter(
    s =>
      s.service.some(serv => serv.toLowerCase().includes(type)) ||
      s.category.toLowerCase().includes(type)
  );

  if (result.length === 0) {
    return res.status(404).json({ message: "No services found" });
  }

  res.json(result);
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
