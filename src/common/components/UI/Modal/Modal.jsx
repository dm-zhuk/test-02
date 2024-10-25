import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import { Close } from 'components/Icons';

export const Modal = forwardRef(function Modal({ children }, ref) {
  const modalRef = useRef();
  const [isModal, setIsModal] = useState(false);

  useImperativeHandle(ref, () => ({
    open() {
      setIsModal(true);
      document.addEventListener('keydown', handleKeyDown);
    },
    close() {
      setIsModal(false);
      document.removeEventListener('keydown', handleKeyDown);
    },
  }));

  const handleOverlayClick = e => {
    if (e.target === modalRef.current) {
      ref.current.close();
    }
  };

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        ref.current.close();
      }
    },
    [ref]
  );

  const handleClose = () => {
    ref.current.close();
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
    <>
      {isModal && (
        <div
          ref={modalRef}
          className={styles.modalOverlay}
          onClick={handleOverlayClick}
        >
          <div className={styles.modalContent}>
            <button className={styles.button} onClick={handleClose}>
              <Close />
            </button>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById('modal-root')
  );
});
