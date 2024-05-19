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
    it("Ha üres stringet add át, akkor hibát dob", () =>{
        expect(()=>dolgozat.PontFelvesz("")).toThrow("üres");
    })
    it("Ha nullt add át, akkor hibát dob", () =>{
        expect(()=>dolgozat.PontFelvesz(null)).toThrow("null");
    })
    it("Ha jó számot add át, akkor true", () =>{
        expect(()=>dolgozat.PontFelvesz(-1)).toBeTruthy();
    })
    it("Ha stringét adja meg a számot, akkor is true", () =>{
        expect(()=>dolgozat.PontFelvesz("-1")).toBeTruthy();
    })
    it("Ha törtet add, meg akkor hibát dob",() =>{
        expect(()=>dolgozat.PontFelvesz(5.3)).toThrow("tört");

    })
})
describe("MindenkiMegirta", () =>{
   it("Ha mindenki megírta , akkor true", () =>{
    dolgozat.PontFelvesz(30);
    dolgozat.PontFelvesz(40);
    expect(dolgozat.MindenkiMegirta()).toBeTruthy();
   })
   it("Ha valaki nem írta meg , akkor false", () =>{
    dolgozat.PontFelvesz(30);
    dolgozat.PontFelvesz(-1);
    expect(dolgozat.MindenkiMegirta()).toBeFalsy();
   })
})
describe("Bukas", ()=>{
    it("Adja vissza mennyien buktak meg", () =>{
        dolgozat.PontFelvesz(49);
        dolgozat.PontFelvesz(50);
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        expect(dolgozat.Bukas()).toBe(1);
    })
    it("Ha senki nem írta meg, akkor 0", () =>{
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        expect(dolgozat.Bukas()).toBe(0);
    })
})

describe("Elegseges", ()=>{
    it("Adja vissza mennyinek lett meg a kettes", () =>{
        dolgozat.PontFelvesz(49);
        dolgozat.PontFelvesz(51);
        dolgozat.PontFelvesz(60);
        dolgozat.PontFelvesz(61);
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        expect(dolgozat.Elegseges()).toBe(2);
    })
    it("Ha senki nem írta meg, akkor 0", () =>{
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        expect(dolgozat.Elegseges()).toBe(0);
    })
})
describe("Kozepes", ()=>{
    it("Adja vissza mennyinek lett meg a hármas", () =>{
        dolgozat.PontFelvesz(60);
        dolgozat.PontFelvesz(61);
        dolgozat.PontFelvesz(70);
        dolgozat.PontFelvesz(71);
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        expect(dolgozat.Kozepes()).toBe(2);
    })
    it("Ha senki nem írta meg, akkor 0", () =>{
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        expect(dolgozat.Kozepes()).toBe(0);
    })
})

describe("Jo", ()=>{
    it("Adja vissza mennyinek lett meg a négyes", () =>{
        dolgozat.PontFelvesz(70);
        dolgozat.PontFelvesz(71);
        dolgozat.PontFelvesz(80);
        dolgozat.PontFelvesz(81);
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        expect(dolgozat.Jo()).toBe(2);
    })
    it("Ha senki nem írta meg, akkor 0", () =>{
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        expect(dolgozat.Jo()).toBe(0);
    })
})
describe("Jeles", ()=>{
    it("Adja vissza mennyinek lett meg a ötös", () =>{
        dolgozat.PontFelvesz(80);
        dolgozat.PontFelvesz(81);
        dolgozat.PontFelvesz(90);
        dolgozat.PontFelvesz(100);
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        expect(dolgozat.Jeles()).toBe(3);
    })
    it("Ha senki nem írta meg, akkor 0", () =>{
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        expect(dolgozat.Jeles()).toBe(0);
    })
})
describe('Gyanus', () => {
    it("Ha 0-nál kevesebb a kiválók száma, akkor errort dob", ()=>{
        expect(()=>dolgozat.Gyanus(-1)).toThrow("Kivalók száma nem lehet 0-nál kevesebb");
    })
    it("Ha a kiválók száma 0, akkor return false", ()=>{
        expect(dolgozat.Gyanus(0)).toBeFalsy();
    })
    it("Ha a kiválók száma egyenlő a jelesek számával, akkor is false", ()=>{
        dolgozat.PontFelvesz(81);
        dolgozat.PontFelvesz(90);
        dolgozat.PontFelvesz(100);
        expect(dolgozat.Gyanus(3)).toBeFalsy();
    })
    it("Ha a kiválók száma több, mint a jelesek száma, akkor true", () =>{
        dolgozat.PontFelvesz(81);
        dolgozat.PontFelvesz(90);
        dolgozat.PontFelvesz(100);
        expect(dolgozat.Gyanus(2)).toBeTruthy();
    })
})
describe("Ervenytelen", () =>{
    it("Ha kevesebb tanuló nem írt, mint az osztály fele, akkor false", ()=>{
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(81);
        dolgozat.PontFelvesz(90);
        dolgozat.PontFelvesz(100);
        expect(dolgozat.Ervenytelen()).toBeFalsy();
    })
    it("Ha több tanuló nem írt, mint az osztály fele, akkor true", ()=>{
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(-1);
        dolgozat.PontFelvesz(90);
        dolgozat.PontFelvesz(100);
        expect(dolgozat.Ervenytelen()).toBeTruthy();
    })
})
