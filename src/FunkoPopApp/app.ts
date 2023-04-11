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