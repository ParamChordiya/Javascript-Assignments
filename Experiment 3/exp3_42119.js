function reverse() {
    let s = "";
    var str = document.getElementById("1").value;
    for (let i = str.length - 1; i >= 0; i--) {
        s += str[i];
    }
    document.getElementById("display1").innerHTML = s;
}

function palindrome() {
    let s = "";
    var str = document.getElementById("1").value;
    for (let i = str.length - 1; i >= 0; i--) {
        s += str[i];
    }
    let b = (s === str);
    document.getElementById("display1").innerHTML = b;
}

function replace_characters() {
    var s = document.getElementById("2").value;
    var b = document.getElementById("3").value;
    var str = document.getElementById("1").value;

    var newstr = str.replace(s, b);
    document.getElementById("display1").innerHTML = newstr;
}