import toast from "react-hot-toast";

import { apiConnector } from "../apiConnector";
import { complaintEndpoints } from "../apis";

const {
  CREATE_COMPLAINT,
  GET_MY_COMPLAINTS,
  GET_COMPLAINT_DETAILS,
  UPDATE_COMPLAINT,
  DELETE_COMPLAINT,
} = complaintEndpoints;

// Create Complaint
export const createComplaint = async (formData) => {
  const toastId = toast.loading("Submitting Complaint...");

  try {
    const response = await apiConnector("POST", CREATE_COMPLAINT, formData, {
      "Content-Type": "multipart/form-data",
    });

    toast.success(response.data.message);

    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || "Failed to submit complaint");
    throw error;
  } finally {
    toast.dismiss(toastId);
  }
};

// My Complaints
export const getMyComplaints = async () => {
  try {
    const response = await apiConnector("GET", GET_MY_COMPLAINTS);

    return response.data;
  } catch (error) {
    toast.error("Unable to fetch complaints");
    throw error;
  }
};

// Complaint Details
export const getComplaintDetails = async (id) => {
  try {
    const response = await apiConnector("GET", GET_COMPLAINT_DETAILS(id));

    return response.data;
  } catch (error) {
    toast.error("Unable to fetch complaint");
    throw error;
  }
};

// Update Complaint
export const updateComplaint = async (id, data) => {
  const toastId = toast.loading("Updating...");

  try {
    const response = await apiConnector("PATCH", UPDATE_COMPLAINT(id), data);

    toast.success(response.data.message);

    return response.data;
  } catch (error) {
    toast.error("Update Failed");
    throw error;
  } finally {
    toast.dismiss(toastId);
  }
};

// Delete Complaint
export const deleteComplaint = async (id) => {
  const toastId = toast.loading("Deleting...");

  try {
    const response = await apiConnector("DELETE", DELETE_COMPLAINT(id));

    toast.success(response.data.message);

    return response.data;
  } catch (error) {
    toast.error("Delete Failed");
    throw error;
  } finally {
    toast.dismiss(toastId);
  }
};
