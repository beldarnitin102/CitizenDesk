import { useMemo, useState } from "react";
import { SlidersHorizontal, Search } from "lucide-react";

import ChallengesHeader from "./components/ChallengesHeader";
import ChallengeFilters from "./components/ChallengeFilters";
import ChallengeCard from "./components/ChallengeCard";

const challenges = [
  {
    id: 1,
    category: "Road Infrastructure",
    title: "Large pothole near primary school",
    description:
      "A damaged road surface with a large pothole has been reported near a primary school, creating difficulty for vehicles and pedestrians.",
    location: "Village A",
    reports: 15,
    status: "Under Review",
    priority: "HIGH",
  },
  {
    id: 2,
    category: "Water Supply",
    title: "Continuous water leakage near market",
    description:
      "A water pipeline appears to be leaking continuously near the local market, resulting in water wastage and inconvenience.",
    location: "Village B",
    reports: 8,
    status: "In Progress",
    priority: "MEDIUM",
  },
  {
    id: 3,
    category: "Electricity",
    title: "Street light not working",
    description:
      "A public street light has reportedly remained non-functional, reducing visibility for residents during evening hours.",
    location: "Village C",
    reports: 4,
    status: "Reported",
    priority: "MEDIUM",
  },
  {
    id: 4,
    category: "Sanitation",
    title: "Garbage accumulation near residential area",
    description:
      "Garbage has accumulated near a residential area and requires attention from the concerned sanitation authority.",
    location: "Village D",
    reports: 11,
    status: "Under Review",
    priority: "HIGH",
  },
  {
    id: 5,
    category: "Public Property",
    title: "Damaged public facility",
    description:
      "A public facility requires maintenance after visible damage was reported by residents of the area.",
    location: "Village E",
    reports: 6,
    status: "Reported",
    priority: "LOW",
  },
];

const categories = [
  "All Categories",
  "Road Infrastructure",
  "Water Supply",
  "Electricity",
  "Sanitation",
  "Public Property",
];

const locations = [
  "All Locations",
  "Village A",
  "Village B",
  "Village C",
  "Village D",
  "Village E",
];

function PublicChallenges() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [location, setLocation] = useState("All Locations");

  const filteredChallenges = useMemo(() => {
    const query = search.trim().toLowerCase();

    return challenges.filter((challenge) => {
      const matchesSearch =
        !query ||
        challenge.title.toLowerCase().includes(query) ||
        challenge.description.toLowerCase().includes(query) ||
        challenge.category.toLowerCase().includes(query) ||
        challenge.location.toLowerCase().includes(query);

      const matchesCategory =
        category === "All Categories" || challenge.category === category;

      const matchesLocation =
        location === "All Locations" || challenge.location === location;

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [search, category, location]);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <ChallengesHeader />

      {/* Challenges */}
      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        {/* Section heading */}
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

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <SlidersHorizontal size={16} />
            <span>{filteredChallenges.length} challenges</span>
          </div>
        </div>

        {/* Filters */}
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

        {/* Cards */}
        {filteredChallenges.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredChallenges.map((challenge) => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                onView={(selectedChallenge) => {
                  console.log("Selected challenge:", selectedChallenge);
                }}
              />
            ))}
          </div>
        ) : (
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
    </main>
  );
}

export default PublicChallenges;
