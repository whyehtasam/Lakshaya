"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export function ModalBox({ syllabus }) {
  const [openModal, setOpenModal] = useState(false);

  const downloadPDF = () => {
    const input = document.getElementById("syllabus-content");
    const margin = 10; // Define margin size in mm
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
      const pdfHeight = pdf.internal.pageSize.getHeight() - 2 * margin;
      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = pdfWidth;
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
      let heightLeft = imgHeight;
      let position = margin;

      pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight + margin;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save("syllabus.pdf");
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
      <Modal show={openModal} onClose={() => setOpenModal(false)} className="">
        <Modal.Header>Syllabus</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <pre
              id="syllabus-content"
              className="text-base leading-relaxed text-gray-500 dark:text-gray-400 w-full break-words whitespace-pre-wrap "
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