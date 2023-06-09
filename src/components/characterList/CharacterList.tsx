import * as React from "react";
import * as I18next from "react-i18next";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import background from "../../assets/images/background.png";
import Slider from "react-slick";
import { GUERY_CHARACTERS } from "../../graphql/character";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../graphql/apolloClient";
import { actions, selectCharacterList } from "../../redux/slice/characterSlice";
import { useQuery } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";
import NotFound from "../../error/NotFound";
export default function CharacterList() {
  const { t } = I18next.useTranslation();

  /////State//////
  const [openFilterDialog, setOpenFilterDialog] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  const theme: any = useTheme();
  const dispatch: any = useDispatch();
  const characterList: any = useSelector(selectCharacterList);

  /////handler//////

  const handleOpenFilterDialog = () => {
    setOpenFilterDialog(true);
  };

  const handleCloseFilterDialog = () => {
    setOpenFilterDialog(false);
  };

  /////getData
  const query = GUERY_CHARACTERS();

  const getCharacterList = async () => {
    const response = await client.query({
      query: query,
    });

    dispatch(actions.setCharacterList(response.data.characters.results));
  };

  React.useEffect(() => {
    getCharacterList();
  }, []);

  const { loading, error } = useQuery(query);
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: "300px" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return <NotFound />;
  }

  ////Slider/////
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-around", mt: "20px" }}
        >
          <Typography
            sx={{
              fontSize: "50px",
              color: "#FFFFFF",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            {t("RickAndMorty")}
          </Typography>
          <Box sx={{ mt: "13px" }}>
            <OutlinedInput
              sx={{
                width: {
                  xs: "350px",
                  md: "476px",
                },
                height: "58px",
                borderRadius: "30px",
                backgroundColor: `${theme.palette.primary.main}`,
                "& fieldset": { border: "none" },
              }}
              placeholder={"Search"}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon sx={{ fontSize: "25px" }} />
                </InputAdornment>
              }
              onChange={(event: any) => {
                setSearchTerm(event.target.value);
              }}
            />
            <IconButton
              sx={{
                backgroundColor: `${theme.palette.primary.main}`,
                width: "63px",
                height: "60px",
                ml: "10px",
                "&:hover": {
                  backgroundColor: `${theme.palette.primary.main}`,
                },
              }}
              onClick={handleOpenFilterDialog}
            >
              <FilterListIcon sx={{ fontSize: "25px" }} />
            </IconButton>
          </Box>
        </Box>

        <Box>
          <Slider {...settings}>
            {characterList
              ?.filter((character: any) => {
                if (searchTerm === "") {
                  return character;
                } else if (
                  character.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return character;
                }
              })
              ?.map((character: any) => (
                <Box key={character.id}>
                  <Box
                    sx={{
                      border: "3px solid #FFFFFF",
                      borderRadius: "20px",
                      width: "300px",
                      height: "300px",
                      mt: "50px !important",
                      display: "flex",
                      justifyContent: "center",
                      margin: " 0 auto",
                    }}
                  >
                    <img
                      src={character.image}
                      alt={character.name}
                      style={{ objectFit: "cover", borderRadius: "18px" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mt: "10px",
                      textAlign: "justify",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: `${theme.palette.secondary.main}`,
                        width: "250px",
                        height: "50px",
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
                    <Box
                      sx={{
                        backgroundColor: `${theme.palette.secondary.main}`,
                        width: "250px",
                        height: "50px",
                        borderRadius: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: "10px",
                      }}
                    >
                      <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                        {t("Gender")} : {character.gender}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: `${theme.palette.secondary.main}`,
                        width: "250px",
                        height: "50px",
                        borderRadius: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: "10px",
                      }}
                    >
                      <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                        {t("Status")} : {character.status}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: `${theme.palette.secondary.main}`,
                        width: "250px",
                        height: "50px",
                        borderRadius: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: "10px",
                      }}
                    >
                      <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                        {t("Species")} : {character.species}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
          </Slider>
        </Box>
      </Box>

      {/* Dialog For Filter */}
      <FilterDialog open={openFilterDialog} onClose={handleCloseFilterDialog} />
    </>
  );
}
