import React, { useEffect, useState } from 'react';
import { Modal, Button, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

type TShowPopup = {
  title?: any;
  name?: any;
  openPopup?: any;
};

const ShowPopup: React.FC<TShowPopup> = ({ title, name, openPopup }) => {
  let a = false;
  console.log(a);
  // const toggle = () => {
  //   openPopup(false);
  // };

  const toggle = () => {
    return (a = false);
  };
  return (
    <Modal isOpen={a} toggle={toggle}>
      <ModalHeader>Modal title</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
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
