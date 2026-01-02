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
      </div>
    </>
  );
};

export default Looping;
