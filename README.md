# Practica 9

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Deevo14/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Deevo14?branch=main)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-Deevo14&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-Deevo14)

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Deevo14/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Deevo14/actions/workflows/node.js.yml)

## Índice

  1. Tareas Previas
  2. Ejercicios
  3. Test
  4. Conclusiones
  

## 1. Tareas Previas

  1. Aceptar la asignación de GitHub Classroom asociada a esta práctica.
  2. Utilizar los paquetes _yargs_ y _chalk_.
  3. Familiarícese con el API síncrona proporcionada por Node.js para trabajar con el sistema de ficheros.

## 2. FunkoPopApp

Para esta aplicacion hemos creado varios ficheros:

- FunkoPopType:

```
/**
 * Enum for the different types of Funko Pops
 */
export enum FunkoPopType {
    "Pop!",
    "Pop! Rides",
    "Vynil Soda",
    "Vynil Gold",
    "Pop! Rocks",
  }
```

Definimos un _enum_ para los diferentes tipos de Funko.

- FunkoPopGenre:
```
/**
 * Enum for the different genres of Funko Pops
 */
export enum FunkoPopGenre {
    "Animación",
    "Películas y TV",
    "Videojuegos",
    "Deportes",
    "Música",
    "Ánime",
    "Comics",
  }
```
Lo mismo para el género del FunkoPop.

- FunkoPop:

```
import { FunkoPopType } from "./funkoPopType.js";
import { FunkoPopGenre } from "./funkoPopGenre.js";

/**
 * @class FunkoPop
 * @description This class represents a Funko Pop figure.
 */
export class FunkoPop {
  private id_: number;
  private name_: string;
  private description_: string;
  private type_: FunkoPopType;
  private genre_: FunkoPopGenre;
  private franchise_: string;
  private num_: number;
  private exclusive_: boolean;
  private specialFeatures_: string;
  private marketValue_: number;

  /**
   * @constructor
   * @param id unique identifier for the Funko Pop
   * @param name name of the Funko Pop
   * @param description description of the Funko Pop
   * @param type type of the Funko Pop
   * @param genre genre of the Funko Pop
   * @param franchise franchise of the Funko Pop
   * @param num number of the Funko Pop of the franchise
   * @param exclusive boolean value if the Funko Pop is exclusive
   * @param specialFeatures special features of the Funko Pop
   * @param marketValue market value of the Funko Pop
   */
  constructor(
    id: number,
    name: string,
    description: string,
    type: FunkoPopType,
    genre: FunkoPopGenre,
    franchise: string,
    num: number,
    exclusive: boolean,
    specialFeatures: string,
    marketValue: number
  ) {
    this.id_ = id;
    this.name_ = name;
    this.description_ = description;
    this.type_ = type;
    this.genre_ = genre;
    this.franchise_ = franchise;
    this.num_ = num;
    this.exclusive_ = exclusive;
    this.specialFeatures_ = specialFeatures;
    this.marketValue_ = marketValue;
  }
  /**
   * @description Getter for id
   */
  get ID(): number {
    return this.id_;
  }

  /**
   * @description Setter for id
   */
  set ID(id: number) {
    this.id_ = id;
  }

  /**
   * @description Getter for name
   */
  get Name(): string {
    return this.name_;
  }

  /**
   * @description Setter for name
   */
  set Name(name: string) {
    this.name_ = name;
  }

  /**
   * @description Getter for description
   */
  get Description(): string {
    return this.description_;
  }

  /**
   * @description Setter for description
   */
  set Description(description: string) {
    this.description_ = description;
  }

  /**
   * @description Getter for type
   */
  get Type(): FunkoPopType {
    return this.type_;
  }

  /**
   * @description Setter for type
   */
  set Type(type: FunkoPopType) {
    this.type_ = type;
  }

  /**
   * @description Getter for genre
   */
  get Genre(): FunkoPopGenre {
    return this.genre_;
  }

  /**
   * @description Setter for genre
   */
  set Genre(genre: FunkoPopGenre) {
    this.genre_ = genre;
  }

  /**
   * @description Getter for franchise
   */
  get Franchise(): string {
    return this.franchise_;
  }

  /**
   * @description Setter for franchise
   */
  set Franchise(franchise: string) {
    this.franchise_ = franchise;
  }

  /**
   * @description Getter for num
   */
  get Num(): number {
    return this.num_;
  }

  /**
   * @description Setter for num
   */
  set Num(num: number) {
    this.num_ = num;
  }

  /**
   * @description Getter for exclusive
   */
  get Exclusive(): boolean {
    return this.exclusive_;
  }

  /**
   * @description Setter for exclusive
   */
  set Exclusive(exclusive: boolean) {
    this.exclusive_ = exclusive;
  }

  /**
   * @description Getter for specialFeatures
   */
  get SpecialFeatures(): string {
    return this.specialFeatures_;
  }

  /**
   * @description Setter for specialFeatures
   */
  set SpecialFeatures(specialFeatures: string) {
    this.specialFeatures_ = specialFeatures;
  }

  /**
   * @description Getter for marketValue
   */
  get MarketValue(): number {
    return this.marketValue_;
  }

  /**
   * @description Setter for marketValue
   */
  set MarketValue(marketValue: number) {
    this.marketValue_ = marketValue;
  }
}
```

