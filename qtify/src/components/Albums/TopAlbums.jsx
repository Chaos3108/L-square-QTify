import React, { useEffect, useState } from "react";
import { Grid, Grid2, Typography } from "@mui/material";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard"; // Import the custom card component

const TopAlbums = ({ topAlbums, newAlbums }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ background: "black" }}>
      <Grid2
        container
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="80%"
        marginLeft={4}
      >
        <Typography
          mb={2}
          mt={2}
          color={"white"}
          variant="h5"
          className="section-title"
        >
          Top Albums
        </Typography>
        <Typography
          mb={4}
          mt={2}
          color={"#34C94B"}
          variant="h5"
          className="section-title"
        >
          Collapse
        </Typography>
      </Grid2>

      <Grid2 container margin={4} spacing={2}>
        {data.map((album) => (
          <Grid2 item xs={12} sm={1} md={1} key={album.id}>
            <AlbumCard data={album} /> {/* Pass each album separately */}
          </Grid2>
        ))}
      </Grid2>

      {/* New Albums Row */}
      <Grid2
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        width={"80%"}
        marginLeft={4}
        sx={{ fontFamily: "Poppins-Medium" }}
      >
        <Typography
          mb={2}
          mt={2}
          color={"white"}
          variant="h5"
          className="section-title"
        >
          New Albums
        </Typography>
        <Typography
          mb={4}
          mt={2}
          color={"#34C94B"}
          variant="h5"
          className="section-title"
        >
          Collapse
        </Typography>
      </Grid2>
      <Grid2
        container
        margin={4}
        display={"flex"}
        alignContent={"center"}
        spacing={2}
      >
        {data.map((album) => (
          <Grid2 item xs={12} sm={6} md={1} key={album.id}>
            <AlbumCard data={album} /> {/* Pass each album separately */}
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default TopAlbums;
