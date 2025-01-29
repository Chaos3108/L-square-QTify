import React from "react";
import { Card, CardContent, CardMedia, Typography ,Chip} from "@mui/material";

const AlbumCard = ({ data }) => {
  return (
    <Card sx={{ fontFamily:'Poppins-Medium', height: 250, maxWidth: 345 ,width:159 }}>
      <CardMedia
        component="img"
        height="140"
        image={data.image} // Assuming `coverImage` is the album cover URL
        alt={data.title}
      />
      <CardContent>
        <Typography style={{fontFamily:'Poppins'}} variant="h6" component="div">
          {data.title} {/* Album Title */}
        </Typography>
        <Chip style={{fontFamily:'Poppins'}} label={`${data.follows} follows`} />
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
