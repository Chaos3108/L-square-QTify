import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";

const AlbumCard = ({ data }) => {
  return (
    <>
      <Card
        sx={{
          fontFamily: "Poppins-Medium",
          height: 250,
          maxWidth: 345,
          width: 159,
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={data.image} // Assuming `coverImage` is the album cover URL
          alt={data.title}
        />
        <CardContent>
          <Chip
            style={{
              fontFamily: "Poppins",
              color: "white",
              background: "black",
            }}
            label={`${data.follows} follows`}
          />
        </CardContent>
      </Card>
      <Typography
        mb={2}
        mt={3}
        color={"white"}
        variant="h7"
        className="album-name"
        fontFamily={"Poppins"}
      >
        {data.title}
      </Typography>
    </>
  );
};

export default AlbumCard;
