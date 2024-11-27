"use client"
import { FormEvent, useState } from "react"

export function HookForm() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  const handleSave = (e: FormEvent) => {
    e.preventDefault()

    console.log({ name, age })
  }

  return (
    <>
      <main className="flex justify-center items-center min-h-screen bg-gray-800">
        <form
          onSubmit={handleSave}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <fieldset>
            <legend className="text-xl font-semibold text-gray-400 text-center mb-4">
              Form
            </legend>

            <label className="block mb-4">
              <span className="block text-gray-400 font-semibold">Name</span>
              <input
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-500">Type your name here</span>
            </label>

            <label className="block mb-4">
              <span className="block text-gray-400 font-semibold">Age</span>
              <input
                type="number"
                value={age}
                placeholder="Enter your age"
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-500">Type your age here</span>
            </label>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </main>
    </>
  )
}
