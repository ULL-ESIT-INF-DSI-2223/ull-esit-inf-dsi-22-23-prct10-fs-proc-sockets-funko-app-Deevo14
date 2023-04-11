import 'mocha';
import {expect} from 'chai';
import {User} from '../src/FunkoPopApp/user.js';
import {FunkoPop} from '../src/FunkoPopApp/funkoPop.js';
import {FunkoPopType} from '../src/FunkoPopApp/funkoPopType.js';
import {FunkoPopGenre} from '../src/FunkoPopApp/funkoPopGenre.js';

import fs from "fs";

describe('User', () => {
    it('should create a new user', () => {
        const user = new User('TestUser1');
        expect(fs.existsSync(`src/FunkoPopApp/Users/TestUser1`)).to.be.true;
        fs.writeFileSync(`src/FunkoPopApp/Users/TestUser1/test.json`, JSON.stringify({id_: 1, name_: "Test", description_: "Test", type_: "Test", genre_: "Test", franchise_: "Test", num_: 1, exclusive_: "Test", specialFeatures_: "Test", marketValue_: 1}));
    });;
    it('should check if user exists and check files', () => {
        const user = new User('TestUser1');
        expect(fs.existsSync(`src/FunkoPopApp/Users/TestUser1/test.json`)).to.be.true;
    });
    it('should add a funko to the user', () => {
        const user = new User('TestUser1');
        const newFunko = new FunkoPop(3, 'Classic Sonic', 'The best Sonic Funko ever', FunkoPopType['Pop!'], FunkoPopGenre.Animación, 'Sonic', 2, false, 'None', 15);
        expect(user.addFunko(newFunko)).to.be.true;
    });
    it('should not add a funko to the user', () => {
        const user = new User('TestUser1');
        const newFunko = new FunkoPop(1, 'Classic Sonic', 'The best Sonic Funko ever', FunkoPopType['Pop!'], FunkoPopGenre.Animación, 'Sonic', 2, false, 'None', 15);
        expect(user.addFunko(newFunko)).to.be.false;
    });
    it('remove a funko from the user', () => {
        const user = new User('TestUser1');
        expect(user.removeFunko(1)).to.be.true;
    });
    it('should not remove a funko from the user', () => {
        const user = new User('TestUser1');
        expect(user.removeFunko(6)).to.be.false;
    });
    it('should update a funko from the user', () => {
        const user = new User('TestUser1');
        const newFunko = new FunkoPop(1, 'Classic Sonic', 'The best Sonic Funko ever', FunkoPopType['Pop!'], FunkoPopGenre.Animación, 'Sonic', 2, false, 'None', 15);
        user.addFunko(newFunko);
        const newFunko2 = new FunkoPop(1, 'Tails', 'The best Tails Funko ever', FunkoPopType['Pop!'], FunkoPopGenre.Animación, 'Sonic', 2, false, 'None', 15);
        expect(user.updateFunko(newFunko2)).to.be.true;
    });
    it('should not update a funko from the user', () => {
        const user = new User('TestUser1');
        const newFunko = new FunkoPop(5, 'Classic Sonic', 'The best Sonic Funko ever', FunkoPopType['Pop!'], FunkoPopGenre.Animación, 'Sonic', 2, false, 'None', 15);
        expect(user.updateFunko(newFunko)).to.be.false;
    });
    it('should get a funko from the user', () => {
        const user = new User('TestUser1');
        expect(user.showFunko(1)).to.be.true;
    });
    it('should get a funko 1000 dollars from the user', () => {
        const user = new User('TestUser1');
        user.addFunko(new FunkoPop(2, 'Classic Sonic', 'The best Sonic Funko ever', FunkoPopType['Pop!'], FunkoPopGenre.Animación, 'Sonic', 2, false, 'None', 1500));
        expect(user.showFunko(2)).to.be.true;
    });
    it('should not get a funko from the user', () => {
        const user = new User('TestUser1');
        expect(user.showFunko(5)).to.be.false;
    });
    it('should get all funkos from the user', () => {
        const user = new User('TestUser1');
        expect(user.showFunkos()).to.be.true;
    });
    it('should not get all funkos from the user', () => {
        const user = new User('TestUser2');
        expect(user.showFunkos()).to.be.false;
    });
});