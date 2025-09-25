obtienePromedio = function () {
     //variables para recuperar los valores de las cajas de texto
     let nota1;
     let nota2;
     let nota3;
     let suma;
     let cmpResu;

     nota1 = parseFloat(document.getElementById("txtNota1").value);
     nota2 = parseFloat(document.getElementById("txtNota2").value);
     nota3 = parseFloat(document.getElementById("txtNota3").value);
     prome = calcularPromedio(nota1, nota2, nota3);
     mostrarTexto("lblProme", prome);

     cmpImageBandera = document.getElementById("imgBandera");
     if (prome > 0 && prome < 5) {
          cmpResu = document.getElementById("lblResu");
          cmpResu.innerText = (cmpResu," Por lo Tanto es : REPROBADO ");
          cmpImageBandera.src = "triste.png";
     } else {
          if (prome > 4.99 && prome <8.01) {
               cmpResu = document.getElementById("lblResu");
               cmpResu.innerText =  " Por lo Tanto es considerado : BUEN TRABAJO ";
               cmpImageBandera.src = "espere.jpg";
          } else {
               if (prome > 8.01 && prome < 10.01) {
                    cmpResu = document.getElementById("lblResu");
                    cmpResu.innerText = "Por lo Tanto su desempeño es : EXCELENTE ";
                    cmpImageBandera.src = "alegre.png";
               } else {
                    cmpResu = document.getElementById("lblResu");
                    cmpResu.innerText = " No Manolo .. MAL INGERESADO ";
                    cmpImageBandera.src = "paralo.png";
               }
          }
     }
}
