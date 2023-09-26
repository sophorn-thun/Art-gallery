import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts } from '@fortawesome/free-solid-svg-icons';

import styles from './CheerModal.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function CheerModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;
  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal']}>
        <h1>Awesome, you got it right!</h1>
        <div className={styles['gift-icon']}>
          <FontAwesomeIcon icon={faGifts} />
        </div>
        <button onClick={onClose} className={styles['close-button']}>
          Enough cheer 🙄{' '}
        </button>
      </div>
    </div>
  );
}

export default CheerModal;
