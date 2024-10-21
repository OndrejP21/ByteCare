'use client';

import { InputType } from '@/types/input.types';
/** Formulář pro kontakt */
import { services } from '@/utils/services';
import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [service, setService] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      name,
      email,
      message,
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className='mx-auto max-w-xl space-y-4'>
      <Input
        value={name}
        onChange={setName}
        label='Jméno'
        type='text'
        id='text'
      />

      <Input
        value={email}
        onChange={setEmail}
        label='Email'
        type='email'
        id='email'
      />

      <Input
        value={service}
        onChange={setService}
        label='Vyberte službu'
        type='select'
        values={[...services.map((s) => s.header), 'Jiné']}
        id='service'
      />

      <Input
        value={message}
        onChange={setMessage}
        label='Zpráva'
        type='textarea'
        id='message'
      />

      <div>
        <button
          type='submit'
          className='bg-myGray py-2 px-4 rounded-md hover:bg-myPurple transition duration-500'>
          Odeslat
        </button>
      </div>
    </form>
  );
}

function Input({ value, onChange, label, values, type, id }: InputType) {
  const props = {
    id: id,
    value: value,
    onChange: (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => onChange(e.target.value),
    className:
      'mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-myGreen focus:border-myGreen',
    required: true,
  };

  return (
    <div>
      <label htmlFor={id} className='block'>
        {label}
      </label>
      {values && values.length > 0 ? (
        <select {...props}>
          <option value='' selected disabled>
            Vyberte službu
          </option>
          {values.map((val, index) => (
            <option key={index} value={val}>
              {val}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea {...props} rows={4} />
      ) : (
        <input {...props} />
      )}
    </div>
  );
}
