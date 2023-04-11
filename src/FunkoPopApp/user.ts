import fs from "fs";
import chalk from "chalk";
const log = console.log;
import { FunkoPop } from "./funkoPop.js";

/**
 * Class representing a user
 */
export class User {
  private collection: FunkoPop[] = [];

  /**
   * Constructor for the User class
   * @param userName The name of the user
   * if the user exists, it loads the collection from the file system
   * if the user doesn't exist, it creates a new folder for the user
   */
  constructor(private userName: string) {
    if (fs.existsSync(`src/FunkoPopApp/Users/${this.userName}`)) {
      const data = fs.readdirSync(`src/FunkoPopApp/Users/${this.userName}/`);
      data.forEach((file) => {
        const jsonObject = JSON.parse(
          fs
            .readFileSync(`src/FunkoPopApp/Users/${this.userName}/${file}`)
            .toString()
        );
        const newFunko = new FunkoPop(
          jsonObject.id_,
          jsonObject.name_,
          jsonObject.description_,
          jsonObject.type_,
          jsonObject.genre_,
          jsonObject.franchise_,
          jsonObject.num_,
          jsonObject.exclusive_,
          jsonObject.specialFeatures_,
          jsonObject.marketValue_
        );
        this.collection.push(newFunko);
      });
    } else {
      fs.mkdirSync(`src/FunkoPopApp/Users/${this.userName}`);
    }
  }

  /**
   * Adds a funko to the user's collection
   * @param funko The funko to add to the user's collection
   * If the funko already exists in the user's collection, it doesn't add it
   * else, it adds the funko to the user's collection
   */
  public addFunko(funko: FunkoPop): boolean {
    if (
      fs.existsSync(`src/FunkoPopApp/Users/${this.userName}/${funko.ID}.json`)
    ) {
      log(chalk.red("Funko already in your collection"));
      return false;
    } else {
      fs.writeFileSync(
        `src/FunkoPopApp/Users/${this.userName}/${funko.ID}.json`,
        JSON.stringify(funko)
      );
      this.collection.push(funko);
      log(chalk.green("Funko added to your collection"));
      return true;
    }
  }

  /**
   * Removes a funko from the user's collection
   * @param id The id of the funko to remove from the user's collection
   * If the funko doesn't exist in the user's collection, it doesn't remove it
   * else, it removes the funko from the user's collection
   */
  public removeFunko(id: number): boolean {
    if (fs.existsSync(`src/FunkoPopApp/Users/${this.userName}/${id}.json`)) {
      fs.unlinkSync(`src/FunkoPopApp/Users/${this.userName}/${id}.json`);
      this.collection = this.collection.filter((funko) => funko.ID !== id);//
      log(chalk.green("Funko removed from your collection"));
      return true;
    } else {
      log(chalk.red("Funko not in your collection"));
      return false;
    }
  }

  /**
   * Updates a funko from the user's collection
   * @param funko The funko to update from the user's collection
   * If the funko doesn't exist in the user's collection, it doesn't update it
   * else, it updates the funko from the user's collection
   */
  public updateFunko(funko: FunkoPop): boolean {
    if (
      fs.existsSync(`src/FunkoPopApp/Users/${this.userName}/${funko.ID}.json`)
    ) {
      fs.writeFileSync(
        `src/FunkoPopApp/Users/${this.userName}/${funko.ID}.json`,
        JSON.stringify(funko)
      );
      
      this.collection = this.collection.filter((funkoPop) => funkoPop.ID !== funko.ID);
      this.collection.push(funko);
      log(chalk.green("Funko modified"));
      return true;
    } else {
      log(chalk.red("Funko not in your collection"));
      return false;
    }
  }

  /**
   * Method to get the market value color
   * @param marketValue The market value of the funko
   * @returns The market value color
   */
  private getMarketValueColor(marketValue: number) {
    const marketValueRanges = [
      { min: 0, max: 10 },
      { min: 11, max: 50 },
      { min: 51, max: 100 },
      { min: 101, max: 1000 },
    ];

    const marketValueColors = [
      chalk.green(marketValue.toString()),
      chalk.yellow(marketValue.toString()),
      chalk.red(marketValue.toString()),
      chalk.magenta(marketValue.toString()),
    ];

    for (let i = 0; i < marketValueRanges.length; i++) {
      if (
        marketValue >= marketValueRanges[i].min &&
        marketValue <= marketValueRanges[i].max
      ) {
        return marketValueColors[i];
      }
    }

    return chalk.blue(marketValue.toString());
  }

  /**
   * Shows the user's collection
   * If the user's collection is empty, it shows a message
   * else, it shows the user's collection
   */
  public showFunkos(): boolean {
    if (this.collection.length === 0) {
      log(chalk.red("Your collection is empty"));
      return false;
    } else {
      this.collection.forEach((funko) => {
        log(chalk.green(`ID: ${funko.ID}`));
        log(chalk.green(`Name: ${funko.Name}`));
        log(chalk.green(`Description: ${funko.Description}`));
        log(chalk.green(`Type: ${funko.Type}`));
        log(chalk.green(`Genre: ${funko.Genre}`));
        log(chalk.green(`Franchise: ${funko.Franchise}`));
        log(chalk.green(`Number: ${funko.Num}`));
        log(chalk.green(`Exclusive: ${funko.Exclusive}`));
        log(chalk.green(`Special Features: ${funko.SpecialFeatures}`));
        log(
          chalk.green(
            `Market Value: ${this.getMarketValueColor(funko.MarketValue)}`
          )
        );
        log(chalk.green("----------------------------------"));
      });
      return true;
    }
  }

  /**
   * Shows a funko from the user's collection
   * @param id The id of the funko to show
   * If the funko doesn't exist in the user's collection, it shows a message
   * else, it shows the funko from the user's collection
   */
  public showFunko(id: number): boolean {
    const funko = this.collection.find((funko) => funko.ID === id);
    if (funko) {
      log(chalk.green(`ID: ${funko.ID}`));
      log(chalk.green(`Name: ${funko.Name}`));
      log(chalk.green(`Description: ${funko.Description}`));
      log(chalk.green(`Type: ${funko.Type}`));
      log(chalk.green(`Genre: ${funko.Genre}`));
      log(chalk.green(`Franchise: ${funko.Franchise}`));
      log(chalk.green(`Number: ${funko.Num}`));
      log(chalk.green(`Exclusive: ${funko.Exclusive}`));
      log(chalk.green(`Special Features: ${funko.SpecialFeatures}`));
      log(
        chalk.green(
          `Market Value: ${this.getMarketValueColor(funko.MarketValue)}`
        )
      );
      return true;
    } else {
      log(chalk.red("Funko not in your collection"));
      return false;
    }
  }
}
