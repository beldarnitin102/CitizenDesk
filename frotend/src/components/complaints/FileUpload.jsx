import { useRef } from "react";

import Card from "../ui/Card";
import Button from "../ui/Button";

function FileUpload({
  files,
  setFiles,
}) {
  const inputRef = useRef();

  const handleFiles = (selectedFiles) => {
    const fileArray = Array.from(selectedFiles);

    const updated = [
      ...files,
      ...fileArray,
    ].slice(0, 5);

    setFiles(updated);
  };

  const removeFile = (index) => {
    const updated = [...files];

    updated.splice(index, 1);

    setFiles(updated);
  };

  return (
    <Card className="rounded-3xl p-8">

      <h2 className="text-2xl font-bold text-slate-900">
        Upload Attachments
      </h2>

      <p className="mt-2 text-slate-500">
        Upload images, videos or PDF
        documents to help AI understand
        your complaint.
      </p>

      {/* Upload Box */}

      <div
        onClick={() => inputRef.current.click()}
        className="
        mt-6
        cursor-pointer
        rounded-3xl
        border-2
        border-dashed
        border-slate-300
        bg-slate-50
        p-12
        text-center
        transition
        hover:border-[#0F4C81]
        hover:bg-blue-50
        "
      >

        <div className="text-6xl">
          📁
        </div>

        <h3 className="mt-4 text-xl font-semibold">
          Drag & Drop Files
        </h3>

        <p className="mt-2 text-slate-500">
          or click to browse
        </p>

        <Button
          type="button"
          className="mt-6"
        >
          Choose Files
        </Button>

        <input
          ref={inputRef}
          type="file"
          hidden
          multiple
          accept="image/*,video/*,.pdf"
          onChange={(e) =>
            handleFiles(e.target.files)
          }
        />

      </div>

      {/* Preview */}

      {files.length > 0 && (

        <div className="mt-8">

          <h3 className="mb-4 text-lg font-semibold">
            Selected Files
          </h3>

          <div className="space-y-3">

            {files.map((file, index) => (

              <div
                key={index}
                className="flex items-center justify-between rounded-2xl border border-slate-200 p-4"
              >

                <div>

                  <h4 className="font-medium">
                    {file.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    removeFile(index)
                  }
                  className="rounded-lg bg-red-50 px-4 py-2 text-red-600 hover:bg-red-100"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

        </div>

      )}

    </Card>
  );
}

export default FileUpload;