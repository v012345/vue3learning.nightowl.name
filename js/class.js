(function () {
    var Person = /** @class */ (function () {
        function Person(f, l) {
            this.f = f;
            this.l = l;
            this.full = f + " " + l;
        }
        return Person;
    }());
    function show(person) {
        return person.f + " " + person.l;
    }
    var person = new Person("aa", "bb");
    console.log(show(person));
})();
