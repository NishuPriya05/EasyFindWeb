import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MapPin,
  Star,
  Phone,
  MessageCircle,
  Bed,
  Users,
  Wifi,
  Car,
  Zap,
  Droplet,
  Shield,
  UtensilsCrossed,
  Video,
  CheckCircle,
  Plus,
  Calendar,
  AlertCircle,
} from "lucide-react";

import lodgeData from "../assets/lodgedata";

const RoomsPage = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("rooms");
  const [selectedImage, setSelectedImage] = useState(0);

  const handleAddRoom = () => {
    console.log("Navigate to add room page");
    navigate("/add-room");
  };

  const facilityIcons = {
    "Power Backup": Zap,
    Parking: Car,
    WiFi: Wifi,
    AC: Zap,
    "Water 24/7": Droplet,
    Security: Shield,
    Kitchen: UtensilsCrossed,
    TV: Video,
  };

  const tabs = [
    { id: "rooms", label: "Rooms", count: lodgeData.rooms?.length },
    { id: "facilities", label: "Facilities" },
    { id: "rules", label: "Rules" },
    { id: "owner", label: "Owner Info" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="bg-white shadow-lg">
        <div className="relative">
          <img
            src={lodgeData.images[selectedImage]}
            alt="Lodge"
            className="w-full h-96 object-cover"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6">
            <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto">
              {lodgeData.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-3 transition-all ${
                    selectedImage === idx
                      ? "border-white scale-110"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
            {selectedImage + 1} / {lodgeData.images.length}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold text-gray-900">
                  {lodgeData.name}
                </h1>
                {lodgeData.verified && (
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <CheckCircle size={16} /> Verified
                  </span>
                )}
              </div>

              <div className="flex gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-blue-600" />
                  {lodgeData.location}
                </div>

                <div className="flex items-center gap-2">
                  <Star size={18} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{lodgeData.rating}</span>
                  <span>({lodgeData.reviewsCount} reviews)</span>
                </div>
              </div>

              <div className="mt-3 flex gap-3">
                <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  {lodgeData.availableRooms} Available
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-800">
                  {lodgeData.occupiedRooms} Occupied
                </span>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-600">
                {lodgeData.startingPrice.label}
              </p>
              <p className="text-3xl font-bold text-blue-600">
                {lodgeData.startingPrice.price}
              </p>

              <button
                onClick={handleAddRoom}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 mt-4 rounded-xl shadow-lg"
              >
                <Plus size={20} /> Add New Room
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
                {tab.count && (
                  <span className="ml-2 bg-gray-200 px-2 rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === "rooms" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lodgeData.rooms.map((room) => (
              <div key={room.roomId} className="bg-white rounded-xl shadow-lg">
                <div className="bg-blue-600 p-6 text-white rounded-t-xl">
                  <h3 className="text-2xl font-bold">{room.name}</h3>
                  <p className="text-blue-100">{room.type}</p>
                </div>

                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Bed size={20} className="text-blue-600" />
                      {room.beds} Beds
                    </div>

                    <div className="flex items-center gap-2">
                      <Users size={20} className="text-blue-600" />
                      {room.capacity} Persons
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl mb-4">
                    <p className="text-xs text-gray-600">Price</p>
                    <p className="text-3xl font-bold">{room.price}</p>
                  </div>

                  <button className="w-full py-3 bg-blue-600 text-white rounded-lg">
                    Book This Room
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "facilities" && (
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Facilities</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {lodgeData.facilities.map((facility, idx) => {
                const Icon = facilityIcons[facility] || CheckCircle;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon size={24} className="text-blue-600" />
                    {facility}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "rules" && (
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Rules</h2>

            {lodgeData.rules.map((rule, idx) => (
              <div key={idx} className="p-4 bg-orange-50 rounded-lg mb-3">
                {rule}
              </div>
            ))}
          </div>
        )}

        {activeTab === "owner" && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Property Owner Information
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-linear-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-3xl mb-4">
                    {lodgeData.owner.name.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {lodgeData.owner.name}
                  </h3>
                  <p className="text-blue-100 mb-4">{lodgeData.owner.role}</p>

                  <div className="space-y-3 mt-6">
                    <div className="flex items-center gap-3">
                      <Phone size={20} />
                      <span className="font-medium">
                        {lodgeData.owner.phone}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle size={20} />
                      <span className="font-medium">
                        {lodgeData.owner.whatsapp}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h3>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3">
                  <Calendar size={22} />
                  Schedule a Visit
                </button>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3">
                  <Phone size={22} />
                  Call Owner
                </button>

                <button className="w-full bg-white hover:bg-gray-50 text-gray-800 py-4 rounded-xl font-semibold border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 flex items-center justify-center gap-3">
                  <MessageCircle size={22} />
                  Send Message
                </button>

                <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Response Time:</strong> Usually within 2 hours
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Availability:</strong> 9:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomsPage;
