(() => {
    interface Iperson {
        f: string
        l: string
    }
    function name(p: Iperson) {
        return p.f + " " + p.l;
    }
    const person = {
        f:"f",
        l:"l"
    }
    console.log(name(person))
})()