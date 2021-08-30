import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import tryImg from "./assets/tryImg.png";
import ethImg from "./assets/ethImg.png";
import btcImg from "./assets/btcImg.png";
import eurImg from "./assets/eurImg.png";
import usdImage from "./assets/usdImage.png";
import gbpImg from "./assets/gbpImg.png";
import GitHubIcon from "@material-ui/icons/GitHub";

type changeEvent = React.ChangeEvent<HTMLInputElement>;

function App() {
  const [tryValue, setTryValue] = useState("");
  const [eurValue, setEurValue] = useState("");
  const [ethValue, setEthValue] = useState("");
  const [usdValue, setUsdValue] = useState("");
  const [btcValue, setBtcValue] = useState("");
  const [gbpValue, setGbpValue] = useState("");

  const [tryChangeRates, setTryChangeRates] = useState<any>();
  const [usdChangeRates, setUsdChangeRates] = useState<any>();
  const [eurChangeRates, setEurChangeRates] = useState<any>();
  const [gbpChangeRates, setGbpChangeRates] = useState<any>();
  const [ethChangeRates, setEthChangeRates] = useState<any>();
  const [btcChangeRates, setBtcChangeRates] = useState<any>();

  // useEffect(() => {
  //   fetch("https://api.graphql.jobs/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       query: `query {
  //         jobs {
  //           title
  //         }
  //       }
  //       `,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  useEffect(() => {
    fetch("https://api.exchangerate.host/latest?base=USD")
      .then((res) => res.json())
      .then((data) => console.log(data.rates.TRY));
  }, []);

  useEffect(() => {
    inputData.forEach((input) => {
      fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${input.text}.json`
      )
        .then((res) => res.json())
        .then((resp) => {
          input.setChangeRates(resp[input.text]);
        });
    });
  }, []);

  useEffect(() => {}, []);

  const inputData = [
    {
      text: "try",
      function: (e: changeEvent) => {
        const value = e.target.value;

        setTryValue(value);

        if (value === "") {
          setGbpValue("");
          setEurValue("");
          setBtcValue("");
          setUsdValue("");
          setEthValue("");
        } else {
          setGbpValue((+value * tryChangeRates.gbp).toString());
          setEurValue((+value * tryChangeRates.eur).toString());
          setBtcValue((+value * tryChangeRates.btc).toString());
          setUsdValue((+value * tryChangeRates.usd).toString());
          setEthValue((+value * tryChangeRates.eth).toString());
        }
      },
      value: tryValue,
      image: tryImg,
      changeRates: tryChangeRates,
      setChangeRates: setTryChangeRates,
    },
    {
      text: "usd",
      function: (e: changeEvent) => {
        const value = e.target.value;
        setUsdValue(value);

        if (value === "") {
          setGbpValue("");
          setEurValue("");
          setBtcValue("");
          setTryValue("");
          setEthValue("");
        } else {
          setGbpValue((+value * usdChangeRates.gbp).toString());
          setEurValue((+value * usdChangeRates.eur).toString());
          setBtcValue((+value * usdChangeRates.btc).toString());
          setTryValue((+value * usdChangeRates.try).toString());
          setEthValue((+value * usdChangeRates.eth).toString());
        }
      },
      value: usdValue,
      image: usdImage,
      changeRates: usdChangeRates,
      setChangeRates: setUsdChangeRates,
    },
    {
      text: "eur",
      function: (e: changeEvent) => {
        const value = e.target.value;
        setEurValue(value);

        if (value === "") {
          setGbpValue("");
          setUsdValue("");
          setBtcValue("");
          setTryValue("");
          setEthValue("");
        } else {
          setGbpValue((+value * eurChangeRates.gbp).toString());
          setUsdValue((+value * eurChangeRates.usd).toString());
          setBtcValue((+value * eurChangeRates.btc).toString());
          setTryValue((+value * eurChangeRates.try).toString());
          setEthValue((+value * eurChangeRates.eth).toString());
        }
      },
      value: eurValue,
      image: eurImg,
      changeRates: eurChangeRates,
      setChangeRates: setEurChangeRates,
    },

    {
      text: "gbp",
      function: (e: changeEvent) => {
        const value = e.target.value;
        setGbpValue(value);

        if (value === "") {
          setEurValue("");
          setUsdValue("");
          setBtcValue("");
          setTryValue("");
          setEthValue("");
        } else {
          setEurValue((+value * gbpChangeRates.eur).toString());
          setUsdValue((+value * gbpChangeRates.usd).toString());
          setBtcValue((+value * gbpChangeRates.btc).toString());
          setTryValue((+value * gbpChangeRates.try).toString());
          setEthValue((+value * gbpChangeRates.eth).toString());
        }
      },
      value: gbpValue,
      image: gbpImg,
      changeRates: gbpChangeRates,
      setChangeRates: setGbpChangeRates,
    },
    {
      text: "eth",
      function: (e: changeEvent) => {
        const value = e.target.value;
        setEthValue(value);

        if (value === "") {
          setEurValue("");
          setUsdValue("");
          setBtcValue("");
          setTryValue("");
          setGbpValue("");
        } else {
          setEurValue((+value * ethChangeRates.eur).toString());
          setUsdValue((+value * ethChangeRates.usd).toString());
          setBtcValue((+value * ethChangeRates.btc).toString());
          setTryValue((+value * ethChangeRates.try).toString());
          setGbpValue((+value * ethChangeRates.gbp).toString());
        }
      },
      value: ethValue,
      image: ethImg,
      changeRates: ethChangeRates,
      setChangeRates: setEthChangeRates,
    },
    {
      text: "btc",
      function: (e: changeEvent) => {
        const value = e.target.value;
        setBtcValue(value);

        if (value === "") {
          setEurValue("");
          setUsdValue("");
          setEthValue("");
          setTryValue("");
          setGbpValue("");
        } else {
          setEurValue((+value * btcChangeRates.eur).toString());
          setUsdValue((+value * btcChangeRates.usd).toString());
          setEthValue((+value * btcChangeRates.eth).toString());
          setTryValue((+value * btcChangeRates.try).toString());
          setGbpValue((+value * btcChangeRates.gbp).toString());
        }
      },
      value: btcValue,
      image: btcImg,
      changeRates: btcChangeRates,
      setChangeRates: setBtcChangeRates,
    },
  ];

  return (
    <div className="App">
      <div className="inputs-container">
        {inputData.map((input) => {
          return (
            <div className="input-container" key={input.text}>
              <img alt="a" className="image" src={input.image} />
              {/* <p>{input.text.toUpperCase()}</p> */}
              <input
                className="input"
                value={input.value}
                onChange={input.function}
                placeholder={input.text.toUpperCase()}
              />
            </div>
          );
        })}
      </div>
      <p style={{ fontSize: "10px", marginTop: 12 }}> *Updates Daily.</p>

      <a className="github-link" href="https://www.github.com/absolutezero13">
        <p style={{ marginRight: 10 }}> Developer </p>
        <GitHubIcon fontSize="small" />
      </a>
    </div>
  );
}

export default App;
