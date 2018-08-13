// var a =document.getElementById("array").value.split(",");
function bubblesort(a) {

    var len = a.length;
    var i, j, jmax;


    for (i = 0; i < len; i++) {
        jmax = len - i;
        for (j = 0; j < jmax; j++) {
            if (a[j] > a[j + 1]) {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }

        }

    }
    return a;
}
// document.getElementById("demo").innerHTML=a;
console.log(bubblesort());