La clase _FunkoPop_ tiene como atributos los necesarios para definir a un Funko. En ella incluimos los tipos definidos para _tipo_ y _genero_ del Funko. En el constructor inicializamos todos los atributos y después tenemos los __getters__ y __setters__ para cada uno.

 - User:
```
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
      this.collection = this.collection.filter((funko) => funko.ID !== id);
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
```
Esta clase representa a un usuario.

Tenemos como atributo privado la colleccion de Funkos de un usuarios en concreto. Al constructor le pasamos el nombre de usuario y comprueba si existe o no un directorio con ese nombre. Si existe, lee los ficheros que se encuentran en el directorio(que son los Funkos de ese usuario) y los pushea a su coleccion. En el caso de que no exista el directorio, simplemente lo crea vacio.

Despues tenemos varios metodos:
- addFunko: Metodo para añadir un Funko. Le pasamos como parametro el funko a añadir y comprueba si ya se encuentre ese fichero en la carpeta del usuario o no. En caso de que si, se imprime por consola un mensaje en rojo diciendo que el Funko ya se encuentra en su coleccion. Si no existe, creamos el fichero con la información del funko, pusheamos el Funko a la coleccion e imprimimos un mensaje por consola en verde para saber que el Funko ha sido añadido correctamente.

 - removesFunko: Metodo para eliminar un Funko. Mismo funcionamiento que el metodo anterior, pero esta vez le pasamos el _id_ del Funko a eliminar en vez de el objeto. Si existe en el directorio, elmininamos. Si no existe, emitimos un mensaje de error en rojo.

  - updateFunko: Metodo para modificar la informacion de un Funko.
  Si se ecuentra en nuestra lista, hacemos un _write_ en el fichero para modificar los datos, y borramos el funko antiguo de coleccion y lo volvemos a añadir con los valores modificados.
  En el caso de que no este, imprimimos un mensae de error en rojo

  - getMarketValueColor: Metodo que utilizamos para devolver el color para imprimir el valor de mercado. Le pasamos el valor y, depeniendo en que rango se encuentre, devolvera un color u otro. En el caso de que el precio sea más de 1000, devolvera azul

  - showFunkos: Metodo para devolver toda la lista de funkos. Si la lista esta vacia, imprimiremos un m ensaje de error en rojo. En caso contrario, recorreremos la coleccion de Funkos e iremos imprimiendo en verde la información de cada uno, exceptuando el valor de mercado que el color será dependiendo de su valor.
  - showFunko: Metodo para imprimir un solo Funko. Si no existe, impirimiremos mensaje de error. En caso contrario, al igual que en el metodo anterior, imprimiremos su informacion en verde y su valor de mercado en un color concreto.

Ahora nos queda el fichero App.

