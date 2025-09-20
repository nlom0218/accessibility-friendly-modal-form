import { createPortal } from 'react-dom';
import { useEffect } from 'react';

type props = {
  onClose?: () => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const FormModal = ({ onClose, onSubmit }: props) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose?.();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget && onClose) {
          onClose();
        }
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          minWidth: '500px',
          maxHeight: '600px',
          overflowY: 'auto',
        }}
      >
        <form
          onSubmit={onSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
        >
          <h1>신청 폼</h1>
          <p>이메일과 FE 경력 연차 등 간단한 정보를 입력해주세요.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <label htmlFor="name">이름/닉네임</label>
            <input type="text" id="name" name="name" required autoFocus />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <label htmlFor="career">FE 경력 연차</label>
            <select id="career" name="career" required>
              <option value="">선택</option>
              <option value="0-1">0-3년</option>
              <option value="1-2">4-7년</option>
              <option value="2-3">8년 이상</option>
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <label htmlFor="link"> GitHub 링크 (선택)</label>
            <input
              type="url"
              id="link"
              name="link"
              placeholder="https://github.com/username"
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <label htmlFor="message">메시지</label>
            <textarea
              id="message"
              name="message"
              rows={10}
              style={{ resize: 'vertical' }}
            />
          </div>
          <button type="button" onClick={onClose}>
            Close
          </button>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>,
    document.body
  );
};
