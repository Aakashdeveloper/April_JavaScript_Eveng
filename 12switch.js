// multiple condition and multiple output (ifelse)
// one condition one output(ternary)
// one condition and multiple output(switch)

var name = "Eva";
switch(name){
    case 'Aakash':
        console.log(`hi ${name}`)
        break;
    case 'Eva':
        console.log(`hi ${name}`)
        break;
    default:
        console.log(`hi ${name} you are unknown`)
}

Hi Eva

switch(new Date().getDay()){
    case 0:
        console.log(`Today is sunday`)
        break;
    case 1:
        console.log(`Today is Monday`)
        break;
    default:
        console.log(`Invalid Input`)
}

Today is Monday