import { Input, FormLabel } from "@chakra-ui/react";

export default function Heading({  heading, desc, setHeading, setDesc }) {
  return (
    <>
      <div className="m-6 w-6/12 px-8 py-6 bg-white rounded">
   
        <Input
          placeholder="Heading goes brr..."
          size="xl"
          className="m-2 font-poppins font-medium text-3xl"
          variant="flushed"
          onChange={setHeading}
          value={heading}
          isRequired
        />

        <Input
          placeholder="Description goes brr..."
          className="m-2 font-poppins font-medium"
          variant="flushed"
          size="lg"
          onChange={setDesc}
          value={desc}
          isRequired
        />
      </div>
    </>
  );
}
