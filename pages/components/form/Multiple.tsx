import { Input, RadioGroup, FormLabel, Radio } from "@chakra-ui/react";

import { useState } from "react";

export default function Multiple({ onChange }) {
  let [opt, setOpt] = useState("");
  let [options, setOptions] = useState([]);

  const addOptions = () => {
    setOptions([...options, opt]);
  };

  return (
    <RadioGroup className="flex flex-col my-4 text-xl">
      <FormLabel>
        <Input
          variant="flushed"
          size="lg"
          placeholder="Question goes brr..."
          onChange={onChange}
        />
      </FormLabel>
      <p className="flex flex-row items-center">
        <Input
          variant="flushed"
          size="sm"
          onChange={(e) => setOpt(e.target.value)}
          placeholder="Add an option"
        />
        <button
          className="mx-4 p-2 bg-purple-600 rounded text-white font-medium focus:ring-4"
          onClick={addOptions}
        >
          {" "}
          Add{" "}
        </button>
      </p>

      {options.map((d) => {
        return (
          <Radio value={d} key={d}>
            {" "}
            {d}{" "}
          </Radio>
        );
      })}
    </RadioGroup>
  );
}
