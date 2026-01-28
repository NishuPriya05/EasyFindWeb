import React, { useState } from "react";
import lodgeData from "../assets/lodgedata";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    roomId: "",
    name: "",
    type: "",
    beds: "",
    capacity: "",
    price: "",
    billing: "per month",
    availableBeds: "",
    status: "available",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    lodgeData.rooms.push(formData); // Add room to API data (local)

    navigate("/rooms"); // Go back to room list
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Add New Room</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="roomId"
            placeholder="Room ID"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="name"
            placeholder="Room Name"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="type"
            placeholder="Room Type"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="beds"
            placeholder="Beds"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="capacity"
            placeholder="Capacity"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="price"
            placeholder="Price"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="availableBeds"
            placeholder="Available Beds"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />

          <select
            name="status"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="available">Available</option>
            <option value="booked">Booked</option>
          </select>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => navigate("/rooms")}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoom;
