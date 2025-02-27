import React from 'react';
import { useForm } from 'react-hook-form';
import { createEvent } from '../services/api';

const AddEventForm = ({ onEventAdded }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await createEvent(data);
    onEventAdded();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title')} placeholder="Titre" required />
      <textarea {...register('content')} placeholder="Contenu" required />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddEventForm;
