// import seriesData from "../../api/seriesData.json";

// const Looping = () => {
//   return (
//     <div>
//       {seriesData.map((pages) => {
//         return(
//         <div key={pages.id}>

//         <div><img src={pages.img_url} alt="" /></div>
// <h2>Name : {pages.name}</h2>
//         </div>
//         )
//       })}
//     </div>
//   )
// }
// export default Looping;

// import seriesData from "../../api/seriesData.json";

// const Looping = ( ) => {
//   return(
//     <div>
// {seriesData.map((pages) => {
//   return(
//     <div key={pages.id}>
// <div><img src={pages.img_url} alt="" /></div>
// <h2>{pages.name}</h2>
// <h3>Rating : {pages.rating}</h3>
// <p>Summary : {pages.description} </p>
// <a href={pages.watch_url}>
//   <button>Watch Now</button>
// </a>
//     </div>
//   )
// })}
//     </div>
//   )
// }

// export default Looping;

import seriesData from "../../api/seriesData.json";

const Looping = () => {
  return (
    <div>
      {seriesData.map((pages) => {
        return (
          <div key={pages.id}>
            <div>
              <img src={pages.img_url} alt="" />
            </div>
            <h2>{pages.name}</h2>
            <h3>Rating : {pages.rating}</h3>
            <p>Summary : {pages.description}</p>
            <p>Cast : {pages.cast}</p>
            <p>Genre : {pages.genre}</p>
            <a href={pages.watch_url}>
              <button>Watch Now</button>
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default Looping;
