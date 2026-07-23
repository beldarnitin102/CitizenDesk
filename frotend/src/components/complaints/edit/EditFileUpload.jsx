import Card from "../../ui/Card";

function EditFileUpload({ files = [] }) {
  return (
    <Card className="rounded-3xl p-8">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Attachments
        </h2>

        <p className="mt-2 text-slate-500">
          View the files that were submitted with this complaint.
        </p>

      </div>

      {files.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center">

          <div className="text-5xl">
            📂
          </div>

          <h3 className="mt-4 text-xl font-semibold">
            No Attachments
          </h3>

          <p className="mt-2 text-slate-500">
            No files were uploaded for this complaint.
          </p>

        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {files.map((file, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">

                <img
                  src={file}
                  alt={`Attachment ${index + 1}`}
                  className="h-full w-full object-cover"
                />

              </div>

              <div className="flex items-center justify-between p-4">

                <span className="font-medium text-slate-700">
                  Attachment {index + 1}
                </span>

                <a
                  href={file}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#0F4C81] hover:underline"
                >
                  View
                </a>

              </div>

            </div>
          ))}

        </div>
      )}

      <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">

        <h3 className="font-semibold text-amber-700">
          Attachment Editing
        </h3>

        <p className="mt-2 text-sm leading-6 text-amber-600">
          Uploading new files and removing existing attachments will be
          enabled after the backend supports multipart/form-data updates.
        </p>

      </div>

    </Card>
  );
}

export default EditFileUpload;