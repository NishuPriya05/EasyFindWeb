import institute1 from "../assets/images/institute1.jpg";
import institute2 from "../assets/images/institute2.jpg";
import institute3 from "../assets/images/institute3.jpg";

const institutedata = {
  academy: {
    name: "Vinoba Bhave University",
    location: "Andheri West, Mumbai",
    images: [institute1, institute2, institute3],
    distance: "2.5 km",
    rating: 4.8,
    totalReviews: 1245,
    stats: {
      students: "4000+",
      successRate: "90%",
      experience: "10+",
    },
  },

  explore: [
    {
      title: "Notices",
      subtitle: "Latest updates",
      icon: "bell",
      badge: "3 New",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Batches",
      subtitle: "Running batches",
      icon: "users",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Online Classes",
      subtitle: "Live & recorded",
      icon: "video",
      badge: "LIVE",
      color: "from-red-500 to-red-600",
    },
    {
      title: "Online Tests",
      subtitle: "Mock tests",
      icon: "fileText",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Upload Test",
      subtitle: "Upload question paper",
      icon: "upload",
      color: "from-orange-500 to-orange-600",
    },
  ],

  aboutUs: {
    description:
      "Excellence Academy is a premier coaching institute with 15+ years of experience...",
    stats: [
      { title: "Years", value: "10+", icon: "clock" },
      { title: "Faculty", value: "50+", icon: "users" },
      { title: "Support", value: "100%", icon: "checkCircle" },
    ],
  },

  facilities: [
    { name: "AC Rooms", icon: "wifi", color: "#E8F3FB" },
    { name: "Library", icon: "book", color: "#DFF6E0" },
    { name: "Smart TV", icon: "tv", color: "#F6E0FA" },
    { name: "Safe", icon: "shield", color: "#FFEED5" },
  ],

  contactCard: {
    title: "Need Help?",
    subtitle: "Contact us anytime",
    phone: "+91-9876543210",
  },

  actions: {
    enquireNow: true,
    callSupport: true,
    bookmark: true,
    backEnabled: true,
  },

 
  apis: {
    uploadTest: {
      url: "/api/tests/upload",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer <TOKEN>",
      },
      payload: {
        testName: "",
        subject: "",
        duration: "",
        totalMarks: "",
        file: null, 
      },
    },
  },
};

export default institutedata;
