import React, { useState } from "react";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Field, Textarea } from "@headlessui/react";
import clsx from "clsx";

const people = [
  { id: 1, name: "General Inquiry" },
  { id: 2, name: "Support Request" },
  { id: 3, name: "Sales Inquiry" },
  { id: 4, name: "Feedback or Suggestions" },
  { id: 5, name: "Product Customization Request" },
];

function GetInTouch() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState();

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className=" mx-auto py-3 md:flex md:gap-x-7">
      <div className="flex flex-col gap-y-2 md:w-1/3 md:justify-between lg:w-1/2">
        <h2 className="mb-5 text-4xl">Get in Touch</h2>
        <p>Have questions or ready to learn more about how Bug Bug Consulting can transform your pest management? We're here to help.</p>
        <img className="place-self-start ssm:w-2/3 sm:w-1/2 md:w-full" src="Certified.png" alt="" />
      </div>
      <form onSubmit={handleSubmit} className="space-y-5 bg-bugbug-25 p-4 rounded-lg mt-5 md:mt-0 md:w-2/3 lg:w-1/2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            NAME
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-400 w-full py-2 px-4 rounded-lg mt-1 outline-none"
            placeholder="e.g Alex Taylor"
          />
          <p className="text-xs mt-1 text-gray-500">Please provide your name so we know how to address you.</p>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            EMAIL ADDRESS
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-400 w-full py-2 px-4 rounded-lg mt-1 outline-none"
            placeholder="you@example.com"
          />
          <p className="text-xs mt-1 text-gray-500">Enter a valid email address where we can reach you.</p>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            PHONE NUMBER (OPTIONAL)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-400 w-full py-2 px-4 rounded-lg mt-1 outline-none"
            placeholder="+1 234 567 8901"
          />
          <p className="text-xs mt-1 text-gray-500">Include your phone number if you'd like us to call you.</p>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            SUBJECT
          </label>
          <div className="mx-auto mt-1">
            <Combobox value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery("")}>
              <div className="relative">
                <ComboboxInput
                  className={clsx("w-full rounded-lg border bg-white border-gray-400 pr-8 pl-3 py-2 px-4", "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2")}
                  displayValue={(person) => person?.name}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Select a subject"
                />
                <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L7.70711 6.29289C7.31658 6.68342 6.68342 6.68342 6.29289 6.29289L1 1" stroke="#375845" stroke-linecap="round" />
                  </svg>
                </ComboboxButton>
              </div>

              <ComboboxOptions
                anchor="bottom"
                transition
                className={clsx(
                  "w-[var(--input-width)] rounded-xl border-gray-400 border p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
                  "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 bg-white mt-2"
                )}
              >
                {filteredPeople.map((person) => (
                  <ComboboxOption key={person.id} value={person} className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-bugbug-400 hover:text-white">
                    <div className="">{person.name}</div>
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            </Combobox>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            MESSAGE
          </label>
          <div className="mt-1">
            <Field>
              <Textarea
                className={clsx("block w-full resize-none rounded-lg border border-gray-400 py-1.5 px-3", "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2")}
                rows={4}
                placeholder="Type your message here..."
              />
            </Field>
          </div>
          <p className="text-xs mt-1 text-gray-500">Share details about your request, question, or feedback.</p>
        </div>
        <div>
          <button type="submit" className="w-full bg-bugbug-600 text-white py-3 px-5 rounded-md hover:bg-bugbug-700 focus:outline-none focus:ring focus:ring-bugbug-150">
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
}

export { GetInTouch };
