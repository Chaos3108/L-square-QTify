import React, { useEffect, useState } from "react";
import { Typography, Tabs, Tab } from "@mui/material";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TopAlbums = () => {
  const [data, setData] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");
  //   const gernes = ["All", "Rock", "Pop", "Zazz", "Blues"];

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/top"
        );
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    const getNewAlbums = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/new"
        );
        setNewAlbums(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    const getSongs = async () => {
      setSelectedGenre();
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/songs"
        );
        console.log(response.data);
        setSongs(response.data);
        setFiltered(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    const getGenres = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/genres"
        );
        console.log(response.data.data);
        setGenres([{ key: "All", label: "all" }, ...response.data.data]);
      } catch (e) {
        console.log(e);
      }
    };

    getAlbums();
    getNewAlbums();
    getSongs();
    getGenres();
  }, []);
  console.log(genres);
  const getGenreSongs = (genre) => {
    setSelectedGenre(genre);
    console.log(genre);
    console.log(genre);
    if (genre === "all") {
      setSongs(songs);
      setFiltered(songs);
    } else {
      const filteredSongs = songs.filter((song) => song.genre.label === genre);
      console.log(filteredSongs);
      setFiltered(filteredSongs);
    }
  };

  return (
    <div style={{ background: "black", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <Typography color="white" variant="h5">
          Top Albums
        </Typography>
        <Typography color="#34C94B" variant="h5">
          Show All
        </Typography>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        style={{ padding: "20px" }}
      >
        {data.map((album) => (
          <SwiperSlide key={album.id}>
            <AlbumCard data={album} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "40px auto 20px",
        }}
      >
        <Typography color="white" variant="h5">
          New Albums
        </Typography>
        <Typography color="#34C94B" variant="h5">
          Show All
        </Typography>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        style={{ padding: "20px" }}
      >
        {newAlbums.map((album) => (
          <SwiperSlide key={album.id}>
            <AlbumCard data={album} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div style={{ width: "80%", margin: "40px auto 20px" }}>
        <Typography color="white" variant="h5">
          Songs
        </Typography>
        <Tabs
          value={selectedGenre}
          //   onChange={(e, newValue) => getGenreSongs(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
        >
          {genres.map((genre) => (
            <Tab
              key={genre.key}
              label={genre.label}
              value={genre.key}
              onClick={(e) => getGenreSongs(genre.label)}
              style={{ color: "white" }}
            />
          ))}
        </Tabs>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        style={{ padding: "20px" }}
      >
        {filtered.map((song) => (
          <SwiperSlide key={song.id}>
            <AlbumCard data={song} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopAlbums;
