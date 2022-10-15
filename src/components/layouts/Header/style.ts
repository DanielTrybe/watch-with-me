import styled from "styled-components";
import { TextField } from "@mui/material";

const useStyles = {
  imgLogo: {
    borderRadius: 5,
    border: "1px solid gray",
  },
  header: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    gap: 10,
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

// const CustomTextField = styled(TextField)`
//   width: 100%;
//   background: "gray";
//   overflow: "visible";

//   "& label.mui-focused": {
//     color: "purple";
//   }
//   "& .muiinput-underline:after": {
//     borderbottomcolor: "purple";
//   }
//   "& .muioutlinedinput-root": {
//     "& fieldset": {
//       bordercolor: "black";
//     }
//     "&:hover fieldset": {
//       bordercolor: "purple";
//     }
//     "&.mui-focused fieldset": {
//       bordercolor: "purple";
//     }
//   }
// `;

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

export { useStyles, CustomTextField };
