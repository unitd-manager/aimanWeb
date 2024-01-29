import React from 'react';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

const ImageModal = ({ isOpen, toggle, imageSrc, alt }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
     
      <ModalBody>
        <img src={imageSrc} alt={alt} style={{ width: '100%' }} />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ImageModal;