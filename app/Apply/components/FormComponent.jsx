'use client'
import { useState } from "react";

export default function FormComponent() {
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
          mobileno: formData.mobile,
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
    <section className="min-h-screen pt-30 pb-10 px-4 sm:px-6 lg:px-8 bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/736x/0a/f7/74/0af7741991985e2b530c8f62135c3eea.jpg')" }}>
      <div className="max-w-xl mx-auto bg-white/20 text-white shadow-lg rounded-lg p-6 backdrop-blur-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Application Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "fatherName", "email", "mobile", "study", "course", "city", "state"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded text-black"
              required
            />
          ))}

          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
