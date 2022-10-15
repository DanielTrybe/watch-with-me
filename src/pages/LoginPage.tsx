import {
  Grid,
  Typography,
  Box,
  Container,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { useCardsContext } from "hooks";
import { CustomTextField } from "./style";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ChairIcon from "@mui/icons-material/Chair";
import WatchWithMeLogo from "images/logo_watchwithme.png";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  userName: yup.string().required("Por favor, digite um nome"),
  room: yup.string().required("Por favor, escolha ou crie uma nova sala"),
});

interface IFormInputs {
  userName: string;
  avatar: string;
  room: string;
}

function LoginPage() {
  const { setloginUser } = useCardsContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      userName: "",
      avatar: "",
      room: "",
    },
  });

  const onSubmit = (data: IFormInputs) => {
    setloginUser(data);
  };

  return (
    <Grid sx={{ background: "black" }}>
      <Container maxWidth="xl" sx={{ background: "black" }}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <img
            data-testid="header-logo"
            src={WatchWithMeLogo}
            style={{ borderRadius: 5 }}
            width="200px"
            alt="logo"
          />
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <CustomTextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton data-testid="header-btn">
                        <AccountBoxIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                inputProps={{ "data-testid": "header-input" }}
                placeholder="Your name"
                id="outlined-start-adornment"
                sx={{
                  m: 1,
                }}
                value={value}
                onChange={onChange}
                error={errors?.userName ? true : false}
                helperText={
                  errors?.userName && (
                    <span
                      style={{ position: "absolute", backgroundColor: "black" }}
                    >
                      {errors?.userName?.message}
                    </span>
                  )
                }
              />
            )}
            name="userName"
          />

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <CustomTextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton data-testid="header-btn">
                        <ContactPageIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                inputProps={{ "data-testid": "header-input" }}
                placeholder="Your avatar"
                id="outlined-start-adornment"
                sx={{
                  m: 1,
                }}
                value={value}
                onChange={onChange}
              />
            )}
            name="avatar"
          />

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <CustomTextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton data-testid="header-btn">
                        <ChairIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                inputProps={{ "data-testid": "header-input" }}
                placeholder="Room"
                id="outlined-start-adornment"
                sx={{
                  m: 1,
                }}
                value={value}
                onChange={onChange}
                error={errors?.room ? true : false}
                helperText={
                  errors?.room && (
                    <span
                      style={{ position: "absolute", backgroundColor: "black" }}
                    >
                      {errors?.room?.message}
                    </span>
                  )
                }
              />
            )}
            name="room"
          />
          <Button
            sx={{ width: 271, mt: 1 }}
            variant="contained"
            size="medium"
            onClick={handleSubmit(onSubmit)}
          >
            Entrar
          </Button>
        </Grid>
      </Container>
    </Grid>
  );
}

export default LoginPage;
