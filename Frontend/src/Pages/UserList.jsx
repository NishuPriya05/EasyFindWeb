import React, { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [actionLoading, setActionLoading] = useState(false); 

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("http://51.20.114.203:9099/api/users/all", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        if (Array.isArray(data.data)) setUsers(data.data.map(u => ({...u, approved: false, active: true})));
        else throw new Error("Invalid API data");
      } catch (err) {
        console.error(err);
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    setActionLoading(true);
    try {
      const res = await fetch("http://51.20.114.203:9099/api/users/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId })
      });
      const result = await res.json();
      if (res.ok) {
        setUsers(users.filter(u => u.id !== userId));
        setSelectedUser(null);
      } else {
        alert(result.message || "Failed to delete user");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to delete user");
    } finally {
      setActionLoading(false);
    }
  };

  const handleApprove = async (userId) => {
    setActionLoading(true);
    try {
      const res = await fetch("http://51.20.114.203:9099/api/users/approve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId })
      });
      const result = await res.json();
      if (res.ok) {
        setUsers(users.map(u => u.id === userId ? {...u, approved: true} : u));
        setSelectedUser(prev => prev && prev.id === userId ? {...prev, approved: true} : prev);
      } else {
        alert(result.message || "Failed to approve user");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to approve user");
    } finally {
      setActionLoading(false);
    }
  };

  const handleToggleStatus = async (userId) => {
    setActionLoading(true);
    try {
      const res = await fetch("http://51.20.114.203:9099/api/users/toggle-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId })
      });
      const result = await res.json();
      if (res.ok) {
        setUsers(users.map(u => u.id === userId ? {...u, active: !u.active} : u));
        setSelectedUser(prev => prev && prev.id === userId ? {...prev, active: !prev.active} : prev);
      } else {
        alert(result.message || "Failed to toggle status");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to toggle status");
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight mb-6">User List</h1>

        {loading && <div className="text-center text-slate-600 text-lg py-10">Loading users...</div>}
        {error && <div className="text-center text-red-600 text-lg py-10">{error}</div>}

        {!loading && !error && (
          <div className="overflow-x-auto bg-white/70 backdrop-blur-xl shadow-lg rounded-2xl border border-white/40">
            <table className="w-full text-left">
              <thead className="bg-slate-100 text-slate-700 text-sm">
                <tr>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Approved</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {users.length > 0 ? (
                  users.map((u) => (
                    <tr key={u.id} className="border-t hover:bg-slate-50 cursor-pointer" onClick={() => setSelectedUser(u)}>
                      <td className="py-3 px-4 font-medium text-blue-600 hover:underline">{u.name}</td>
                      <td className="py-3 px-4">{u.active ? "Active" : "Inactive"}</td>
                      <td className="py-3 px-4">{u.approved ? "Approved" : "Pending"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="text-center py-6 text-slate-500">No users found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {selectedUser && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
              
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  disabled={actionLoading}
                  className="px-4 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200 disabled:opacity-50"
                  onClick={() => handleApprove(selectedUser.id)}
                >
                  Approve
                </button>
                <button
                  disabled={actionLoading}
                  className="px-4 py-2 bg-slate-100 text-slate-800 rounded hover:bg-slate-200 disabled:opacity-50"
                  onClick={() => handleToggleStatus(selectedUser.id)}
                >
                  Toggle Status
                </button>
                <button
                  disabled={actionLoading}
                  className="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 disabled:opacity-50"
                  onClick={() => handleDelete(selectedUser.id)}
                >
                  Delete
                </button>
              </div>
<div className="my-8">
              <h2 className="text-2xl font-bold mb-2">{selectedUser.name}</h2>
              <p><strong>Mobile No:</strong> {selectedUser.mobileNo}</p>
              <p><strong>Address:</strong> {selectedUser.address}</p>
              <p><strong>Firm Name:</strong> {selectedUser.firmName}</p>
              <p><strong>Created At:</strong> {new Date(selectedUser.createdAt).toLocaleString()}</p>
              <p><strong>Updated At:</strong> {new Date(selectedUser.updatedAt).toLocaleString()}</p>

              <button className="mt-4 px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-800" onClick={() => setSelectedUser(null)}>Close</button>
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

