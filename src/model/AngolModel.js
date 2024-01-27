import { szenvedoMondatok } from "./angol";
export default class AngolModel {
  #lista = [];
  #aktIndex = 2;
  #aktMondat = {};
  #pont = 0;
  constructor() {
    this.#lista = szenvedoMondatok;
    this.setMondat();
  }

  /* 
    Cím-témakör
    Súgószöveg
    Aktuális mondat
    */
  getCim() {
    return this.#lista[0];
  }

  getSugo() {
    return this.#lista[1];
  }

  setMondat() {
    this.#aktMondat = this.#lista[this.#aktIndex];
    this.#aktMondat.helyes = this.#aktMondat.valasztas[0];
    this.#aktMondat.valasztas.sort(() => {
      return 0.5 - Math.random();
    });
    this.#aktMondat.valasztas.unshift("Válassz...");
    /* a helyes megoldas */
    /* a valasztas értékei keverve legyenek */
  }

  getMondat() {
    return this.#aktMondat;
  }

  setAktIndex() {
    this.#aktIndex++;
    if(this.#aktIndex >= this.#lista.length-1){
        this.#aktIndex = 2;
    }

    this.setMondat();
  }

  getAktIndex() {
    return this.#aktIndex;
  }
}
