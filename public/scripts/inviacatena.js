function CreaCatena(oraInizio, oraFine, LuogoInizio, LuogoFine, materiale) {
    var oraI = new Date(oraInizio);
    var oraF = new Date(oraFine);
    let catena = `Inizio il giorno ${switchDayWeek(oraI.getDay())} ${oraI.getDate()} ${switchMonth(oraI.getMonth())} alle ore ${oraI.getHours()}:${oraI.getMinutes()} nel luogo ${LuogoInizio}.\n`;
    catena += `Portare ${materiale.replaceAll('\n', ", ")}.\n`;
    catena += `Fine il giorno ${switchDayWeek(oraF.getDay())} ${oraF.getDate()} ${switchMonth(oraF.getMonth())} alle ore ${oraF.getHours()}:${oraF.getMinutes()} nel luogo ${LuogoFine}.`;
    console.log("catena :\n" + catena);
    return catena;
}

function switchDayWeek(day){
    switch(day){
        case 0:
            return "Domenica"
        case 1:
            return "Lunedì"
        case 2:
            return "Martedì"
        case 3:
            return "Mercoledì"
        case 4:
            return "Giovedì"
        case 5:
            return "Venerdì"
        case 6:
            return "Sabato"
    }
}

function switchMonth(month){
    switch(month){
        case 0:
            return "Gennaio"
        case 1:
            return "Febbraio"
        case 2:
            return "Marzo"
        case 3:
            return "Aprile"
        case 4:
            return "Maggio"
        case 5:
            return "Giugno"
        case 6:
            return "Luglio"
        case 7:
            return "Agosto"
        case 8:
            return "Settembre"
        case 9:
            return "Ottobre"
        case 10:
            return "Novembre"
        case 11:
            return "Dicembre"
    }
}

function sendCatena(c){
    if(c == "" || c.includes("undefined") || c.includes("NaN")){
        alert("Dati inseriti non validi");
        return;
    }
    let conferma = confirm("Se invii la catena dal browser non sarà inviata una notifica. Proseguire?");
    if(conferma){
        firestore.collection('Catene').doc('Catena').set({
            catena: c
        });
    }
}