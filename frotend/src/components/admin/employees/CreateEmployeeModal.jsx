import Card from "../../ui/Card";

import EmployeeForm from "./EmployeeForm";

function CreateEmployeeModal({
  departments,

  onSuccess,

  onClose,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <Card className="w-full max-w-2xl rounded-3xl p-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Create Employee</h2>

          <button onClick={onClose} className="text-2xl">
            ×
          </button>
        </div>

        <EmployeeForm
          departments={departments}
          onSuccess={() => {
            onSuccess?.();
            onClose?.();
          }}
        />
      </Card>
    </div>
  );
}

export default CreateEmployeeModal;
