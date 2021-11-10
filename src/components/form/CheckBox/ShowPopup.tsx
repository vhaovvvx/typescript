import React, { useEffect, useState } from 'react';
import { Modal, Button, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

type TShowPopup = {
  title?: any;
  name?: any;
  openPopup?: any;
};

const ShowPopup: React.FC<TShowPopup> = ({ title, name, openPopup }) => {
  console.log(openPopup);
  // let a = false;
  // console.log(a);
  const toggle = () => openPopup(false);
  // const toggle = () => {
  //   return (a = false);
  // };

  return (
    <Modal
      isOpen={true}
      toggle={toggle}
      // ariabelledby='contained-modal-title-vcenter'
      // size='lg'
      centered={true}
    >
      <ModalHeader>Modal title</ModalHeader>
      <ModalBody>
        <div>Đã nhập đủ đâu mà cứ đòi submit thôi ?</div>
      </ModalBody>
      <ModalFooter>
        <Button color='primary' onClick={toggle}>
          Do Something
        </Button>
        <Button onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ShowPopup;
