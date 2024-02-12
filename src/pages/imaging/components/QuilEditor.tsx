import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const QuilEditor = ({ updateQuillData }: any) => {
  const { quill, quillRef } = useQuill();
  const [formData, setFormData] = useState("");

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setFormData(quill.root.innerHTML);
      });
    }
  }, [quill]);

  updateQuillData(formData);

  return (
    <div style={{ width: "100%", height: "auto" }} className="pb-10">
      <div ref={quillRef} />
    </div>
  );
};

export default QuilEditor;
