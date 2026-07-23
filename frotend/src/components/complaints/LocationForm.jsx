import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";

function LocationForm({ location, onChange }) {
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        console.log(latitude, longitude);

        onChange("latitude", latitude);
        onChange("longitude", longitude);

        // Reverse Geocoding comes later
      },
      (error) => {
        console.log(error);
        alert("Unable to fetch location.");
      }
    );
  }; // <-- FIXED: Added the missing closing bracket here!

  return (
    <Card className="rounded-3xl p-8">
      {/* Heading */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Complaint Location</h2>
        <p className="mt-2 text-slate-500">
          Provide the exact location where the issue exists. This helps AI identify duplicate complaints and assign the correct department.
        </p>
      </div>

      {/* Form Fields */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* State */}
        <Input
          label="State"
          placeholder="Maharashtra"
          value={location.state || ""}
          onChange={(e) => onChange("state", e.target.value)}
        />

        {/* District */}
        <Input
          label="District"
          placeholder="Jalgaon"
          value={location.district || ""}
          onChange={(e) => onChange("district", e.target.value)}
        />

        {/* Taluka */}
        <Input
          label="Taluka"
          placeholder="Amalner"
          value={location.taluka || ""}
          onChange={(e) => onChange("taluka", e.target.value)}
        />

        {/* Village */}
        <Input
          label="Village / City"
          placeholder="Shirud"
          value={location.village || ""}
          onChange={(e) => onChange("village", e.target.value)}
        />
      </div>

      {/* Address */}
      <div className="mt-6">
        <Input
          label="Landmark / Full Address"
          placeholder="Near Bus Stand, Main Road..."
          value={location.address || ""}
          onChange={(e) => onChange("address", e.target.value)}
        />
      </div>

      {/* GPS Section */}
      <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Use Current Location</h3>
            <p className="mt-2 text-sm text-slate-600">
              Allow location access to automatically detect your complaint location for better AI accuracy.
            </p>
            {/* Visual feedback showing coordinates are recorded */}
            {location.latitude && (
              <p className="mt-2 text-xs font-semibold text-emerald-600 animate-pulse">
                ✓ Coordinates Captured: {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
              </p>
            )}
          </div>

          <Button type="button" variant="outline" onClick={getCurrentLocation}>
            📍 Detect Location
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default LocationForm;
