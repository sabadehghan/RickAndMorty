import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as I18next from "react-i18next";
import NotFoundImage from "../assets/images/404.png";
import { useTheme } from "@emotion/react";

export default function NotFound() {
  const Navigate = useNavigate();
  const theme: any = useTheme();

  const { t } = I18next.useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 1,
        height: "100vh",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box>
          <img src={NotFoundImage} alt="404" width={600} height={400} />
        </Box>
        <Button
          sx={{
            mt: "30px",
            backgroundColor: `${theme.palette.secondary.main}`,
          }}
          onClick={() => Navigate("/")}
          variant="contained"
        >
          {t("BackHome")}
        </Button>
      </Box>
    </Box>
  );
}
