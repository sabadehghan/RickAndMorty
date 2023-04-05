import * as React from "react";
import {
  Box,
  Typography,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useTheme } from "@emotion/react";
import FilterDialog from "../filterDialog/FilterDialog";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import { Character } from "../../constants/GlobalTypes";
import background from "../../assets/images/background.png";
const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
        species
        gender
        status
      }
    }
  }
`;

export default function CharacterList() {
  const theme: any = useTheme();

  /////State//////
  const [openFilterDialog, setOpenFilterDialog] = React.useState(false);

  /////getData
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  if (error) {
    return <p>Error :</p>;
  } else if (loading) {
    return <p>Loading ...</p>;
  }
  const characters: Character[] = data.characters.results;

  /////handler//////

  const handleOpenFilterDialog = () => {
    setOpenFilterDialog(true);
  };

  const handleCloseFilterDialog = () => {
    setOpenFilterDialog(false);
  };

  return (
    <>
      <Box sx={{ backgroundImage: `url(${background})` }}>
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

        <Grid container spacing={6}>
          {characters.map((character) => (
            <Grid item xs={6} sm={4} md={3} key={character.id}>
              <Box
                sx={{
                  border: "3px solid black",
                  borderRadius: "20px",
                  width: "300px",
                  height: "302px",
                  mt: "60px",
                }}
              >
                <img
                  src={character.image}
                  alt={character.name}
                  style={{ objectFit: "cover", borderRadius: "20px" }}
                />
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "center", mt: "10px" }}
              >
                <Box
                  sx={{
                    backgroundColor: `${theme.palette.secondary.main}`,
                    width: "200px",
                    height: "60px",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                    {character.name}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Dialog For Filter */}
      <FilterDialog open={openFilterDialog} onClose={handleCloseFilterDialog} />
    </>
  );
}
