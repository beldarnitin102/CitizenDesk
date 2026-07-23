import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

import { createComplaint } from "../../services/operations/complaintAPI";

import Card from "../ui/Card";
import Button from "../ui/Button";
import Textarea from "../ui/Textarea";

import FileUpload from "./FileUpload";
import LocationForm from "./LocationForm";

function ComplaintForm() {
  const { token } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    description: "",

    location: {
      state: "",
      district: "",
      taluka: "",
      village: "",
      address: "",
    },

    attachments: [],
  });

  const handleDescription = (e) => {
    setFormData((prev) => ({
      ...prev,
      description: e.target.value,
    }));
  };

  const handleLocationChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        [field]: value,
      },
    }));
  };

  const handleFiles = (files) => {
    setFormData((prev) => ({
      ...prev,
      attachments: files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await createComplaint(formData, token);

      console.log(response);

      alert("Complaint Submitted Successfully");

      setFormData({
        description: "",

        location: {
          state: "",
          district: "",
          taluka: "",
          village: "",
          address: "",
        },

        attachments: [],
      });
    } catch (error) {
      console.log(error);

      alert(error?.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Header */}

      <Card className="rounded-3xl p-8">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
          AI Powered Complaint System
        </span>

        <h1 className="mt-5 text-4xl font-bold text-slate-900">
          Create Complaint
        </h1>

        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          Describe your issue in Marathi, Hindi, English or any regional
          language. AI will automatically detect the category, department,
          priority and assign it to the appropriate government department.
        </p>
      </Card>

      {/* Description */}

      <Card className="rounded-3xl p-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Complaint Description
        </h2>

        <p className="mt-2 text-slate-500">Explain your issue clearly.</p>

        <div className="mt-6">
          <Textarea
            rows={8}
            placeholder="Example:

'माझ्या गावात रस्त्यावर मोठे खड्डे आहेत.'

'Street lights are not working.'

'Water leakage near bus stand.'"
            value={formData.description}
            onChange={handleDescription}
          />
        </div>
      </Card>

      {/* Upload */}

      <FileUpload files={formData.attachments} setFiles={handleFiles} />

      {/* Location */}

      <LocationForm
        location={formData.location}
        onChange={handleLocationChange}
      />

      {/* Submit Container Block inside ComplaintForm.jsx */}
      <div className="flex justify-end">
        <Button
          type="submit"
          size="lg"
          disabled={loading} // <-- FIXED: Changed from string conditions to a clear boolean flag
        >
          {loading ? "Submitting..." : "Submit Complaint"}
        </Button>
      </div>
    </form>
  );
}

export default ComplaintForm;
