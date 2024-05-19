export class Dolgozat{
    #pontokLista;

    constructor(){
        this.#pontokLista = [];
    }

    PontFelvesz(number){
        if(number < -1 || number > 100){
            throw new Error ("kisebb, mint -1");
        }else if(number == ""){
            throw new Error ("üres");
        }else if(number == null){
            throw new Error ("null");
        }else if(!Number.isInteger(number)){
            throw new Error ("tört");
        }
        else{
            this.#pontokLista.push(number);
            return true;
        }
    }

    MindenkiMegirta(){
        let count = 0;
        this.#pontokLista.forEach(element => {
            if(element == -1){
                count++;
            }
        });
        if(count == 0){
            return true;
        }else{
            return false;
        }
        
    }

    Bukas(){
        let count = 0;
        this.#pontokLista.forEach(element => {
            if(element < 50 && element != -1){
                count ++;
            }
        });
        return count;
    }

    Elegseges(){
        let count = 0;
        this.#pontokLista.forEach(element =>{
            if(element <= 60 && element >= 50 && element != -1){
                count++;
            }
        })
        return count;
    }

    Kozepes(){
        let count = 0;
        this.#pontokLista.forEach(element =>{
            if(element <= 70 && element >= 61 && element != -1){
                count++;
            }
        })
        return count;
    }

    Jo(){
        let count = 0;
        this.#pontokLista.forEach(element => {
            if(element <= 80 && element >= 71 && element != -1){
                count ++;
            }
        });
        return count;
    }

    Jeles(){
        let count = 0;
        this.#pontokLista.forEach(element => {
            if(element >= 81 && element != -1){
                count++;
            }
        });
        return count;
    }

    Gyanus(kivalok){
        if(kivalok >= 0){
            let count = 0;
            this.#pontokLista.forEach(element => {
                if(element >= 81 && element != -1){
                    count++;
                }
            });
            if( count > kivalok){
                return true
            }
            else{
                return false;
            }
        }
        else{
            throw new Error("Kivalók száma nem lehet 0-nál kevesebb")
        }
       
    }

    Ervenytelen(){
        let count = 0
        this.#pontokLista.forEach(element => {
            if( element == -1){
                count ++;
            }
        });
        if( count >= this.#pontokLista.length / 2){
            return true
        }
        else{
            return false;
        }
    }
}