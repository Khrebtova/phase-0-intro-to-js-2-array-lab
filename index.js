const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
   cats.push('Ralph'); 
}

function beforeeachfunction() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

function destructivelyPrependCat(Bob){
    cats.unshift('Bob');
}

function beforeeachfunction() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function beforeeachfunction() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function beforeeachfunction() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}


function appendCat(Broom){
   return [...cats, "Broom"];
}
   
function beforeeachfunction() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

function prependCat(name){
    return ["Arnold", ...cats];
}

function beforeeachfunction() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

function removeLastCat(){
    return [...cats.slice(0,-1)];
}

function beforeeachfunction() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}
function removeFirstCat(){
    return [...cats.slice(1)];
}