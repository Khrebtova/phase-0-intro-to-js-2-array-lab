const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push('Ralph');
}
function beforeeachfunction() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function beforeeachfunction() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

function destructivelyRemoveLastCat(){
    cats.pop();
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

function appendCat(){
    return [...cats, 'Broom'];
}

function prependCat(){
    return ["Arnold", ...cats];
}

function removeLastCat(){
    return cats.slice(0, -1);
}

function removeFirstCat(){
    return cats.slice(1);
}