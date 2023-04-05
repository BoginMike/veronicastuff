import React from "react";
import PropTypes from "prop-types";
// import Ratings from "./Ratings"


const SongCard = ({ data }) => {
  return (
    
    <div className="song-card">
      <img className="song-pic" src={data.songPic} alt={data.title} />
      <div className="song-title">{data.title}</div>
      <div className="song-artist">{data.artist}</div>
      <div className="song-rating">{data.rating}</div>
      {/* <div className="song-stars">{Ratings.stars}</div>      */}
    </div>
  );

};

SongCard.propTypes = {
  data: PropTypes.shape({
    songPic: PropTypes.string,
    artist: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number
  })

}

export default SongCard;
