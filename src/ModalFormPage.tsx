import { openFormModal } from './openFormModal';

const ModalFormPage = () => {
  const handleClick = async () => {
    const result = await openFormModal();
    console.log(result);
  };

  return (
    <div>
      ModalFormPage
      <button onClick={handleClick}>Open Modal</button>
    </div>
  );
};

export default ModalFormPage;
