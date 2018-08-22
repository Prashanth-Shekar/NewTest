document.getElementById("input").addEventListener('input',function(e){
    console.log(123);
    let kg = e.target.value;
    document.getElementById('gramsOutput').innerHTML= kg/0.0022046;
    document.getElementById('kgOutput').innerHTML= kg;
    document.getElementById('ozOutput').innerHTML= kg*35.275;

});