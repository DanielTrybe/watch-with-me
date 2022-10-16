import { Grid, Box, InputAdornment, IconButton } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles, CustomTextField, CustomButton, CustomGrid } from "./style";
import WatchWithMeLogo from "images/logo_watchwithme.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { useCardsContext } from "hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuth from "context/AuthContext";
import { useEffect, useState } from "react";

interface IFormInputs {
  searchTerm: string;
}

const schema = yup.object({
  searchTerm: yup
    .string()
    .required("Por favor, insira o link de um video do YouTube válido."),
});

export default function Header() {
  const classes = useStyles;
  const [showLogo, setShowLogo] = useState(true);
  const { getNewVideo } = useCardsContext();
  const { logout } = useAuth();

  const onSubmit = (data: { searchTerm: string }) => {
    getNewVideo(data.searchTerm);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      searchTerm: "",
    },
  });

  useEffect(() => {
    window.onresize = () => {
      const width = window.screen.width < 500 ? true : false;
      setShowLogo(width);
    };
  }, []);

  return (
    <Grid sx={{ display: "flex", alignItems: "center" }}>
      {window.screen.width > 700 && (
        <Box
          sx={{
            width: 123,
          }}
        >
          <img
            data-testid="header-logo"
            src={WatchWithMeLogo}
            style={classes.imgLogo}
            width="123px"
            alt="logo"
          />
        </Box>
      )}

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <CustomTextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    data-testid="header-btn"
                    onClick={handleSubmit(onSubmit)}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            inputProps={{ "data-testid": "header-input" }}
            placeholder="Search a YouTube Video"
            id="outlined-start-adornment"
            sx={{
              m: 1,
            }}
            value={value}
            onChange={onChange}
            error={errors?.searchTerm ? true : false}
            helperText={
              errors?.searchTerm && (
                <span style={{ position: "absolute" }}>
                  {errors?.searchTerm?.message}
                </span>
              )
            }
          />
        )}
        name="searchTerm"
      />
      <CustomButton type="button" onClick={() => logout()}>
        <LogoutIcon />
        sair
      </CustomButton>
    </Grid>
  );
}
