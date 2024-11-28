"use client"

import { useForm } from "react-hook-form"

type TFormData = {
  name: string
  age: number
}

export function HookForm() {
  const { register, handleSubmit } = useForm<TFormData>()

  const handleSave = (data: TFormData) => {
    console.log(data)
  }

  return (
    <>
      <main className="flex justify-center items-center min-h-screen bg-gray-800">
        <form
          onSubmit={handleSubmit(handleSave, (errors) => console.log(errors))}
          className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <fieldset>
            <legend className="text-xl font-semibold text-gray-800 text-center mb-4">
              Form
            </legend>

            <label className="block mb-4">
              <span className="block text-gray-800 font-semibold">Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                {...register("name")}
              />
              <span className="text-sm text-gray-500">Type your name here</span>
            </label>

            <label className="block mb-4">
              <span className="block text-gray-800 font-semibold">Age</span>
              <input
                type="number"
                placeholder="Enter your age"
                className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                {...register("age")}
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
