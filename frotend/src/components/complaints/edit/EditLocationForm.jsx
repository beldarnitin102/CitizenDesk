import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function EditLocationForm({ value, onChange }) {
  function handleChange(e) {
    const { name, value: fieldValue } = e.target;

    onChange({
      ...value,
      [name]: fieldValue,
    });
  }

  function detectLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        onChange({
          ...value,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        alert("Unable to fetch your location.");
      }
    );
  }

  return (
    <Card className="rounded-3xl p-8">

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Location Information
          </h2>

          <p className="mt-2 text-slate-500">
            Update the location where the complaint occurred.
          </p>
        </div>

        <Button
          type="button"
          variant="outline"
          onClick={detectLocation}
        >
          Detect Current Location
        </Button>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <Input
          label="Village"
          name="village"
          value={value.village}
          onChange={handleChange}
          placeholder="Enter village"
        />

        <Input
          label="Taluka"
          name="taluka"
          value={value.taluka}
          onChange={handleChange}
          placeholder="Enter taluka"
        />

        <Input
          label="District"
          name="district"
          value={value.district}
          onChange={handleChange}
          placeholder="Enter district"
        />

        <Input
          label="State"
          name="state"
          value={value.state}
          onChange={handleChange}
          placeholder="Enter state"
        />

        <Input
          label="Latitude"
          name="latitude"
          value={value.latitude}
          onChange={handleChange}
          placeholder="Latitude"
        />

        <Input
          label="Longitude"
          name="longitude"
          value={value.longitude}
          onChange={handleChange}
          placeholder="Longitude"
        />

      </div>

    </Card>
  );
}

export default EditLocationForm;