import { useState } from 'react';

export const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const NameChange = event => {
    const { value } = event.currentTarget;
    setName(value);
  };

  const NumberChange = event => {
    const { value } = event.currentTarget;
    setNumber(value);
  };

  const formSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    handleSubmit({ name, number });
    form.reset();
  };

  return (
    <form onSubmit={formSubmit}>
      <label>Name </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        value={name}
        onChange={NameChange}
      />
      <label>Number </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        value={number}
        onChange={NumberChange}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
