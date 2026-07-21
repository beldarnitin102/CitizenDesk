import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Select from "../components/ui/Select";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import StatusBadge from "../components/ui/StatusBadge";
import Avatar from "../components/ui/Avatar";
import SectionTitle from "../components/ui/SectionTitle";

function DesignSystem() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}

        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            District Grievance UI System
          </h1>

          <p className="mt-2 text-slate-600">
            AI Powered Smart District Complaint Management System
          </p>
        </div>

        {/* Typography */}

        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Typography</h2>

          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Hero Heading</h1>

            <h2 className="text-4xl font-bold">Section Heading</h2>

            <h3 className="text-2xl font-semibold">Card Heading</h3>

            <p className="text-slate-600">
              This is normal body text for the project.
            </p>

            <p className="text-sm text-slate-500">Small helper text.</p>
          </div>
        </section>

        {/* Buttons */}

        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Buttons</h2>

          <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>

            <Button variant="secondary">Secondary</Button>

            <Button variant="outline">Outline</Button>

            <Button variant="danger">Danger</Button>

            <Button variant="ghost">Ghost</Button>

            <Button loading>Loading</Button>
          </div>
        </section>

        {/* Sizes */}

        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Sizes</h2>

          <div className="flex gap-4 items-center flex-wrap">
            <Button size="sm">Small</Button>

            <Button size="md">Medium</Button>

            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* Status */}

        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Status Badges</h2>

          <div className="flex gap-3 flex-wrap">
            <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700">
              Pending
            </span>

            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700">
              In Progress
            </span>

            <span className="px-4 py-2 rounded-full bg-green-100 text-green-700">
              Resolved
            </span>

            <span className="px-4 py-2 rounded-full bg-red-100 text-red-700">
              Rejected
            </span>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Form Components</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Full Name"
              placeholder="Enter your name"
              helperText="This name will appear on complaints."
              required
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
            />

            <Input
              label="Phone Number"
              placeholder="+91 9876543210"
              error="Phone number is required"
            />

            <Select
              label="Department"
              placeholder="Choose department"
              options={[
                { label: "Public Works Department", value: "pwd" },
                { label: "Water Department", value: "water" },
                { label: "Electricity Department", value: "electricity" },
              ]}
            />

            <div className="md:col-span-2">
              <Textarea
                label="Complaint Description"
                placeholder="Describe your issue..."
                helperText="You can write in Marathi, Hindi, English, or any regional language."
              />
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-8">Cards & Badges</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card
              hover
              title="Road Damage Complaint"
              subtitle="Complaint #JAL-2026-10562"
            >
              <p className="text-slate-600 leading-relaxed">
                Multiple potholes detected near the village road causing traffic
                issues.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <Badge variant="warning">Medium Priority</Badge>

                <Badge variant="primary">Public Works</Badge>

                <Badge variant="gray">Pending</Badge>
              </div>
            </Card>

            <Card hover title="AI Analysis" subtitle="Generated Automatically">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">Language</span>

                  <span className="font-medium">Marathi</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Category</span>

                  <span className="font-medium">Road Damage</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Department</span>

                  <span className="font-medium">PWD</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Confidence</span>

                  <Badge variant="success">96%</Badge>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm">

  <SectionTitle
    badge="Reusable Components"
    title="Status, Avatar & Section Title"
    subtitle="These components will be reused across Citizen, Employee and Admin dashboards."
  />

  <div className="mt-10 space-y-8">

    <div className="flex flex-wrap gap-3">

      <StatusBadge status="PENDING" />

      <StatusBadge status="ASSIGNED" />

      <StatusBadge status="IN_PROGRESS" />

      <StatusBadge status="RESOLVED" />

      <StatusBadge status="CLOSED" />

      <StatusBadge status="REJECTED" />

    </div>

    <div className="flex items-center gap-6">

      <Avatar name="Jhon Doe" />

      <Avatar
        name="District Collector"
        size="lg"
      />

      <Avatar
        name="Public Works Department"
        size="xl"
      />

    </div>

  </div>

</section>
      </div>
    </div>
  );
}

export default DesignSystem;
