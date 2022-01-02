const { showMenu, pause, readInput } = require("./helpers/inquirer");
const Search = require("./models/search");

const main = async () => {
  let option;
  const search = new Search();
  do {
    option = await showMenu();

    switch (option) {
      case "1":
        const place = await readInput("Enter a city: ");
        await search.searchCity(place);
        break;
    }

    if (option !== "0") await pause();
  } while (option !== "0");
};

main();
