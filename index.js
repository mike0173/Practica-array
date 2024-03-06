let instruments = [];
let carros = ["ferrari", "audi","maserati"];
let variado = ["leon", 10, true];
let frutas = new Array ("manzana", "pera", "banano", "piña");
let numerito = Array.from ({ length: 5 }, (_, index) => index);
let repetir =Array(7). fill (0);
let texto = String.split("Se da garra");
let array1 = [5, 10, 15];
let array2 = [20, 25, 30];
let combinacion = [ ...array1, ...array2];
let cancelacion = [1, 2, 2, 3, 4, 4, 5];
let duplicados = new set (cancelacion);
let final = [ ...duplicados];
function tablas (matriz){
    return Array.from(matriz,(a,e)=>{
        let table = new Array(10)
        for (let i = 0; i < 10; i++){
            table[i] = a * (i + 1)
        }
    })
}
let nose1 = [1, 2, 3, 4, 5];
let longitud = nose1.length;
let array = [1, 2, 3];
array.push(4);
let quitar = [1, 2, 3, 4, 5];
quitar.pop();
let principio = [4, 5];
principio.unshift(1, 2, 3);
let quitarprincipio = [1, 2, 3, 4, 5];
quitarprincipio.shift().shift();
let posicion = [1, 2, 3, 4, 5];
let final1 = posicion.slice();
let palabritas = ["se", "da", "garra", "mano"];
let resultado = palabritas.join("-");
var a = ["a", "e", "i", "o", "u"];
a.slice(1,3);
a.slice(3);
a.slice(-4,-1);
const elimina = [1, 2, 3, 4, 5];
const finall = elimina.slice(0, 1).concat(elimina.slice(3));
