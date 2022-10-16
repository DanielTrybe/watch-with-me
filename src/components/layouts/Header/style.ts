import styled from "styled-components";
import { TextField } from "@mui/material";

const useStyles = {
  imgLogo: {
    borderRadius: 5,
    border: "1px solid gray",
  },
  btnNewClient: {
    backgroundColor: "#225F6E",
    borderRadius: 5,
    border: "none",
    fontSize: "15px",
    width: 100,

    padding: 5,
    marginBottom: 3,
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#BEC8CE",
    },
    "&:active": {
      backgroundColor: "#90969A",
    },
    cursor: "pointer",
  },
};

const CustomButton = styled.button`
  background: black;
  border: 1px solid gray;
  color: white;
  cursor: pointer;
  height: 56px;
  border-radius: 50%;
  &:hover {
    background: gray;
  }
`;

const CustomGrid = styled.div`
  display: "flex";

  alignitems: "center";

  width: "100%";
`;

const CustomTextField = styled(TextField)`
  background: white;
  width: 100%;
  & .MuiInput-underline:after {
    border-bottom-color: purple;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: red;
      border-radius: 0;
    }
    &.Mui-focused fieldset {
      border-radius: 0;
      border-color: red;
    }
  }
`;

export { useStyles, CustomTextField, CustomButton, CustomGrid };
