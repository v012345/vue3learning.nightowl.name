(function () {
    function name(p) {
        return p.f + " " + p.l;
    }
    var person = {
        f: "f",
        l: "l"
    };
    console.log(name(person));
})();
