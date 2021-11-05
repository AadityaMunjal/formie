import { FormControl, Input } from "@chakra-ui/react";

export default function Text() {
  return (
    <>
      <FormControl isRequired>
        <Input
          placeholder="Question goes brr..."
          className="font-poppins font-medium m-2"
          size="lg"
          variant="flushed"
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
