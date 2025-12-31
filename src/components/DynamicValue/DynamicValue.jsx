const DynamicValue = () => {
  return (
    <>
      <Card />
      <Card/>
      <Card/>
    </>
  );
};

const Card = () => {
  return (
    <div>
      <div>
        <img src="images/camera.png" alt="camera" />
        <h2>Hello Welcome to my Website</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facilis tempore alias pariatur aspernatur saepe?</p>
      </div>
    </div>
  );
};

export default DynamicValue;
