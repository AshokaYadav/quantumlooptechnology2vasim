'use client'
import { useState } from "react";
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer'

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    email: "",
    mobile: "",
    study: "",
    course: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://noida-pegasus-plus.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          fatherName: formData.fatherName,
          mobileno: formData.mobile, // Note: API expects 'mobileno'
          email: formData.email,
          study: formData.study,
          course: formData.course,
          city: formData.city,
          state: formData.state,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        alert("Thanks for applying!");
        setFormData({
          name: "",
          fatherName: "",
          email: "",
          mobile: "",
          study: "",
          course: "",
          city: "",
          state: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/0a/f7/74/0af7741991985e2b530c8f62135c3eea.jpg')",
      }}
    >
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 p-6 bg-white/20 text-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center mt-2">Application Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full border px-4 py-2 rounded" required />
          <input type="text" name="fatherName" placeholder="Father Name" value={formData.fatherName} onChange={handleChange} className="w-full border px-4 py-2 rounded" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full border px-4 py-2 rounded" required />
          <input type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} className="w-full border px-4 py-2 rounded" required />
          <input type="text" name="study" placeholder="Study" value={formData.study} onChange={handleChange} className="w-full border px-4 py-2 rounded" required />
          <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} className="w-full border px-4 py-2 rounded" required />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="w-full border px-4 py-2 rounded" required />
          <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="w-full border px-4 py-2 rounded" required />

          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold">
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
