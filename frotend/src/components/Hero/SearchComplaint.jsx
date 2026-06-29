import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchComplaint = () => {
  const [complaintId, setComplaintId] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!complaintId.trim()) return;

    console.log("Searching:", complaintId);

    // Later
    // navigate(`/track-complaint/${complaintId}`)
  };

  return (
    <div className="mt-12 w-full max-w-2xl">

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-[var(--heading)]">
          Track Your Complaint
        </h3>

        <p className="mt-1 text-[15px] text-[var(--body)]">
          Enter your complaint number to check its latest status.
        </p>
      </div>

      <form
        onSubmit={handleSearch}
        className="rounded-2xl border border-[var(--border)] bg-white p-3 shadow-lg"
      >
        <div className="flex flex-col gap-3 md:flex-row">

          <div className="relative flex-1">

            <FiSearch
              className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-[var(--body)]"
            />

            <input
              type="text"
              placeholder="Example : JAL-2026-1745638291"
              value={complaintId}
              onChange={(e) =>
                setComplaintId(e.target.value)
              }
              className="h-14 w-full rounded-xl border border-[var(--border)] pl-14 pr-4 outline-none transition-all duration-300 focus:border-[var(--primary)]"
            />

          </div>

          <button
            type="submit"
            className="h-14 rounded-xl bg-[var(--primary)] px-8 font-semibold text-white transition-all duration-300 hover:bg-[var(--secondary)] hover:shadow-xl"
          >
            Track Now
          </button>

        </div>
      </form>
    </div>
  );
};

export default SearchComplaint;