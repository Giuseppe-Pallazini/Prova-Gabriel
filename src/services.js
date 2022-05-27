
export function semaforo(cor) {

    if (cor == "verde") {
        return "Pode passar";
    }

    else if (cor == "vermelho") {
        return "Aguarde";
    }

    else {
        return "Inválido"
    }
}

export function semana(dia) {

    if (dia == "0") {
        return "domingo"
    }

    else if (dia == "1") {
        return "segunda"
    }

    else if (dia == "2") {
        return "terça"
    }

    else if (dia == "3") {
        return "quarta"
    }

    else if (dia == "4") {
        return "quinta"
    }

    else if (dia == "5") {
        return "sexta"
    }

    else if (dia == "6") {
        return "sábado"
    }

    else {
        return "Inválido"
    }
}

export function fatorial(num){
    let x = 1
    for(let i = num; i > 1; i--) {
        x = x * i
    }
    return x;
}


export function sequencia(limite) {

    for (let cont = 0; cont < limite; cont++)
        if (cont % 2 == 0) {
            return cont;
        }
}


