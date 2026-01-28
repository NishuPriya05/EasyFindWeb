import lodge1 from "../assets/images/lodge1.jpg";
import lodge2 from "../assets/images/lodge2.jpeg";
import lodge3 from "../assets/images/lodge3.jpeg";

const lodgeData = {
  lodgeId: "L001",
  name: "A.K International",
  location: "Andheri West, Mumbai",
  images: [lodge1, lodge2, lodge3],
  totalRooms: 5,
  availableRooms: 3,
  occupiedRooms: 2,
  startingPrice: {
    label: "Starting From",
    price: "₹ 4,000/month",
  },
  rooms: [
    {
      roomId: "101",
      name: "Room 101",
      type: "Single",
      beds: 1,
      capacity: 1,
      price: "₹ 8,000",
      billing: "per month",
      availableBeds: 1,
      status: "available",
    },
    {
      roomId: "102",
      name: "Room 102",
      type: "Double Sharing",
      beds: 2,
      capacity: 2,
      price: "₹ 6,000",
      billing: "per month",
      availableBeds: 1,
      status: "available",
    },
    {
      roomId: "201",
      name: "Room 201",
      type: "Triple Sharing",
      beds: 3,
      capacity: 3,
      price: "₹ 5,000",
      billing: "per month",
      availableBeds: 2,
      status: "available",
    },
    {
      roomId: "202",
      name: "Room 202",
      type: "Double Sharing",
      beds: 2,
      capacity: 2,
      price: "₹ 6,000",
      billing: "per month",
      availableBeds: 0,
      status: "booked",
    },
  ],
  facilities: [
    "Power Backup",
    "Parking",
    "WiFi",
    "AC",
    "Water 24/7",
    "Security",
    "Kitchen",
    "TV",
  ],
  additionalAmenities: ["Laundry Service", "Housekeeping", "Geyser", "Fridge"],
  rules: [
    "Check-in: After 12:00 PM",
    "Security Deposit: ₹5,000",
    "Notice Period: 1 Month",
  ],
  mapLocation: {
    address: "Andheri West, Mumbai",
    latitude: 19.1197,
    longitude: 72.8468,
  },
  owner: {
    name: "Rajesh Sharma",
    role: "Property Owner",
    phone: "+91-9876543210",
    whatsapp: "+91-9876543210",
  },
  actions: {
    scheduleVisit: true,
    callOwner: true,
    messageOwner: true,
  },
  reviews: [
    {
      user: "Amit Kumar",
      review:
        "Great location and excellent facilities. The owner is very cooperative and responsive.",
      rating: 5,
    },
  ],

  
};

export default lodgeData;
