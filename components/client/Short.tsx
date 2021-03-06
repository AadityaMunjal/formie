import { Input } from "@chakra-ui/react";

export default function Short({ question, onChange }) {
  return (
    <div>
      <p>{question}</p>
      <Input
        placeholder="Your answer here..."
        // value={value}
        onChange={onChange}
      />
    </div>
  );
}
