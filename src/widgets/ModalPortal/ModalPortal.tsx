import React, { FC } from 'react';
import { Modal } from '../Modal/Modal';
import { createPortal } from 'react-dom';

export interface ModalPortalProps {
  visible: boolean;
  header: string;
  children: React.ReactNode;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

export const ModalPortal: FC<ModalPortalProps> = ({ visible, header, children, onClose }) => {
  if (!visible) return null;

  const bodyEl = document.querySelector('body');

  return (
    <div>
      {createPortal(
        <Modal visible={visible} header={header} onClose={onClose}>
          {children}
        </Modal>,
        bodyEl
      )}
    </div>
  );
};
