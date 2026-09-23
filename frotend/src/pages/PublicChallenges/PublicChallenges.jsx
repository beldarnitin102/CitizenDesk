import { useEffect, useMemo, useState } from "react";
import { SlidersHorizontal, Search } from "lucide-react";

import ChallengesHeader from "./components/ChallengesHeader";
import ChallengeFilters from "./components/ChallengeFilters";
import ChallengeCard from "./components/ChallengeCard";
import ChallengeDetailsModal from "./components/ChallengeDetailsModal";

import { getPublicComplaints } from "../../services/operations/complaintAPI";

function PublicChallenges() {
  const [complaints, setComplaints] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [location, setLocation] = useState("All Locations");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedChallenge, setSelectedChallenge] = useState(null);
  // ====================================
  // FETCH PUBLIC COMPLAINTS
  // ====================================
  useEffect(() => {
    const fetchPublicComplaints = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getPublicComplaints();

        // ApiResponse normally returns the actual array in data
        setComplaints(response?.data || []);
      } catch (err) {
        console.error("Failed to fetch public complaints:", err);

        setError(
          err?.response?.data?.message ||
            "Unable to load civic challenges right now.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPublicComplaints();
  }, []);

  // ====================================
  // CREATE CATEGORY FILTER OPTIONS
  // ====================================
  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        complaints.map((complaint) => complaint.category).filter(Boolean),
      ),
    ];

    return ["All Categories", ...uniqueCategories];
  }, [complaints]);

  // ====================================
  // CREATE LOCATION FILTER OPTIONS
  // ====================================
  const locations = useMemo(() => {
    const uniqueLocations = [
      ...new Set(
        complaints
          .map((complaint) => complaint.location?.village)
          .filter(Boolean),
      ),
    ];

    return ["All Locations", ...uniqueLocations];
  }, [complaints]);

  // ====================================
  // FILTER COMPLAINTS
  // ====================================
  const filteredChallenges = useMemo(() => {
    const query = search.trim().toLowerCase();

    return complaints.filter((complaint) => {
      const village = complaint.location?.village || "";

      const matchesSearch =
        !query ||
        complaint.title?.toLowerCase().includes(query) ||
        complaint.description?.toLowerCase().includes(query) ||
        complaint.category?.toLowerCase().includes(query) ||
        village.toLowerCase().includes(query);

      const matchesCategory =
        category === "All Categories" || complaint.category === category;

      const matchesLocation =
        location === "All Locations" || village === location;

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [complaints, search, category, location]);

  // ====================================
  // MAP BACKEND COMPLAINT → CARD DATA
  // ====================================
  const challengeCards = useMemo(() => {
    return filteredChallenges.map((complaint) => ({
      id: complaint._id,
      category: complaint.category || "General",
      title: complaint.title || "Civic Issue",
      description: complaint.description || "No description available.",

      location:
        complaint.location?.village ||
        complaint.location?.taluka ||
        complaint.location?.district ||
        "Location not specified",

      reports: 1,

      status: formatStatus(complaint.status),
      priority: complaint.priority || "LOW",

      complaintNumber: complaint.complaintNumber,
      createdAt: complaint.createdAt,
      duplicateOf: complaint.duplicateOf,

      attachments: complaint.attachments || [],
    }));
  }, [filteredChallenges]);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <ChallengesHeader />

      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        {/* HEADER */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F4C81]">
              District Problems
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
              Explore Civic Challenges
            </h2>

            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Browse publicly visible problems reported by citizens.
            </p>
          </div>

          {!loading && !error && (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <SlidersHorizontal size={16} />

              <span>{challengeCards.length} challenges</span>
            </div>
          )}
        </div>

        {/* FILTERS */}
        {!loading && !error && (
          <div className="mt-8">
            <ChallengeFilters
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              location={location}
              setLocation={setLocation}
              categories={categories}
              locations={locations}
            />
          </div>
        )}

        {/* LOADING */}
        {loading && (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-80 animate-pulse rounded-3xl border border-slate-200 bg-white"
              />
            ))}
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="mt-8 rounded-3xl border border-red-100 bg-white px-6 py-16 text-center">
            <h3 className="text-lg font-bold text-slate-950">
              Unable to load challenges
            </h3>

            <p className="mt-2 text-sm text-slate-500">{error}</p>
          </div>
        )}

        {/* DATA */}
        {!loading && !error && challengeCards.length > 0 && (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {challengeCards.map((challenge) => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                onView={(selectedChallenge) => {
                  setSelectedChallenge(selectedChallenge);
                }}
              />
            ))}
          </div>
        )}

        {/* EMPTY */}
        {!loading && !error && challengeCards.length === 0 && (
          <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <Search size={32} className="mx-auto text-slate-400" />

            <h3 className="mt-4 text-lg font-bold text-slate-950">
              No challenges found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or filters.
            </p>
          </div>
        )}
      </section>
      {selectedChallenge && (
        <ChallengeDetailsModal
          challenge={selectedChallenge}
          onClose={() => setSelectedChallenge(null)}
        />
      )}
    </main>
  );
}

// ====================================
// BACKEND STATUS → PUBLIC STATUS
// ====================================
function formatStatus(status) {
  const statusMap = {
    PENDING: "Reported",
    ASSIGNED: "Under Review",
    IN_PROGRESS: "In Progress",
    RESOLVED: "Resolved",
    REJECTED: "Rejected",
    CLOSED: "Resolved",
  };

  return statusMap[status] || "Reported";
}

export default PublicChallenges;
