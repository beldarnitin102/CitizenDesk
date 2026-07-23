import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../ui/Card";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";

import EditLocationForm from "./EditLocationForm";
import EditFileUpload from "./EditFileUpload";

import { updateComplaint } from "../../../services/operations/complaintAPI";

function EditComplaintForm({ complaint }) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    description: complaint.description || "",

    location: {
      village: complaint.location?.village || "",
      taluka: complaint.location?.taluka || "",
      district: complaint.location?.district || "",
      state: complaint.location?.state || "",
      latitude: complaint.location?.latitude || "",
      longitude: complaint.location?.longitude || "",
    },

    attachments: complaint.attachments || [],
  });

  function handleDescriptionChange(e) {
    setFormData((prev) => ({
      ...prev,
      description: e.target.value,
    }));
  }

  function handleLocationChange(location) {
    setFormData((prev) => ({
      ...prev,
      location,
    }));
  }

  function handleAttachmentChange(files) {
    setFormData((prev) => ({
      ...prev,
      attachments: files,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      await updateComplaint(
        complaint._id,
        formData
      );

      alert("Complaint updated successfully.");

      navigate(`/dashboard/complaints/${complaint._id}`);
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
          "Failed to update complaint."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <Card className="rounded-3xl p-8">

        <h2 className="mb-8 text-2xl font-bold">
          Edit Complaint
        </h2>

        <Textarea
          label="Complaint Description"
          rows={7}
          value={formData.description}
          onChange={handleDescriptionChange}
          placeholder="Describe your complaint..."
        />

      </Card>

      <EditLocationForm
        value={formData.location}
        onChange={handleLocationChange}
      />

      <EditFileUpload
        files={formData.attachments}
        onChange={handleAttachmentChange}
      />

      <div className="flex flex-wrap justify-end gap-4">

        <Button
          type="button"
          variant="outline"
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </Button>

      </div>
    </form>
  );
}

export default EditComplaintForm;