import * as React from "react";
import * as I18next from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { GUERY_CHARACTERS } from "../../graphql/character";
import { client } from "../../graphql/apolloClient";
import { actions } from "../../redux/slice/characterSlice";
import { useDispatch } from "react-redux";

export default function FilterDialog(props: any) {
  const { t } = I18next.useTranslation();

  const theme: any = useTheme();
  const dispatch: any = useDispatch();

  /////States//////

  const [filter, setFilter] = React.useState({
    gender: "",
    status: "",
    species: "",
  });

  /////Handler/////

  const IHandleChange = (event: any) => {
    setFilter({
      ...filter,
      [event.target.name]: (event.target as any).value,
    });
  };

  const IHandleFilter = async () => {
    const query = GUERY_CHARACTERS(
      filter.gender,
      filter.status,
      filter.species
    );
    const response = await client.query({
      query: query,
    });

    props.onClose();

    dispatch(actions.setCharacterList(response.data.characters.results));
  };
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        sx={{ borderRadius: "40px" }}
      >
        <DialogTitle sx={{ direction: "rtl" }}>
          <CloseIcon onClick={props.onClose} />
        </DialogTitle>
        <DialogContent sx={{ width: "550px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ width: "100%" }}>
              <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
                {t("Gender")}
              </Typography>
              <FormControl
                sx={{
                  width: "95%",
                  height: "55px",

                  borderRadius: "15px",
                  "& fieldset": { border: "none" },
                }}
              >
                <Select
                  sx={{
                    borderRadius: "15px",
                    backgroundColor: `${theme.palette.primary.main}`,
                    height: "48px",
                  }}
                  displayEmpty
                  value={filter.gender}
                  onChange={IHandleChange}
                  name="gender"
                >
                  <MenuItem value="">{t("None")}</MenuItem>
                  <MenuItem value="male">{t("Male")}</MenuItem>
                  <MenuItem value="female">{t("Female")}</MenuItem>
                  <MenuItem value="unknown">{t("Unknown")}</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
                {t("Status")}
              </Typography>

              <FormControl
                sx={{
                  width: "95%",
                  height: "55px",
                  borderRadius: "15px",

                  "& fieldset": { border: "none" },
                }}
              >
                <Select
                  sx={{
                    borderRadius: "15px",
                    backgroundColor: `${theme.palette.primary.main}`,
                    height: "48px",
                  }}
                  displayEmpty
                  value={filter.status}
                  onChange={IHandleChange}
                  name="status"
                >
                  <MenuItem value="">{t("None")}</MenuItem>
                  <MenuItem value="alive">{t("Alive")}</MenuItem>
                  <MenuItem value="dead">{t("Dead")}</MenuItem>
                  <MenuItem value="unknown">{t("Unknown")}</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
                {t("Species")}
              </Typography>

              <FormControl
                sx={{
                  width: "95%",
                  height: "55px",
                  borderRadius: "15px",

                  "& fieldset": { border: "none" },
                }}
              >
                <Select
                  sx={{
                    borderRadius: "15px",
                    backgroundColor: `${theme.palette.primary.main}`,
                    height: "48px",
                  }}
                  displayEmpty
                  value={filter.species}
                  onChange={IHandleChange}
                  name="species"
                >
                  <MenuItem value="">{t("None")}</MenuItem>
                  <MenuItem value="human">{t("Human")}</MenuItem>
                  <MenuItem value="alien">{t("Alien")}</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", my: "30px" }}>
            <Button
              sx={{
                width: "210px",
                height: "50px",
                backgroundColor: `${theme.palette.secondary.main}`,
                color: "black",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: `${theme.palette.secondary.main}`,
                },
              }}
              onClick={IHandleFilter}
            >
              {t("Filter")}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
