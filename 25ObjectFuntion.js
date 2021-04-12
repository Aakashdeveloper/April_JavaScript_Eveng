function langauge(name,country){
    this.name = name;
    this.country = country;
    this.greet = function(){
        return `Say Hi to ${name}`
    }
}

// constructor methods
var Hindi = new langauge('Hindi','India')
Hindi
langauge {name: "Hindi", country: "India", greet: ƒ}
Hindi.greet()
"Say Hi to Hindi"
Hindi.country
"India"

//es6
class langauge1{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet = () => {
        return `Say Hi to ${this.name}`
    }
}

var English = new langauge('English','Uk')