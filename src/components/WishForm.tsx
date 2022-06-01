import { Button, Input, MenuItem, Select, Switch } from "@mui/material";
import { FC, FormEvent, useState } from "react";
import { createWish } from "../services/wishes";

export const WishForm: FC = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [isPossible, setIsPossible] = useState(true);
  const [priority, setPriority] = useState<1 | 2 | 3>(1);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createWish({
      name,
      type,
      isPossible,
      priority,
    });
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Wish Name"
      />
      <br />
      <Input
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Wish Type"
      />
      <br />
      <Select
        value={priority}
        onChange={(e) => setPriority(e.target.value as 1 | 2 | 3)}
      >
        <MenuItem value={1}>{1}</MenuItem>
        <MenuItem value={2}>{2}</MenuItem>
        <MenuItem value={3}>{3}</MenuItem>
      </Select>
      <Switch
        checked={isPossible}
        onChange={() => setIsPossible(!isPossible)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
