
// osoba //radnik // profesor
class Osoba {
    constructor(ime, prezime, age,dorucak) {
        this.ime = ime,
        this.prezime = prezime,
            this.age = age,
            this.dorucak=dorucak
    }
    breakfast = () => console.log(`Doruckovao sam ${this.dorucak}`); 
}
class Radnik extends Osoba {
    constructor(ime, prezime, age, dorucak,profesija) {
        super(ime, prezime, age, dorucak)
            this.profesija = profesija
    }
    prof = () => console.log(`Moja profesija je ${this.profesija}`);

}
class Profesor extends Radnik {
    constructor(ime, prezime,age,dorucak,profesija,nista) {
        super(ime, prezime, age, dorucak, profesija),
            this.nista = nista;
    }
    nis = () => console.log(`Ja sam ${this.nista}`);
};
const profa = new Profesor("alen", "Kalac", 66, "mrznja", "povetarac", "hic");
profa.breakfast();
profa.prof();
profa.nis();
console.log(profa);