import React, { useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

const UploadTest = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [examJson, setExamJson] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedFile(file);

    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const questionsArray = XLSX.utils.sheet_to_json(worksheet);
      const generateId = (prefix, length = 9) => {
        let id = "";
        for (let i = 0; i < length; i++) {
          id += Math.floor(Math.random() * 10);
        }
        return `${prefix}_${id}`;
      };

      const finalJson = {
        instituteId: generateId("INST"),
        ExamId: generateId("EXAM"),
        questions: questionsArray.map((q) => ({
          Que: q.Que || "",
          opt1: q.opt1 || "",
          opt2: q.opt2 || "",
          opt3: q.opt3 || "",
          opt4: q.opt4 || "",
          queType: q.queType || "MCQ",
          img1: q.img1 || "",
          correctAns: q.correctAns || "",
          PositiveMarks: Number(q.PositiveMarks) || 0,
          negMarks: Number(q.negMarks) || 0,
          Duration: Number(q.Duration) || 0,
          diffLevel: q.diffLevel || "Easy",
        })),
      };
      setExamJson(finalJson);

      // console.log("Final Exam JSON:", finalJson);
    };

    reader.readAsArrayBuffer(file);
  };

  const handleUpload = () => {
    if (!examJson) {
      alert("No file selected or file not processed yet");
      return;
    }

    setUploading(true);

    // Log JSON on upload click
    console.log("Final Exam JSON:", examJson);

    setTimeout(() => {
      setUploading(false);
      alert("Upload successfull");
      navigate(-1);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <input
        type="file"
        ref={fileInputRef}
        accept=".xlsx"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="bg-white p-8 rounded-3xl shadow-xl w-[420px]">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 mb-6"
        >
          <ArrowLeft size={18} /> Back
        </button>

        <h2 className="text-2xl font-bold mb-4">Upload Test File</h2>

        {!selectedFile ? (
          <button
            onClick={() => fileInputRef.current.click()}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
          >
            Choose Excel File
          </button>
        ) : (
          <>
            <p className="text-sm mb-4">
              Selected file: <b>{selectedFile.name}</b>
            </p>

            <div className="flex gap-3">
              <button
                onClick={handleUpload}
                disabled={uploading}
                className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold disabled:opacity-60"
              >
                {uploading ? "Uploading..." : "Upload"}
              </button>

              <button
                onClick={() => setSelectedFile(null)}
                className="flex-1 bg-gray-200 py-3 rounded-xl font-semibold"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadTest;
