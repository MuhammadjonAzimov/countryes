const container = document.querySelector(".container")
const loader = document.querySelector(".lds-dual-ring")

fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then(data => {
        loader.style.display = "none";

        data.forEach(country => {
            const html = `
                <div class="country">
                    <img src=${country.flags.png} alt="">
                    <h2 class="country-name">${country.name.common}</h2>
                    <b>Population: ${country.population}</b>
                    <p class="current">Current: ${renderCurrencies(country.currencies)}</p>
                </div>
            `
            container.insertAdjacentHTML("beforeend", html)
        })
    })

function renderCurrencies(currencies) {
    for (let i in currencies) {
        return currencies[i].name
    }
}