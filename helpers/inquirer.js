const inquirer = require("inquirer");
require("colors");

module.exports = {
  showMenu: async () => {
    console.clear();
    console.log("====================".green);
    console.log(" Select a option".white);
    console.log("==================== \n".green);

    const { option } = await inquirer.prompt([
      {
        type: "list",
        name: "option",
        message: "Select an option: ",
        choices: [
          {
            name: `${"1)".green} Search city`,
            value: "1",
          },
          {
            name: `${"2)".green} History`,
            value: "2",
          },
          {
            name: `${"0)".green} Exit`,
            value: "0",
          },
        ],
      },
    ]);

    return option;
  },
  pause: async () => {
    console.log("\n");
    const { pause } = await inquirer.prompt([
      {
        type: "input",
        name: "enter",
        message: `Press ${"ENTER".green} to continue`,
      },
    ]);

    return pause;
  },
  readInput: async (message) => {
    const { input } = await inquirer.prompt([
      {
        type: "input",
        name: "input",
        message,
      },
    ]);

    return input;
  },
};
