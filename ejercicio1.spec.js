const capitalizeFirstLetter = require("./ejercicio1");
require("should");

describe("Test", () => {
    describe("capitalizeFirstLetter", () => {
        it("una sola palabra", () => capitalizeFirstLetter("hola").should.be.eql("Hola") );
        it("varias palabras", () => capitalizeFirstLetter("hola mundo javascript").should.be.eql("Hola mundo javascript") );
        it("sin palabras", () => capitalizeFirstLetter("").should.be.eql("") );
    });
});