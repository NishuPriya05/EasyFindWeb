import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MapPin,
  Star,
  Phone,
  Bell,
  Users,
  Video,
  FileText,
  Wifi,
  BookOpen,
  Tv,
  Shield,
  ArrowLeft,
  Bookmark,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  MessageCircle,
  ChevronRight,
  BadgeCheck,
} from "lucide-react";

import institutedata from "../assets/institutedata";

const Institutes = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const academyData = institutedata;
  const navigate = useNavigate();

  const iconMap = {
    bell: Bell,
    users: Users,
    video: Video,
    fileText: FileText,
    wifi: Wifi,
    book: BookOpen,
    tv: Tv,
    shield: Shield,
  };

  const getIcon = (iconName) => {
    const Icon = iconMap[iconName] || CheckCircle;
    return Icon;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="bg-white shadow-sm sticky top-0 z-50 py-0">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"></button>
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Bookmark
              size={24}
              className={
                isBookmarked ? "fill-blue-600 text-blue-600" : "text-gray-700"
              }
            />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="h-80 overflow-hidden">
          <img
            src={academyData.academy.images[selectedImage]}
            alt="Academy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/20 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-3 mb-4">
              {academyData.academy.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-3 transition-all ${
                    selectedImage === idx
                      ? "border-white scale-110 shadow-2xl"
                      : "border-white/50 opacity-60 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
          {selectedImage + 1} / {academyData.academy.images.length}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-9 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-start gap-3 mb-3">
                <h1 className="text-4xl font-bold text-gray-900">
                  {academyData.academy.name}
                </h1>
                <BadgeCheck size={32} className="text-blue-600" />
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={20} className="text-blue-600" />
                  <span className="font-medium">
                    {academyData.academy.location}
                  </span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600 font-medium">
                  {academyData.academy.distance} away
                </span>
              </div>

              <div className="flex items-center gap-2 bg-linear-to-br from-yellow-50 to-orange-50 px-4 py-2 rounded-xl">
                <Star size={20} className="fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-gray-900">
                  {academyData.academy.rating}
                </span>
                <span className="text-gray-600">
                  ({academyData.academy.totalReviews.toLocaleString()} reviews)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-4 text-center">
                <Users size={28} className="text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  {academyData.academy.stats.students}
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  Students
                </div>
              </div>

              <div className="bg-linear-to-br from-green-50 to-green-100 rounded-2xl p-4 text-center">
                <TrendingUp size={28} className="text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  {academyData.academy.stats.successRate}
                </div>
                <div className="text-xs text-gray-600 font-medium">Success</div>
              </div>

              <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl p-4 text-center">
                <Award size={28} className="text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  {academyData.academy.stats.experience}
                </div>
                <div className="text-xs text-gray-600 font-medium">Years</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Video className="text-blue-600" /> Explore Programs
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {academyData.explore.map((item, idx) => {
                  const Icon = getIcon(item.icon);
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        if (item.title === "Upload Test") {
                          navigate("/upload-test");
                        }
                      }}
                      className="group relative bg-linear-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all cursor-pointer"
                    >
                      <div
                        className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${item.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform`}
                      />

                      <div className="relative">
                        <div className="flex items-start justify-between mb-3">
                          <div
                            className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                          >
                            <Icon size={28} className="text-white" />
                          </div>

                          {item.badge && (
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold ${
                                item.badge === "LIVE"
                                  ? "bg-red-100 text-red-700 animate-pulse"
                                  : "bg-blue-100 text-blue-700"
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {item.subtitle}
                        </p>

                        <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                          Explore{" "}
                          <ChevronRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="text-purple-600" /> About Us
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {academyData.aboutUs.description}
              </p>

              <div className="grid grid-cols-3 gap-4">
                {academyData.aboutUs.stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-5 text-center hover:shadow-lg transition-shadow"
                    >
                      <Icon size={32} className="text-blue-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {stat.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Shield className="text-green-600" /> Facilities
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {academyData.facilities.map((facility, idx) => {
                  const Icon = getIcon(facility.icon);
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 cursor-pointer"
                      style={{ backgroundColor: facility.color }}
                    >
                      <Icon size={32} className="text-gray-700 mx-auto mb-3" />
                      <p className="font-semibold text-gray-800">
                        {facility.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-3xl shadow-2xl p-8 text-white sticky top-24">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} />
                </div>

                <h3 className="text-2xl font-bold">
                  {academyData.contactCard.title}
                </h3>
                <p className="text-blue-100">
                  {academyData.contactCard.subtitle}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <button className="w-full bg-white text-blue-600 py-4 rounded-2xl font-bold hover:bg-blue-50 flex items-center justify-center gap-3 shadow-lg">
                  <Phone size={20} /> Call Now
                </button>

                <button className="w-full bg-white/20 text-white py-4 rounded-2xl font-bold hover:bg-white/30 flex items-center justify-center gap-3">
                  <MessageCircle size={20} /> Send Message
                </button>

                <button className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold hover:bg-green-600 flex items-center justify-center gap-3 shadow-lg">
                  Enquire Now
                </button>
              </div>

              <div className="border-t border-white/20 pt-6 text-center">
                <div className="flex items-center justify-center gap-2 text-white/90">
                  <Phone size={18} />
                  <span className="font-semibold">
                    {academyData.contactCard.phone}
                  </span>
                </div>
                <p className="text-white/70 text-sm">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-12" />
    </div>
  );
};

export default Institutes;
