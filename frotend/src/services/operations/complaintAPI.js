import { apiConnector } from "../../api/apiConnector";
import { COMPLAINT_ENDPOINTS } from "../../api/endpoints";

const {
  CREATE_COMPLAINT,
  GET_MY_COMPLAINTS,
  GET_COMPLAINT_DETAILS,
  UPDATE_COMPLAINT,
  DELETE_COMPLAINT,
  GET_CITIZEN_DASHBOARD,
} = COMPLAINT_ENDPOINTS;

// ====================================
// GET CITIZEN DASHBOARD
// ====================================
export const getCitizenDashboard = async (token) => {
  try {
    const response = await apiConnector({
      method: "GET",
      url: GET_CITIZEN_DASHBOARD,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
};

// ====================================
// CREATE COMPLAINT
// ====================================
export const createComplaint = async (data, token) => {
  try {
    const formData = new FormData();

    formData.append("description", data.description);
    formData.append("location", JSON.stringify(data.location));

    data.attachments.forEach((file) => {
      formData.append("attachments", file);
    });

    const response = await apiConnector({
      method: "POST",
      url: CREATE_COMPLAINT,
      bodyData: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// ====================================
// GET MY COMPLAINTS
// ====================================
export const getMyComplaints = async (token) => {
  try {
    const response = await apiConnector({
      method: "GET",
      url: GET_MY_COMPLAINTS,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// ====================================
// GET COMPLAINT DETAILS (FIXED: Kept only this correct version)
// ====================================
export const getComplaintDetails = async (id, token) => {
  try {
    const response = await apiConnector({
      method: "GET",
      url: GET_COMPLAINT_DETAILS(id),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// ====================================
// UPDATE COMPLAINT
// ====================================
export async function updateComplaint(id, data) {
  try {
    const response = await apiConnector(
      "PATCH",
      UPDATE_COMPLAINT(id),
      data
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
// ====================================
// DELETE COMPLAINT
// ====================================
export const deleteComplaint = async (id, token) => {
  try {
    const response = await apiConnector({
      method: "DELETE",
      url: DELETE_COMPLAINT(id),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