- App:
```
import { User } from './user.js';
import { FunkoPop } from './funkoPop.js';
import { FunkoPopType } from './funkoPopType.js';
import { FunkoPopGenre } from './funkoPopGenre.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


yargs(hideBin(process.argv))
.command('add', 'Add a Funko Pop to your collection', {
        user: {
            describe: 'Name of the user',
            demandOption: true,
            type: 'string'
        },
        id: {
            describe: 'ID of the Funko Pop',
            demandOption: true,
            type: 'number'
        },
        name: {
            describe: 'Name of the Funko Pop',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Description of the Funko Pop',
            demandOption: true,
            type: 'string'
        },
        type: {
            describe: 'Type of the Funko Pop',
            demandOption: true,
            choices: Object.values(FunkoPopType),
        },
        genre: {
            describe: 'Genre of the Funko Pop',
            demandOption: true,
            choices: Object.values(FunkoPopGenre),
        },
        franchise: {
            describe: 'Franchise of the Funko Pop',
            demandOption: true,
            type: 'string'
        },
        num: {
            describe: 'Number of the Funko Pop',
            demandOption: true,
            type: 'number'
        },
        exclusive: {
            describe: 'Exclusive of the Funko Pop',
            demandOption: true,
            type: 'boolean'
        },
        specialFeatures: {
            describe: 'Special Features of the Funko Pop',
            demandOption: true,
            type: 'string'
        },
        marketValue: {
            describe: 'Market Value of the Funko Pop',
            demandOption: true,
            type: 'number',
            coerce: (value) => {
                if (value <= 0) {
                    throw new Error('Market value must be a positive number');
                }
                return value;
            }
        }
    },
    (argv) => {
        const user = new User(argv.user);
        const newFunko = new FunkoPop(argv.id, argv.name, argv.description, argv.type as FunkoPopType, argv.genre as FunkoPopGenre, argv.franchise, argv.num, argv.exclusive, argv.specialFeatures, argv.marketValue);
        user.addFunko(newFunko);
    })
.help()
.argv;

yargs(hideBin(process.argv))
.command('remove', 'Remove a Funko Pop from your collection', {
        user: {
            describe: 'Name of the user',
            demandOption: true,
            type: 'string'
        },
        id: {
            describe: 'ID of the Funko Pop',
            demandOption: true,
            type: 'number'
        }
    },
    (argv) => {
        const user = new User(argv.user);
        user.removeFunko(argv.id);
    })
.help()
.argv;

yargs(hideBin(process.argv))
.command('update', 'Update a Funko Pop in your collection', {
        user: {
            describe: 'Name of the user',
            demandOption: true,
            type: 'string'
        },
        id: {
            describe: 'ID of the Funko Pop',
            demandOption: true,
            type: 'number'
        },
        name: {
            describe: 'Name of the Funko Pop',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Description of the Funko Pop',
            demandOption: true,
            type: 'string'
        },
        type: {
            describe: 'Type of the Funko Pop',
            demandOption: true,
            choices: Object.values(FunkoPopType),
        },
        genre: {
            describe: 'Genre of the Funko Pop',
            demandOption: true,
            choices: Object.values(FunkoPopGenre),
        },
        franchise: {
            describe: 'Franchise of the Funko Pop',
            demandOption: true,
            type: 'string'
        },
        num: {
            describe: 'Number of the Funko Pop',
            demandOption: true,
            type: 'number'
        },
        exclusive: {
            describe: 'Exclusive of the Funko Pop',
            demandOption: true,
            type: 'boolean'
        },
        specialFeatures: {
            describe: 'Special Features of the Funko Pop',
            demandOption: true,
            type: 'string'
        },
        marketValue: {
            describe: 'Market Value of the Funko Pop',
            demandOption: true,
            type: 'number',
            coerce: (value) => {
                if (value <= 0) {
                    throw new Error('Market value must be a positive number');
                }
                return value;
            }
        }
    },
    (argv) => {
        const user = new User(argv.user);
        const newFunko = new FunkoPop(argv.id, argv.name, argv.description, argv.type as FunkoPopType, argv.genre as FunkoPopGenre, argv.franchise, argv.num, argv.exclusive, argv.specialFeatures, argv.marketValue);
        user.updateFunko(newFunko);
    })
.help()
.argv;

yargs(hideBin(process.argv))
.command('list', 'List all Funko Pops in your collection', {
        user: {
            describe: 'Name of the user',
            demandOption: true,
            type: 'string'
        }
    },
    (argv) => {
        const user = new User(argv.user);
        user.showFunkos();
    })
.help()
.argv;

yargs(hideBin(process.argv))
.command('read', 'Read a Funko Pop in your collection', {
    user: {
        describe: 'Name of the user',
        demandOption: true,
        type: 'string'
    },
    id: {
        describe: 'ID of the Funko Pop',
        demandOption: true,
        type: 'number'
    }
},
(argv) => {
    const user = new User(argv.user);
    user.showFunko(argv.id);
})
.help()
.argv;
```

En este fichero tenemos toda la logica del la aplicacion para cada operacion:

 - add: comando para añadir un funko. El comando seria, por ejemplo:

```
$node dist/FunkoPopApp/app.js add --user "David" --id 10 --name "Sonic" --description "The best Sonic Funko Pop ever" --type "Pop!" --genre "Videojuegos" --franchise "Sonic" --num 23 --exclusive true --specialFeatures "None" --marketValue 1500
```

