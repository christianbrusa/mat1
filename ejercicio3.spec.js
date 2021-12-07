const { deberiaRegargarNafta, necesitaCambiarAceite } = require("./ejercicio3");
require("should");

describe("Auto", () => {
    const autoBase = {
        nafta: 0,
        capacidadTanque: 100,
        km: 0,
        marca: "Audi"
    };

    describe("deberiaRegargarNafta", () => {
        it("si estoy por debajo del limite", () => deberiaRegargarNafta({ ...autoBase, nafta: 9 }).should.be.true() );
        it("no deberia si estoy por encima del limite", () => deberiaRegargarNafta({ ...autoBase, nafta: 11 }).should.be.false() );
    });

    describe("deberia cambiar aceite", () => {
        it("si estoy por debajo del limite", () => necesitaCambiarAceite({ ...autoBase, km: 15001 }).should.be.true() );
        it("no deberia si estoy por encima del limite", () => necesitaCambiarAceite({ ...autoBase, km: 14999 }).should.be.false() );
    });
});