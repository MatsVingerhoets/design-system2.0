import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/react';
import { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import Card from '../../components/Card/Card';

const ClientCard = () => {
  const clientOptions = [
    { email: "Please select something", id: null },
    { email: "user1@example.com", id: "550e8400-e29b-41d4-a716-446655440000" },
    { email: "user2@example.com", id: "6f9619ff-8b86-d011-b42d-00cf4fc964ff" },
    { email: "user3@example.com", id: "123e4567-e89b-12d3-a456-426614174000" },
    { email: "user4@example.com", id: "9f4c2cfe-2f97-11ee-be56-0242ac120002" },
    { email: "user5@example.com", id: "7c0a3ebc-7a4f-4d1b-9c2c-0f6a0839e999" },
    { email: "user6@example.com", id: "edfd8e9e-768c-11ee-b962-0242ac120002" },
    { email: "user7@example.com", id: "d3486ae9-136b-4d4f-8af8-2a3c734de663" },
    { email: "user8@example.com", id: "46b9b9e5-96a7-4d61-bf09-fb9a2237f8cb" },
    { email: "user9@example.com", id: "c9b1d1e3-748f-4e60-bf73-dfdf832a3121" },
    { email: "user10@example.com", id: "d1a412cc-9e6b-41f8-ae8f-ec761e3a64cf" },
  ];
  const [client, setClient] = useState<{ email: string, id: "string" } | null>(null)
  return (
    <Card className="mb-6" title="Dit is een titel">
      <Listbox value={client} onChange={setClient}>
        <ListboxButton aria-label="listbox-button" className="cursor-pointer flex justify-between items-center text-black px-2 py-1 border border-gray-300 rounded-lg">
          <span className="mr-1">{client?.email || "please select something"}</span>
          <MdExpandMore size={16} />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className="bg-white border border-gray-300 w-[var(--button-width)] border-t-0" >
          {clientOptions.map((client) => (
            <ListboxOption
              aria-label={client.email}
              key={client.id}
              value={client}
              className="text-black data-[focus]:bg-gray-100 p-2 text-sm cursor-pointer"
            >
              {client.email}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
      {
        client?.id && (
          <div className='border border-gray-300 p-4'>
            <p aria-label='email' className='text-black'>{client.email}</p>
            <p aria-label='id' className='text-black'>{client.id}</p>
          </div>
        )
      }
    </Card >
  );
};

export default ClientCard;
