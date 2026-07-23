import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext"; // 1. Grabbed context state

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import ProfileCard from "../../components/profile/ProfileCard";

import { getProfile } from "../../services/operations/profileAPI";

function CitizenProfile() {
  // 2. FIXED: Destructured contextUser as a permanent safety backup fallback shield
  const { token, user: contextUser } = useAuth(); 
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, [token]);

  async function fetchProfile() {
    try {
      setLoading(true);
      const response = await getProfile(token);

      console.log("Raw Profile Network Payload Check:", response);

      // Deep structure unwrapping layer chain logic
      const targetPayload = response?.data?.data || response?.data || response;
      const finalUserRecord = targetPayload?.user || targetPayload;

      // 3. FIXED EXTRACTION SAFEGUARD: If server records are valid, save them, otherwise fall back on memory cache
      if (finalUserRecord && (finalUserRecord.name || finalUserRecord.email)) {
        setUser(finalUserRecord);
      } else {
        setUser(contextUser);
      }
    } catch (error) {
      console.log("Profile page fetch operation breakdown log, falling back to local memory:", error);
      // If the backend API throws a 404 or 500 error, your app stays up and running using browser cache memory
      setUser(contextUser);
    } finally {
      setLoading(false);
    }
  }

  // 4. FIXED CONDITION: Only block rendering with a loader if both the network data AND cache data are totally empty
  if (loading && !user && !contextUser) {
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
      {/* 5. PASS EITHER DYNAMIC LIVE SERVER VALUES OR PERSISTENT CONTEXT RECORD POOLS */}
      <ProfileCard user={user || contextUser} />
    </DashboardLayout>
  );
}

export default CitizenProfile;
