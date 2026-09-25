import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  MapPin,
  Search,
  Users,
} from "lucide-react";

import Container from "../../components/ui/Container";
import ChallengeDetailsModal from "../PublicChallenges/components/ChallengeDetailsModal";

import { getPublicDepartmentComplaints } from "../../services/operations/departmentHeadAPI";

function PublicDepartment() {
  const { id } = useParams();

  const [department, setDepartment] = useState(null);
  const [complaints, setComplaints] = useState([]);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedComplaint, setSelectedComplaint] = useState(null);

  useEffect(() => {
    const loadDepartmentComplaints = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getPublicDepartmentComplaints(id);

        setDepartment(response?.data?.department || null);
        setComplaints(response?.data?.complaints || []);
      } catch (error) {
        console.error("Failed to load department complaints:", error);

        setError(
          error?.response?.data?.message ||
            "Unable to load department complaints right now.",
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadDepartmentComplaints();
    }
  }, [id]);

  const filteredComplaints = useMemo(() => {
    return complaints.filter((complaint) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        complaint.title?.toLowerCase().includes(searchValue) ||
        complaint.description?.toLowerCase().includes(searchValue) ||
        complaint.complaintNumber?.toLowerCase().includes(searchValue) ||
        complaint.location?.village?.toLowerCase().includes(searchValue) ||
        complaint.location?.taluka?.toLowerCase().includes(searchValue);

      const matchesStatus = status === "ALL" || complaint.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [complaints, search, status]);

  const formatStatus = (value) => {
    const statusMap = {
      PENDING: "Reported",
      ASSIGNED: "Under Review",
      IN_PROGRESS: "In Progress",
      RESOLVED: "Resolved",
      CLOSED: "Resolved",
      REJECTED: "Rejected",
    };

    return statusMap[value] || "Reported";
  };

  const getStatusStyle = (value) => {
    const styles = {
      PENDING: "bg-slate-100 text-slate-700",
      ASSIGNED: "bg-blue-50 text-blue-700",
      IN_PROGRESS: "bg-violet-50 text-violet-700",
      RESOLVED: "bg-emerald-50 text-emerald-700",
      CLOSED: "bg-emerald-50 text-emerald-700",
      REJECTED: "bg-red-50 text-red-700",
    };

    return styles[value] || "bg-slate-100 text-slate-700";
  };

  const getPriorityStyle = (value) => {
    const styles = {
      HIGH: "bg-red-50 text-red-700 border-red-100",
      CRITICAL: "bg-red-100 text-red-800 border-red-200",
      MEDIUM: "bg-amber-50 text-amber-700 border-amber-100",
      LOW: "bg-emerald-50 text-emerald-700 border-emerald-100",
    };

    return styles[value] || "bg-slate-100 text-slate-700 border-slate-200";
  };

  const getLocation = (complaint) => {
    return (
      complaint.location?.village ||
      complaint.location?.taluka ||
      complaint.location?.district ||
      "Location not specified"
    );
  };

  const formatDate = (date) => {
    if (!date) return "Date unavailable";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 py-16">
        <Container>
          <div className="flex min-h-[50vh] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#0F4C81]" />
              <p className="mt-4 text-sm font-medium text-slate-600">
                Loading department complaints...
              </p>
            </div>
          </div>
        </Container>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-50 py-16">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border border-red-100 bg-white p-10 text-center shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">
              Unable to load department
            </h1>

            <p className="mt-3 text-slate-600">{error}</p>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <section className="bg-white">
        <Container>
          <div className="py-10 sm:py-14">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0F4C81] transition hover:gap-3"
            >
              <ArrowLeft size={17} />
              Back to Departments
            </button>

            <div className="max-w-4xl">
              <span className="inline-flex rounded-full bg-[#0F4C81]/10 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
                Government Department
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                {department?.name || "Department"}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                {department?.description ||
                  "Explore civic complaints reported to this department."}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <Users size={18} className="text-[#0F4C81]" />
                  <span className="text-sm font-semibold text-slate-700">
                    {complaints.length} public complaints
                  </span>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="text-sm font-semibold text-slate-700">
                    Public civic issues
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Complaints */}
      <section className="py-12">
        <Container>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
                Complaints in this Department
              </h2>

              <p className="mt-2 text-slate-600">
                Browse publicly visible civic issues reported to this
                department.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {/* Search */}
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search complaints..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/10 sm:w-64"
                />
              </div>

              {/* Status */}
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none transition focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/10"
              >
                <option value="ALL">All Status</option>
                <option value="PENDING">Reported</option>
                <option value="ASSIGNED">Under Review</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="RESOLVED">Resolved</option>
                <option value="CLOSED">Closed</option>
              </select>
            </div>
          </div>

          {filteredComplaints.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                <Search className="text-slate-400" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                No complaints found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Try changing your search or status filter.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredComplaints.map((complaint) => (
                <article
                  key={complaint._id}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0F4C81]/20 hover:shadow-xl"
                >
                  {/* Image */}
                  {complaint.attachments?.length > 0 ? (
                    <div className="h-52 overflow-hidden bg-slate-100">
                      <img
                        src={complaint.attachments[0]}
                        alt={complaint.title || "Civic complaint"}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  ) : (
                    <div className="flex h-52 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-50">
                      <span className="text-sm font-medium text-slate-400">
                        No image available
                      </span>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${getPriorityStyle(
                          complaint.priority,
                        )}`}
                      >
                        {complaint.priority || "LOW"}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                          complaint.status,
                        )}`}
                      >
                        {formatStatus(complaint.status)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 line-clamp-2 text-xl font-bold text-slate-950">
                      {complaint.title || "Civic Issue"}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                      {complaint.description || "No description available."}
                    </p>

                    {/* Details */}
                    <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <MapPin size={16} className="shrink-0 text-[#0F4C81]" />
                        <span className="truncate">
                          {getLocation(complaint)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <CalendarDays
                          size={16}
                          className="shrink-0 text-[#0F4C81]"
                        />
                        <span>{formatDate(complaint.createdAt)}</span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                      <span className="text-xs font-medium text-slate-400">
                        {complaint.complaintNumber}
                      </span>

                      <button
                        type="button"
                        onClick={() => setSelectedComplaint(complaint)}
                        className="inline-flex items-center gap-2 font-semibold text-[#0F4C81] transition-all hover:gap-3"
                      >
                        View Complaint
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Existing complaint detail modal */}
      {selectedComplaint && (
        <ChallengeDetailsModal
          challenge={{
            ...selectedComplaint,
            location:
              selectedComplaint.location?.village ||
              selectedComplaint.location?.taluka ||
              selectedComplaint.location?.district ||
              "Location not specified",
            reports: 1,
            attachments: selectedComplaint.attachments || [],
          }}
          onClose={() => setSelectedComplaint(null)}
        />
      )}
    </main>
  );
}

export default PublicDepartment;
