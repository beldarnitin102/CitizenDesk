import Card from "../../ui/Card";

function ComplaintAttachments({ complaint }) {
  const attachments = complaint.attachments || [];
  console.log("Complaint ID:", complaint._id);
console.log("Attachments:", complaint.attachments);

  return (
    <Card className="rounded-3xl p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Attachments
        </h2>

        <p className="mt-2 text-slate-500">
          Photos and documents uploaded during complaint submission.
        </p>
      </div>

      {attachments.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center">
          <div className="text-5xl">📂</div>

          <h3 className="mt-4 text-xl font-semibold text-slate-700">
            No Attachments Uploaded
          </h3>

          <p className="mt-2 text-slate-500">
            This complaint doesn't contain any supporting files.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {attachments.map((file, index) => (
            <a
              key={index}
              href={file}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={file}
                  alt={`Attachment ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex items-center justify-between p-4">
                <span className="font-medium text-slate-700">
                  Attachment {index + 1}
                </span>

                <span className="text-[#0F4C81] font-semibold">
                  View →
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </Card>
  );
}

export default ComplaintAttachments;