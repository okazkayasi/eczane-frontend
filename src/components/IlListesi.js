import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import centers from "./cityCenters";
const IlListesi = ({ citydata }) => {
  // eslint-disable-next-line no-unused-vars
  const [mapRef, _setMapRef] = React.useState();
  const handleChangeCity = (city) => {
    const lat = centers[city]?.lat;
    const lng = centers[city]?.lng;
    mapRef.flyTo([lat, lng], 12);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        marginTop: "30px",
        height: "500px",
        overflow: "auto",
        textAlign: "center",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
      >
        {citydata?.data.map((city, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Button
              onClick={() => handleChangeCity(city.key)}
              sx={{
                color: "white",
                border: "solid 0.5px",
                height: "50px",
                width: "150px",
              }}
              variant="outlined"
            >
              <span
                style={{
                  display: "block",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >{`${city.key}`}</span>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default IlListesi;
