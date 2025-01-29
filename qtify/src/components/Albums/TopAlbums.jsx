import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TopAlbums = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);


  const getData = async () => {
    try {
      const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  const getNewAlbums = async () => {
    try {
      const response = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
      setNewData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
    getNewAlbums();
  }, []);

  return (
    <div style={{ background: "black", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", width: "80%", margin: "0 auto" }}>
        <Typography fontFamily={"Poppins"} color="white" variant="h5">Top Albums</Typography>
        <Typography fontFamily={"Poppins"} color="#34C94B" variant="h5">Show All</Typography>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={1}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
        style={{ padding: "10px" }}
      >
        {data.map((album) => (
          <SwiperSlide key={album.id}>
            <AlbumCard data={album} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div style={{ display: "flex", justifyContent: "space-between", width: "90%", margin: "40px auto 20px" }}>
        <Typography fontFamily={"Poppins"} color="white" variant="h5">New Albums</Typography>
        <Typography fontFamily={"Poppins"} color="#34C94B" variant="h5">Show All</Typography>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={5}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
        style={{ padding: "20px" }}
      >
        {newData.map((album) => (
          <SwiperSlide key={album.id}>
            <AlbumCard data={album} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopAlbums;
