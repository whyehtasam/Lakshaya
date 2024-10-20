import img from '../../assets/result.jpg'
// import img from '../../assets/TeachersHero.jpg'
import { Modal } from 'flowbite-react';

const ImageModal = ({ show, onClose, imageSrc }) => {
  return (
    
    <Modal dismissible show={show} onClose={onClose} position='center' className='bg-black/60 modal-box pt-28 sm:pt-20 overflow-hidden '>
      <Modal.Header className=''>
        Latest Announcement 🔔🎊🎉
      </Modal.Header>
      <Modal.Body className='p-1 sm:p-4 overflow-hidden'>
        <div className="flex justify-center items-center  overflow-hidden">
          <img src={img} alt="Modal content" className="w-full max-h-[65vh] object-contain  rounded-br-lg rounded-bl-lg sm:rounded-none" />
        </div>
        
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;