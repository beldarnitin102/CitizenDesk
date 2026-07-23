import DashboardLayout from "../../components/dashboard/DashboardLayout";
import ComplaintForm from "../../components/complaints/ComplaintForm";

function CreateComplaint() {
  return (
    <DashboardLayout title="Create Complaint">

      <ComplaintForm />

    </DashboardLayout>
  );
}

export default CreateComplaint;