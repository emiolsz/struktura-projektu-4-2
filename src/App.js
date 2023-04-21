import Logo from "./components/Logo.js";
import Header from "./components/Header.js";
import Form from "./components/Form.js";
import Label from "./components/Label.js";
import Select from "./components/Select.js";
import Input from "./components/Input.js";
import Button from "./components/Button.js";
import DisplayCalculation from "./components/DisplayCalculation.js";
import { useState, useEffect } from "react";

function App() {
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(null);
  const [results, setResults] = useState("");

  useEffect(() => {
    getExchangeRates(currency);
  }, [currency]);

  const getExchangeRates = (currency) => {
    const url = `https://api.nbp.pl/api/exchangerates/rates/A/${currency}/?format=json`;

    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRate(data.rates[0].mid);
      })
      .catch((error) => console.error(error));
  };

  const currencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const amountToChange = (e) => {
    setAmount(e.target.value);
  };

  const convertCurrency = () => {
    if (rate && amount) {
      let value = amount * rate;
      setResults(`${amount} ${currency} = ${value.toFixed(2)} PLN`);
    }
  };
  return (
    <>
      <Logo />
      <Header title="Przelicz Swoją walutę" />
      <Form>
        <Label forHTML="currency" name="Wybierz walutę:" />
        <Select currencyChange={currencyChange} />
        <Label forHTML="amount" name="Twoja kwota:" />
        <Input amountToChange={amountToChange} type="number" />
        <Button convertCurrency={convertCurrency} name="Przelicz" />
      </Form>
      <DisplayCalculation value={results} />
    </>
  );
}

export default App;
