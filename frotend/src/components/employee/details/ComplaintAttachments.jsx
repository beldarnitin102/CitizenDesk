import Card from "../../ui/Card";

function ComplaintAttachments({ complaint }) {

  const attachments =
    complaint?.attachments || [];

  return (

    <Card className="rounded-3xl p-6">

      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Attachments
      </h2>

      {attachments.length === 0 ? (

        <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
          No attachments uploaded.
        </div>

      ) : (

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {attachments.map((file, index) => {

            const isImage =
              file.match(/\.(jpg|jpeg|png|gif|webp)$/i);

            return (

              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
              >

                {isImage ? (

                  <img
                    src={file}
                    alt={`Attachment ${index + 1}`}
                    className="h-48 w-full object-cover"
                  />

                ) : (

                  <div className="flex h-48 items-center justify-center bg-slate-100 text-6xl">
                    📄
                  </div>

                )}

                <div className="p-4">

                  <a
                    href={file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-[#0F4C81] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0b3b63]"
                  >
                    View Attachment
                  </a>

                </div>

              </div>

            );

          })}

        </div>

      )}

    </Card>

  );

}

export default ComplaintAttachments;