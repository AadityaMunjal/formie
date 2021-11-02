import { Input, RadioGroup, FormLabel, Radio } from "@chakra-ui/react";

import { useState } from "react";

export default function Multiple() {
  let [opt, setOpt] = useState("");
  let [options, setOptions] = useState([]);

  const addOption = () => {
    setOptions([...options, opt]);
  };
  return (
    <RadioGroup className="flex flex-col my-4 text-xl">
      <FormLabel>
        <Input value="Who is ur fav UwU?" variant="flushed" size="md" />
      </FormLabel>
      <p className="flex flex-row items-center">
        <Input
          variant="flushed"
          size="sm"
          value={opt}
          onChange={(e) => setOpt(e.target.value)}
        />
        <button
          className="mx-4 p-2 bg-purple-600 rounded text-white font-medium focus:ring-4"
          onClick={addOption}
        >
          {" "}
          Add{" "}
        </button>
      </p>
      {/* <Radio value="1">Harry Potter</Radio>
      <Radio value="2">Ronald</Radio>
      <Radio value="3">Nope</Radio> */}

      {options.map((d) => {
        return <Radio value={d} key={d}> {d} </Radio>;
      })}
    </RadioGroup>
  );
}
