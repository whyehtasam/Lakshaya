"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import html2pdf from "html2pdf.js";

export function ModalBox({ syllabus,filename }) {
  const [openModal, setOpenModal] = useState(false);
 

  const downloadPDF = () => {
    const element = document.getElementById("syllabus-content");
    const originalClass = element.className;

    // Temporarily remove the scrollable class
    element.className = element.className.replace("h-[65vh] overflow-y-auto", "");

    const opt = {
      margin: 10,
      filename: filename + " syllabus.pdf",
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save().then(() => {
      // Restore the original class
      element.className = originalClass;
    });
  };

  return (
    <>
      <p
        onClick={() => setOpenModal(true)}
        className="hover:text-red-800 p-0 hover:underline cursor-pointer"
      >
        Click here to view & download
      </p>
      <Modal show={openModal} onClose={() => setOpenModal(false)} className="mb-4">
        <Modal.Header>Syllabus</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <pre
              id="syllabus-content"
              className="text-base leading-relaxed text-gray-500 dark:text-gray-400 w-full break-words whitespace-pre-wrap h-[65vh] overflow-y-auto"
            >
              {syllabus}
            </pre>
           
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={downloadPDF}
            className="border border-gray-200 bg-red-800 focus:ring-0 focus:ring-white active:scale-95 duration-200"
          >
            Download
          </Button>
          <Button
            color="gray"
            onClick={() => setOpenModal(false)}
            className="focus:ring-0 focus:ring-white active:scale-95 duration-200"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}