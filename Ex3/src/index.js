/* 
Monte um vetor de 6 lugares que irá sortear 
6 números entre 1 a 60 aleatoriamente, com as seguintes condições
1. Os 6 números não podem ser iguais.
2. Eles devem ser apresentados em ordem crescente.
3. Os 3 primeiros números não devem estar na casa 0 ao 20 e do 21 ao 45
4. Os 3 últimos devem estar na casa dos 46 ao 55 e o último 56 até 60.
*/


<p id="nr"></p>
const numeros = [0, 1, 3, 56, 57, 60];
document.getElementById(nr).innerHTML = numeros;

function myFunction() {
  numeros.sort(function(){return 0.5 - Math.random()});
  document.getElementById(nr).innerHTML = numeros;

}
