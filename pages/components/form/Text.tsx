import { FormControl, Input } from "@chakra-ui/react";

import { useState } from "react";

export default function Text(props) {
  return (
    <>
      <FormControl isRequired>
        <Input
          placeholder="Question goes brr..."
          className="font-poppins font-medium m-2"
          size="lg"
          variant="flushed"
          onChange={props.onChange}
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
