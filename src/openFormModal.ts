import React from 'react';
import { createRoot } from 'react-dom/client';
import { FormModal } from './FormModal';

type FormData = {
  name: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  career: FormDataEntryValue | null;
  link: FormDataEntryValue | null;
  message: FormDataEntryValue | null;
};

export const openFormModal = (): Promise<FormData | null> => {
  return new Promise((resolve) => {
    const modal = document.createElement('div');
    const root = createRoot(modal);

    const handleClose = () => {
      root.unmount();
      resolve(null);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const data: FormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        career: formData.get('career'),
        link: formData.get('link'),
        message: formData.get('message'),
      };

      root.unmount();
      resolve(data);
    };

    root.render(
      React.createElement(FormModal, {
        onClose: handleClose,
        onSubmit: handleSubmit,
      })
    );
  });
};
