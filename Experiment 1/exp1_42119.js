function AreaCIRCLE() {
    var radius = parseInt(document.getElementById("radius").value);
    console.log(typeof (radius));
    var area = Math.PI * radius * radius;
    document.getElementById("display").innerHTML = area;
}

function AreaTriangle() {
    var side1 = parseInt(document.getElementById("side1").value);
    var side2 = parseInt(document.getElementById("side2").value);
    var side3 = parseInt(document.getElementById("side3").value);
    console.log(typeof (side1));
    var s = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
    document.getElementById("display").innerHTML = area;
}

function AreaRECTANGLE() {
    var length = parseInt(document.getElementById("length").value);
    var breadth = parseInt(document.getElementById("breadth").value);
    console.log(typeof (length));
    var area = length * breadth;
    document.getElementById("display").innerHTML = area;
}