donde la salido por pantalla sería:
```
Funko added to your collection
```
Tenemos contemplacion de errores en type, genre y marketValue, si se introduce un tipo o genero incorrecto o un marketValue menor que 0, el Funko no se añadira y saldra el error por pantalla, por ejemplo introduciendo el genero mal:
```
Valores inválidos:
Argumento: genre, Recibido: "Video", Seleccionados: "Animación", "Películas y TV", "Videojuegos", "Deportes", "Música", "Ánime", "Comics", 0, 1, 2, 3, 4, 5, 6
```

  - remove: comando para elminiar un funko. Solo recibe como argumentos el usuario y el id.
```
$node dist/FunkoPopApp/app.js remove --user "David" --id 10
Funko removed from your collection 
```
Si el Funko existe nos saldra este mensaje en verde, en caso contrario nos saldrá
```
$node dist/FunkoPopApp/app.js remove --user "David" --id 5
Funko not in your collection
```
en rojo.

- update: comando para modificar un funko
```
$node dist/FunkoPopApp/app.js update --user "David" --id 10 --name "Tails" --description "The best Sonic Funko Pop ever" --type "Pop!" --genre "Videojuegos" --franchise "Sonic" --num 23 --exclusive true --specialFeatures "None" --marketValue 1500
Funko modified
```
mismo funcionamiento que el comando add, pero esta vez modificamos un Funko existente

 - list: comando para listar todos los Funkos de un usuario:
 ```
 $node dist/FunkoPopApp/app.js list --user "David"
ID: 10
Name: Tails
Description: The best Sonic Funko Pop ever
Type: Pop!
Genre: Videojuegos
Franchise: Sonic
Number: 23
Exclusive: true
Special Features: None
Market Value: 1500
----------------------------------
ID: 2
Name: Sonic
Description: The best Sonic Funko Pop ever
Type: Pop!
Genre: Videojuegos
Franchise: Sonic
Number: 23
Exclusive: true
Special Features: None
Market Value: 30
```
Para este comando solo tenemos como argumento el usuario

- read: Metodo para imprimir solo un Funko de tu lista:
```
node dist/FunkoPopApp/app.js read --user "David" --id 2
ID: 2
Name: Sonic
Description: The best Sonic Funko Pop ever
Type: Pop!
Genre: Videojuegos
Franchise: Sonic
Number: 23
Exclusive: true
Special Features: None
Market Value: 30
```
Como argumentos tenemos el nombre de usuario y el id del Funko a imprimir.


En cada uno de estos comandos, usamos los metodos de la clase user para hacer las modificaciones tanto en el sistema de ficheros como en la coleccion de cada usuario, asi como para imprimir los mensajes por pantalla.
Contemplamos la mayoria de las posibildades en los metodos de _User_, exceptuando los errores en la introduccion de datos, los cuales contemplamos en estos comandos.


## 3. Tests
```
FunkoPop Tests
    ✔ should create a FunkoPop object
    ✔ Get ID
    ✔ Set ID
    ✔ Get Name
    ✔ Set Name
    ✔ Get Description
    ✔ Set Description
    ✔ Get Type
    ✔ Set Type
    ✔ Get Genre
    ✔ Set Genre
    ✔ Get Franchise
    ✔ Set Franchise
    ✔ Get Number
    ✔ Set Number
    ✔ Get Exclusive
    ✔ Set Exclusive
    ✔ Get Special Features
    ✔ Set Special Features
    ✔ Get MarketValue
    ✔ Set MarketValue

  Tests
    ✔ add
    ✔ subtract
    ✔ multiply
    ✔ divide

  User
    ✔ should create a new user
    ✔ should check if user exists and check files
    ✔ should add a funko to the user
    ✔ should not add a funko to the user
    ✔ remove a funko from the user
    ✔ should not remove a funko from the user
    ✔ should update a funko from the user
    ✔ should not update a funko from the user
    ✔ should get a funko from the user
    ✔ should get a funko 1000 dollars from the user
    ✔ should not get a funko from the user
    ✔ should get all funkos from the user
    ✔ should not get all funkos from the user


  38 passing (19ms)
```
## 4. Conclusiones

Está práctica no me ha resultado muy complicada, entender como funcionan los paquetes _yargs_ y _chalk_ y usar el API síncrona proporcionada por Node.js para trabajar con el sistema de ficheros no ha sido dificil. Lo unico que me ha dado problemas han sido los test, ya que no estaba seguro de como hacerlos correctamente. Al final he optado por crear las carpetas TestUser1 y TestUser2 y hacer todos los test en base a esos dos direcctorios, aun creyendo que no es lo mas óptimo. 