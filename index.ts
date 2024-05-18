#! usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  feulDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}
class opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  feulDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}

let input = await inquirer.prompt({
  name: "ans",
  message: "Enter Player Name",
  type: "input",
});
let select = await inquirer.prompt({
  name: "enemy",
  message: "Select Opponent",
  type: "list",
  choices: ["Skeleton", "Assassin", "Zombie"],
});
let p1 = new player(input.ans);
let o1 = new opponent(select.enemy);
console.log(p1);
console.log(o1);

while (true) {
  if (select.enemy == "Skeleton") {
    let ask = await inquirer.prompt({
      name: "opt",
      message: "Select What To do",
      type: "list",
      choices: ["Attack", "Drink portion", "Run for your life..."],
    });
    if (ask.opt == "Attack") {
      console.log("Attacking");
      let rNum = Math.floor(Math.random() * 2);
      if (rNum > 0) {
        p1.feulDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel = ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel = ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(
            chalk.bold.red.italic(`You loose! 'Better Luck Next Time'`)
          );
          process.exit();
        }
      }
      if (rNum <= 0) {
        o1.feulDecrease();
        console.log(chalk.bold.red(`${o1.name} fuel = ${o1.fuel}`));
        console.log(chalk.bold.green(`${p1.name} fuel = ${p1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.bold.bgGreenBright.red.italic(`You Win`));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink portion") {
      p1.fuelIncrease();
      console.log(chalk.bold.green(`${p1.name} fuel = ${p1.fuel}`));
    }
    if (ask.opt == "Run for your life...") {
      console.log(chalk.bold.red.italic(`You loose! 'Better Luck Next Time'`));
      process.exit();
    }
  }
  
  
  
    if (select.enemy == "Assassin") {
      let ask = await inquirer.prompt({
        name: "opt",
        message: "Select What To do",
        type: "list",
        choices: ["Attack", "Drink portion", "Run for your life..."],
      });
      if (ask.opt == "Attack") {
        console.log("Attacking");
        let rNum = Math.floor(Math.random() * 2);
        if (rNum > 0) {
          p1.feulDecrease();
          console.log(chalk.bold.red(`${p1.name} fuel = ${p1.fuel}`));
          console.log(chalk.bold.green(`${o1.name} fuel = ${o1.fuel}`));
          if (p1.fuel <= 0) {
            console.log(
              chalk.bold.red.italic(`You loose! 'Better Luck Next Time'`)
            );
            process.exit();
          }
        }
        if (rNum <= 0) {
          o1.feulDecrease();
          console.log(chalk.bold.red(`${o1.name} fuel = ${o1.fuel}`));
          console.log(chalk.bold.green(`${p1.name} fuel = ${p1.fuel}`));
          if (o1.fuel <= 0) {
              console.log(chalk.bold.bgGreenBright.red.italic(`You Win`));
            process.exit();
          }
        }
      }
      if (ask.opt == "Drink portion") {
        p1.fuelIncrease();
        console.log(chalk.bold.green(`${p1.name} fuel = ${p1.fuel}`));
      }
      if (ask.opt == "Run for your life...") {
        console.log(chalk.bold.red.italic(`You loose! 'Better Luck Next Time'`));
        process.exit();
      }
    }
    
    if (select.enemy == "Zombie") {
      let ask = await inquirer.prompt({
        name: "opt",
        message: "Select What To do",
        type: "list",
        choices: ["Attack", "Drink portion", "Run for your life..."],
    });
    if (ask.opt == "Attack") {
        console.log("Attacking");
        let rNum = Math.floor(Math.random() * 2);
        if (rNum > 0) {
            p1.feulDecrease();
            console.log(chalk.bold.red(`${p1.name} fuel = ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel = ${o1.fuel}`));
            if (p1.fuel <= 0) {
                console.log(
              chalk.bold.red.italic(`You loose! 'Better Luck Next Time'`)
            );
            process.exit();
          }
        }
        if (rNum <= 0) {
            o1.feulDecrease();
            console.log(chalk.bold.red(`${o1.name} fuel = ${o1.fuel}`));
            console.log(chalk.bold.green(`${p1.name} fuel = ${p1.fuel}`));
            if (o1.fuel <= 0) {
                console.log(chalk.bold.bgGreenBright.red.italic(`You Win`));
                process.exit();
            }
        }
      }
      if (ask.opt == "Drink portion") {
        p1.fuelIncrease();
        console.log(chalk.bold.green(`${p1.name} fuel = ${p1.fuel}`));
    }
    if (ask.opt == "Run for your life...") {
        console.log(chalk.bold.red.italic(`You loose! 'Better Luck Next Time'`));
        process.exit();
    }
}
} 