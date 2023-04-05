import * as React from "react";
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

export default function FilterDialog(props: any) {
  const theme: any = useTheme();
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        sx={{ borderRadius: "40px" }}
      >
        <DialogTitle sx={{direction: "rtl"}}>
          <CloseIcon onClick={props.onClose} />
        </DialogTitle>
        <DialogContent sx={{ width: "550px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{width: "100%"}}>
              <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
                Gender
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
                >
                  <MenuItem></MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{width: "100%"}}>
              <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
                Status
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
                >
                  <MenuItem></MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{width: "100%"}}>
              <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
                Species
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
                >
                  <MenuItem></MenuItem>
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
              }}
            >
              Filter
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
