const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => countriesDiteals(data));
};

const countriesDiteals = countries => {
    console.log(countries)
    const countriesHtml = countries.map( country => getCountriesHtml(country));
    const container =document.getElementById('countries');
    container.innerHTML = countriesHtml.join(' ');
};

const getCountriesHtml = country =>{    
    // console.log(country)
    return `
        <div class="content">
          <h1>${country.name.common}</h1>
          <h1>${country.subregion}</h1>
          <img src="${country.flags.png}">
        </div>
    `
}

loadCountries()
