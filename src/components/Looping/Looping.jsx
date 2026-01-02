import seriesData from "../../api/seriesData.json";

const Looping = () => {
  return (
    <>
      <div>
        <div>
          <img src={seriesData[0].img_url} alt="" width="500pvw" />
        </div>
        <h2>Name : {seriesData[0].name}</h2>
        <h3> Rating : {seriesData[0].rating}</h3>
        <p>Description : {seriesData[0].description}</p>
        <p>Cast : {seriesData[0].cast}</p>
        <p>Genre : {seriesData[0].genre}</p>
      <a href={seriesData[0].watch_url}>
        <button>Watch Now</button>
      </a>
      </div>
    </>
  );
};

export default Looping;
