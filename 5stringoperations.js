var city = "lOndon";
undefined
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"


var city = "lOndon";
city[0]
"l"
city[1]
"O"

var name = "  Bhumika  "
name.length
11
name.trim()
"Bhumika"
name.trim().length
7

//case sensitive
var a = "john"
undefined
var b = "John"
undefined
a == b
false
a.toLowerCase() == b.toLowerCase()
true

var a = "  Bhumika . "
undefined
a.trim()
"Bhumika ."

var city = "amsTerDam"
undefined
city.charAt(0)
"a"
city.slice(1)
"msTerDam"
city.slice(2)
"sTerDam"
city.charAt(0).toUpperCase()
"A"
city.slice(1)
"msTerDam"
city.slice(1).toLowerCase()
"msterdam"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"