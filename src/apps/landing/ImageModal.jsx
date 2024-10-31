import img from "../../assets/result.jpg";

// import img from '../../assets/TeachersHero.jpg'
import { Modal } from "flowbite-react";
import Slider from "../../components/carousels/Slider";

import { useState, useEffect } from "react";
const ImageModal = ({ show, onClose, imageSrc }) => {
  const [posters, setPosters] = useState([]);
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const fetchPopups = async () => {
    try {
      const response = await fetch(`${backend_url}/api/popup/get`);
      const data = await response.json();
      setPosters(data);
    } catch (error) {
      console.error("Failed to fetch popups", error);
      // toast.error("Failed to fetch popups. Please try again.");
    }
  };

  useEffect(() => {
    fetchPopups();
  }, []);

  return (
    <Modal
      dismissible
      show={show}
      onClose={onClose}
      position="center"
      className="bg-black/60 modal-box pt-28 sm:pt-20 overflow-hidden"
    >
      <Modal.Header className="">Latest Announcement 🔔🎊🎉</Modal.Header>
      <Modal.Body className="p-1 sm:p-4">
        <div className="w-full h-full">
          <Slider className="w-full h-[30rem] sm:h-96">
            {posters.length > 0 ? (
              posters.map(({ image_url }, index) => (
                <img
                  key={index}
                  src={image_url}
                  alt={`Announcement ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              ))
            ) : (
              <div>No announcements available</div>
            )}
          </Slider>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
