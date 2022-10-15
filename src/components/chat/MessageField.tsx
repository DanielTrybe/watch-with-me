import * as React from "react";

import { Box, TextField, InputAdornment, IconButton } from "@mui/material";

type SendMEssageProps = {
  sendMessage: (message: string) => void;
};

export default function SendMessageField({ sendMessage }: SendMEssageProps) {
  const [message, setMessage] = React.useState("Cat in the Hat");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        fullWidth
        label="Your message Here"
        id="fullWidth"
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="Send Message"
                onClick={() => sendMessage(message)}
              ></IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
