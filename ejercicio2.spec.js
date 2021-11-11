const { esPar, laColaEsPar } = require("./ejercicio2");
require("should");

describe("Test", () => {
    describe("esPar", () => {
        it("validacion par", () => esPar(2).should.be.true() );
        it("validacion impar", () => esPar(1).should.be.false() );
    });

    describe("la cola es par", () => {
        it("validacion par - cabeza impar", () => laColaEsPar([1,2,4,6]).should.be.true() );
        it("validacion par - cabeza par", () => laColaEsPar([2,2,4,6]).should.be.true() );

        it("validacion impar - cabeza par", () => laColaEsPar([2,3,6,8]).should.be.false() );
        it("validacion impar - cabeza impar", () => laColaEsPar([1,8,3,10]).should.be.false() );

        it("cuando no tiene elementos es false", () => laColaEsPar([]).should.be.false() );
        it("cuando tiene un solo elemento es false", () => laColaEsPar([1]).should.be.false() );

    });
});