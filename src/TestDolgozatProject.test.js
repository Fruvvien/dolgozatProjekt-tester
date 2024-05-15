import { beforeEach, it, expect, describe } from 'vitest';
import { Dolgozat } from "./Dolgozat.js";


let dolgozat = new Dolgozat()
beforeEach(() =>{
    dolgozat = new Dolgozat();
})


describe("PontFelvesz", () =>{
    it("Ha kevesebb, mint -1 errort dob",() =>{
        expect(()=>dolgozat.PontFelvesz(-2)).toThrow("kisebb, mint -1");
    })
})
