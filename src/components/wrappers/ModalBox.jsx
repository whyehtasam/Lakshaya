"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function ModalBox({ syllabus }) {
  const [openModal, setOpenModal] = useState(false);

  const downloadHTML = (syllabus) => {
    const element = document.createElement("a");
    const file = new Blob(
      [
        `<html>
          <head>
            <title>Syllabus</title>
            <style>
              body { font-family: Arial, sans-serif; }
              pre { white-space: pre-wrap; word-wrap: break-word; }
            </style>
          </head>
          <body>
            <pre>${syllabus}</pre>
          </body>
        </html>`,
      ],
      { type: "text/html" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "syllabus.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
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
            <pre className="text-base leading-relaxed text-gray-500 dark:text-gray-400 w-full break-words whitespace-pre-wrap ">
              {syllabus}
            </pre>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => downloadHTML(syllabus)}
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