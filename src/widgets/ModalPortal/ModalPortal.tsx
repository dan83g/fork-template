import React from 'react';
import Modal from '../Modal/Modal';
import { createPortal } from 'react-dom';

interface ModalPortalProps {
  visible: boolean;
  children: React.ReactNode;
}

const ModalPortal = ({ visible, children }: ModalPortalProps) => {
  if (!visible) return null;

  const bodyEl = document.querySelector('body');

  return <div>{createPortal(<Modal visible={visible}>{children}</Modal>, bodyEl)}</div>;
};

export default ModalPortal;
