import { FormControl, Input } from "@chakra-ui/react";

export default function Short({ short, dlt }) {
  return (
    <>
      <div className="w-full flex justify-center">
        <button
          className="my-2 mb-4 px-6 py-2 rounded font-medium text-white bg-red-600 focus:ring-2 ring-red-300"
          onClick={dlt}
        >
          Delete
        </button>
      </div>

      <FormControl isRequired>
        <Input
          placeholder="Question goes brr..."
          className="font-poppins font-medium m-2"
          size="lg"
          variant="flushed"
          value={short}
        />

        <Input
          placeholder="Answer goes brr..."
          className="font-poppins font-medium m-2"
          size="md"
          isDisabled
        />
      </FormControl>
    </>
  );
}
