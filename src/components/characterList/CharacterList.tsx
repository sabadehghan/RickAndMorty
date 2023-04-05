import * as React from "react";
import {
  Box,
  Typography,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useTheme } from "@emotion/react";
import FilterDialog from "../filterDialog/FilterDialog";

export default function CharacterList() {
  const theme: any = useTheme();

  
  /////State//////
  const [openFilterDialog, setOpenFilterDialog] = React.useState(false);

  /////handler//////

  const handleOpenFilterDialog = () => {
    setOpenFilterDialog(true);
  };

  const handleCloseFilterDialog = () => {
    setOpenFilterDialog(false);
  };

  return (
    <>
      <Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-around", mt: "30px" }}
        >
          <Typography sx={{ fontSize: "50px" }}>Rick and Morty</Typography>
          <Box sx={{ mt: "13px" }}>
            <OutlinedInput
              sx={{
                width: "476px",
                height: "58px",
                borderRadius: "30px",
                backgroundColor: `${theme.palette.primary.main}`,
                "& fieldset": { border: "none" },
              }}
              placeholder="Search"
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon sx={{ fontSize: "25px" }} />
                </InputAdornment>
              }
            />
            <IconButton
              sx={{
                backgroundColor: `${theme.palette.primary.main}`,
                width: "63px",
                height: "60px",
                ml: "10px",
              }}
              onClick={handleOpenFilterDialog}
            >
              <FilterListIcon sx={{ fontSize: "25px" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Dialog For Filter */}
      <FilterDialog open={openFilterDialog} onClose={handleCloseFilterDialog} />
    </>
  );
}
