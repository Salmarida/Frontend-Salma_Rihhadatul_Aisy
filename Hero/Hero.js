/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import ENDPOINTS from "../../utils/constants/endpoint";
import Button from "../ui/Button";
import StyledHero, { Container } from "./Hero.styled";

function Hero() {
  // Membuat State movie
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;

  /**
   * Mengambil 1 data dari trending movie.
   * Karena data dari trending tidak lengkap.
   * Solusinya: ambil detail movie by id.
   */
  async function getTrendingMovie() {
    const response = await axios(ENDPOINTS.TRENDING);
    return response.data.results[0];
  }

  /**
   * Membuat fungsi getDetailMovie.
   * Mengambil detail movie berdasarkan id
   */
  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovie();
    const id = trendingMovie.id;
    const response = await axios(ENDPOINTS.DETAIL(id));
    setMovie(response.data);
  }

 
  useEffect(getDetailMovie, []);

  return (
    <Container>
      <StyledHero>
        <div className="hero__left">
          <h2>{movie.title}</h2>
          <h3>{genres}</h3>
          <p>{movie.overview}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius varius dui. In ut justo hendrerit,
             auctor nisl ut, mollis augue. Nam ac dui nec lorem pharetra dictum a et lacus. 
             Ut eget risus quis nulla eleifend elementum. Phasellus mollis,
             tortor non laoreet suscipit, quam felis lobortis ligula,
             in placerat lorem massa id eros. Duis euismod non neque et blandit. </p>
          <Button
            as="a"
            href={`https://www.youtube.com/watch?v=${idTrailer}`}
            target="_blank"
          >
            Watch Movie
          </Button>
        </div>
        <div>
          <img
            src={`https://picsum.photos/300/400`}
            alt="placeholder"
          />
        </div>
      </StyledHero>
    </Container>
  );
}


export default Hero;
