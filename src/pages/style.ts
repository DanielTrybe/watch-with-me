import styled from "styled-components";
import { TextField } from "@mui/material";

export const CustomTextField = styled(TextField)`
  background: white;
  & .MuiInput-underline:after {
    border-bottom-color: purple;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: blue;
      border-radius: 0;
    }
    &.Mui-focused fieldset {
      border-radius: 0;
      border-color: blue;
    }
  }
`;
