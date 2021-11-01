import { RadioGroup, FormLabel, Radio } from "@chakra-ui/react";

export default function Multiple() {
  return (
    <RadioGroup className="flex flex-col my-4 text-xl">
      <FormLabel> Who is ur fav Uwu? </FormLabel>
      <Radio value="1">Harry Potter</Radio>
      <Radio value="2">Ronald</Radio>
      <Radio value="3">Nope</Radio>
    </RadioGroup>
  );
}
