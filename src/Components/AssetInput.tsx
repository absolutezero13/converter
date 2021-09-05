import "./AssetInput.css";

interface InputData {
  inputData: {
    text: string;
    function: any;
    value: string;
    image: string;
    changeRates: any;
    setChangeRates: any;
  };
}
const AssetInput = ({ inputData }: InputData) => {
  return (
    <div className="input-container" key={inputData.text}>
      <img alt="a" className="image" src={inputData.image} />
      <input
        className="input"
        type="number"
        pattern="\d*"
        value={inputData.value}
        onChange={inputData.function}
        placeholder={inputData.text.toUpperCase()}
      />
    </div>
  );
};

export default AssetInput;
