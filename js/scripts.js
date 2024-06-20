const buttonConvert = document.querySelector(".button-convert");
const currentValueToConvert = document.querySelector(
  ".current-value-to-convert"
);
const selectOptionCurrent = document.querySelector(".select-option-current");
const selectOption = document.querySelector(".select-option");
const currentValeu = document.querySelector(".current-value");

async function convertMoney() {
  const inputCurrency = document.querySelector(".input-currency").value;
  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,USD-EUR,USD-GBP,EUR-USD,EUR-GBP,GBP-USD,GBP-EUR"
  ).then((response) => response.json());

  //Real
  const dolarToday = data.USDBRL.high;
  const euroToday = data.EURBRL.high;
  const libraToday = data.GBPBRL.high;

  //Dolar
  const dolarToEuro = data.USDEUR.high;
  const dolarToLibra = data.USDGBP.high;

  //Euro
  const euroToDolar = data.EURUSD.high;
  const euroToLibra = data.EURGBP.high;

  //Libra
  const libraToDolar = data.GBPUSD.high;
  const libraToEuro = data.GBPEUR.high;

  //Converter do real para...

  if (selectOption.value == "dolar") {
    currentValeu.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency / dolarToday);
  } else if (selectOption.value == "euro") {
    currentValeu.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency / euroToday);
  } else if (selectOption.value == "libra") {
    currentValeu.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency / libraToday);
  } else if (selectOption.value == "real") {
    currentValeu.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency);
  }
  currentValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrency);

  //Converter de dólar para...

  if (selectOptionCurrent.value == "dolar" && selectOption.value == "euro") {
    currentValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency);
    currentValeu.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(dolarToEuro * inputCurrency);
  } else if (
    selectOptionCurrent.value == "dolar" &&
    selectOption.value == "libra"
  ) {
    currentValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency);
    currentValeu.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(dolarToLibra * inputCurrency);
  } else if (
    selectOptionCurrent.value == "dolar" &&
    selectOption.value == "real"
  ) {
    currentValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency);
    currentValeu.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency * dolarToday);
  } else if (selectOptionCurrent.value == "dolar") {
    currentValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency);
    currentValeu.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency);
  }

  // Converter de euro para...
  if (selectOptionCurrent.value == "euro" && selectOption.value == "dolar") {
    currentValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency);
    currentValeu.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency * euroToDolar);
  } else if (
    selectOptionCurrent.value == "euro" &&
    selectOption.value == "libra"
  ) {
    currentValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency);
    currentValeu.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency * euroToLibra);
  } else if (
    selectOptionCurrent.value == "euro" &&
    selectOption.value == "real"
  ) {
    currentValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency);
    currentValeu.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency * 5.37);
  } else if (selectOptionCurrent.value == "euro") {
    currentValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency);
    currentValeu.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency);
  }

  // Converter de libra para...
  if (selectOptionCurrent.value == "libra" && selectOption.value == "dolar") {
    currentValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency);
    currentValeu.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency * libraToDolar);
  } else if (
    selectOptionCurrent.value == "libra" &&
    selectOption.value == "euro"
  ) {
    currentValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency);
    currentValeu.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency * libraToEuro);
  } else if (
    selectOptionCurrent.value == "libra" &&
    selectOption.value == "real"
  ) {
    currentValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency);
    currentValeu.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrency * libraToday);
  } else if (selectOptionCurrent.value == "libra") {
    currentValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency);
    currentValeu.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency);
  }
}

function changeCurrency() {
  const currencyName = document.querySelector("#currency-name");
  const countryFlagConvert = document.querySelector(".country-flag-convert");

  if (selectOptionCurrent.value === selectOption.value) {
    buttonConvert.style.display = "none";
  } else {
    buttonConvert.style.display = "block";
  }
  if (selectOption.value == "dolar") {
    currencyName.innerHTML = "Dólar";
    countryFlagConvert.src = "./assets/estados-unidos.png";
  } else if (selectOption.value == "euro") {
    currencyName.innerHTML = "Euro";
    countryFlagConvert.src = "./assets/euro.png";
  } else if (selectOption.value == "libra") {
    currencyName.innerHTML = "Libra";
    countryFlagConvert.src = "./assets/libra1.png";
  } else if (selectOption.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    countryFlagConvert.src = "./assets/bitcoin1.png";
  } else if (selectOption.value == "real") {
    currencyName.innerHTML = "Real Brasileiro";
    countryFlagConvert.src = "./assets/brasil2.png";
  }

  const currencyNameToConvert = document.querySelector(
    "#currency-name-to-convert"
  );
  const countryFlag = document.querySelector(".country-flag");

  if (selectOptionCurrent.value == "dolar") {
    currencyNameToConvert.innerHTML = "Dólar";
    countryFlag.src = "./assets/estados-unidos.png";
  } else if (selectOptionCurrent.value == "euro") {
    currencyNameToConvert.innerHTML = "Euro";
    countryFlag.src = "./assets/euro.png";
  } else if (selectOptionCurrent.value == "libra") {
    currencyNameToConvert.innerHTML = "Libra";
    countryFlag.src = "./assets/libra1.png";
  } else if (selectOptionCurrent.value == "bitcoin") {
    currencyNameToConvert.innerHTML = "Bitcoin";
    countryFlag.src = "./assets/bitcoin1.png";
  } else if (selectOptionCurrent.value == "real") {
    currencyNameToConvert.innerHTML = "Real Brasileiro";
    countryFlag.src = "./assets/brasil2.png";
  }

  convertMoney();
}

selectOption.addEventListener("change", changeCurrency);
selectOptionCurrent.addEventListener("change", changeCurrency);

buttonConvert.addEventListener("click", convertMoney);
