const DynamicValue = () => {
  return (
    <>
      <Card />
      <Card />
      <Card />
    </>
  );
};

const Card = () => {
  const name = "ClarityCam";
  const price = 2499;
  const summary =
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi";
  const returnType = () => {
    const type = "Classic";
    return type;
  };

  return (
    <>
      <div>
        <h2>Name : {name}</h2>
        <h3>Price : {price + 20}</h3>
        <h3>Type : {returnType()}</h3>
        <p> Summary : {summary}</p>
      </div>
      <img src="images/camera.png" alt="camera" />
    </>
  );
};

export default DynamicValue;
