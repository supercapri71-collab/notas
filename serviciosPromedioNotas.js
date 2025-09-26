// funcion calcula el promedio
calcularPromedio = function (nota1, nota2, nota3) {
    let suma;
    let prome;
    suma = nota1 + nota2 + nota3;
    prome = suma / 3;
    prome = prome.toFixed(2);
    return prome;
}
