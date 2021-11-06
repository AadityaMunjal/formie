import { FormControl, Input } from "@chakra-ui/react";

export default function Short({ short, setShort }) {
  return (
    <>
      <FormControl isRequired>
        <Input
          placeholder="Question goes brr..."
          className="font-poppins font-medium m-2"
          size="lg"
          variant="flushed"
          onChange={setShort}
          value={short}
        />

        <Input
          placeholder="Answer goes brr.."
          className="font-poppins font-medium m-2"
          size="md"
        />
      </FormControl>
    </>
  );
}
