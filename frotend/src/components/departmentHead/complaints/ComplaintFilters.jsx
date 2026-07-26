import Input from "../../ui/Input";
import Button from "../../ui/Button";

function ComplaintFilters({

  filters,

  setFilters,

}) {

  const handleChange = (key, value) => {

    setFilters((prev) => ({

      ...prev,

      [key]: value,

      page: 1,

    }));

  };

  const handleReset = () => {

    setFilters({

      search: "",

      status: "",

      priority: "",

      page: 1,

      limit: 10,

    });

  };

  return (

    <div className="rounded-3xl bg-white p-6 shadow">

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">

        <Input

          placeholder="Search complaint..."

          value={filters.search}

          onChange={(e) =>

            handleChange(

              "search",

              e.target.value

            )

          }

        />

        <select

          value={filters.status}

          onChange={(e) =>

            handleChange(

              "status",

              e.target.value

            )

          }

          className="rounded-xl border border-slate-300 px-4 py-3"

        >

          <option value="">

            All Status

          </option>

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

        <select

          value={filters.priority}

          onChange={(e) =>

            handleChange(

              "priority",

              e.target.value

            )

          }

          className="rounded-xl border border-slate-300 px-4 py-3"

        >

          <option value="">

            All Priority

          </option>

          <option value="LOW">

            LOW

          </option>

          <option value="MEDIUM">

            MEDIUM

          </option>

          <option value="HIGH">

            HIGH

          </option>

          <option value="CRITICAL">

            CRITICAL

          </option>

        </select>

        <Button

          onClick={handleReset}

        >

          Reset Filters

        </Button>

      </div>

    </div>

  );

}

export default ComplaintFilters;