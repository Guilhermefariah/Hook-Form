"use client";
import { FormEvent, useState } from "react";

export function HookForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    console.log({ name, age });
  };

  return (
    <>
      <form onSubmit={handleSave}>
        <fieldset>
          <legend>Fill the form</legend>
          <label>
            <span>Name</span>
            <br />
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <legend>Type the name here</legend>
          </label>

          <br />
          <br />

          <label>
            <span>Age</span>
            <br />

            <input
              type="number"
              value={age}
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <span>Type the age here</span>
          </label>

          <br />
          <br />
          <br />

          <button>Submit</button>
        </fieldset>
      </form>
    </>
  );
}
