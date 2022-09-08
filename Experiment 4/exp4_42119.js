function method1() {
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;
    let val = (str1 == str2);
    let s = val.toString();
    console.log(s);
    document.getElementById("display1").innerHTML = s;
}

function method2() {
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;
    let val = (str1 === str2);
    let s = val.toString();
    console.log(s);
    document.getElementById("display2").innerHTML = s;
}

function method3() {
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;
    let val = str1.localeCompare(str2);
    let s = val.toString();
    console.log(s);
    document.getElementById("display3").innerHTML = s;
}