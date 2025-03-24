 const ids = [1,2,3]
 const obj = ids.map(chave => ({chave}))
 console.log(obj);

 const arry = [1,2,3]
 const dobrado = arry.map(
    function(parametro){
        return parametro * 2
    }
)

console.log(dobrado);


const celcius = [0,10,20,30,40,50];

const fahrenheit = celcius.map(
    temperatura => (temperatura * 9/5) + 32
)