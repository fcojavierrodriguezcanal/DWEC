function crearTabla(){
    let filas= parseIntprompt('introduce numero de filas');
    let columnas=parseIntprompt('introduce numero de columnas');
    const nombres=["Gustavo", "Alfredo", "Johnny", "Walter", "Javier", "Stacy", "Angela", "Sussy", "Pepa", "Rodolfo"];
    const edad=["5","20","14","45","30","63","17","52","89","10"];
    for(let i=0;i<filas;i++){
        let numFila= document.getElementById('tabla').insertRow(i);

        for(let j=0;j<columnas;j++){
            let celda= numFila.insertCell(j);
            let indice= Math.floor(Math.random() * 10);

            celda.innerHTML = nombres[indice]+ " " + edad[indice];
        }
    }
}