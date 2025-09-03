"use client";
import React, { useState } from "react";
import FormInputField from "@/components/form/form-elements/FormInputField";
import Button from "@/components/common/Button";
import { addUser } from "./actions";

const AddUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addUser(formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        city: "",
      });
    } catch (error) {
      console.error("Error adding user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 p-4">
      <div>
        <label
          htmlFor="firstname"
          className="block font-bold text-[15px] text-black text-left mb-1"
        >
          First Name
        </label>
        <FormInputField
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="lastname"
          className="block font-bold text-[15px] text-black text-left mb-1"
        >
          Last Name
        </label>
        <FormInputField
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block font-bold text-[15px] text-black text-left mb-1"
        >
          Email
        </label>
        <FormInputField
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label
          htmlFor="gender"
          className="block font-bold text-[15px] text-black text-left mb-1"
        >
          Gender
        </label>
        <FormInputField
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          placeholder="Enter your gender"
          required
        />
      </div>
      <div>
        <label
          htmlFor="city"
          className="block font-bold text-[15px] text-black text-left mb-1"
        >
          City
        </label>
        <FormInputField
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter your city"
          required
        />
      </div>
      <div className="col-span-2 flex justify-center mt-4">
        <Button
          type="submit"
          label={loading ? "Adding..." : "Add User"}
          className={`bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={loading}
          loading={loading}
        />
      </div>
    </form>
  );
};

export default AddUser;
