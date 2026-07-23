import { useEffect, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import ProfileCard from "../../components/profile/ProfileCard";

import { getProfile } from "../../services/operations/profileAPI";

function CitizenProfile() {
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    try {
      setLoading(true);

      const response = await getProfile();

      setUser(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <DashboardLayout title="My Profile">
        <div className="flex h-[500px] items-center justify-center">

          <div className="h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0F4C81]"></div>

        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="My Profile">

      <ProfileCard user={user} />

    </DashboardLayout>
  );
}

export default CitizenProfile;