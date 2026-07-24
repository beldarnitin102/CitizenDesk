function ComplaintFilters({
  status,
  priority,
  sort,
  onStatusChange,
  onPriorityChange,
  onSortChange,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:flex-row">

      {/* Status */}

      <select
        value={status}
        onChange={(e) =>
          onStatusChange(e.target.value)
        }
        className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0F4C81]"
      >
        <option value="">All Status</option>

        <option value="PENDING">
          Pending
        </option>

        <option value="ASSIGNED">
          Assigned
        </option>

        <option value="IN_PROGRESS">
          In Progress
        </option>

        <option value="RESOLVED">
          Resolved
        </option>

        <option value="REJECTED">
          Rejected
        </option>

        <option value="CLOSED">
          Closed
        </option>
      </select>

      {/* Priority */}

      <select
        value={priority}
        onChange={(e) =>
          onPriorityChange(e.target.value)
        }
        className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0F4C81]"
      >
        <option value="">
          All Priority
        </option>

        <option value="LOW">
          Low
        </option>

        <option value="MEDIUM">
          Medium
        </option>

        <option value="HIGH">
          High
        </option>

        <option value="CRITICAL">
          Critical
        </option>
      </select>

      {/* Sort */}

      <select
        value={sort}
        onChange={(e) =>
          onSortChange(e.target.value)
        }
        className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0F4C81]"
      >
        <option value="latest">
          Latest First
        </option>

        <option value="oldest">
          Oldest First
        </option>

        <option value="priority">
          Priority
        </option>
      </select>

    </div>
  );
}

export default ComplaintFilters;