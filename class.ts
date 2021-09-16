(() => {
    interface IPerson {
        f: string
        l: string
    }
    class Person {
        f: string
        l: string
        full: string
        constructor(f: string, l: string) {
            this.f = f;
            this.l = l;
            this.full = f + " " + l;
        }
    }
    function show(person: IPerson) {
        return person.f + " " + person.l;
    }

    const person = new Person("aa", "bb");
    console.log(show(person));

})()