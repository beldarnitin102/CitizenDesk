import { Search, SlidersHorizontal } from "lucide-react";

function ChallengeFilters({
  search,
  setSearch,
  category,
  setCategory,
  location,
  setLocation,
  categories,
  locations,
}) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search civic challenges..."
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-[#0F4C81] focus:bg-white focus:ring-4 focus:ring-[#0F4C81]/10"
            />
          </div>

          {/* Category */}
          <div className="relative w-full lg:w-64">
            <SlidersHorizontal
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-12 w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition focus:border-[#0F4C81] focus:bg-white focus:ring-4 focus:ring-[#0F4C81]/10"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div className="w-full lg:w-56">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-700 outline-none transition focus:border-[#0F4C81] focus:bg-white focus:ring-4 focus:ring-[#0F4C81]/10"
            >
              {locations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChallengeFilters;
