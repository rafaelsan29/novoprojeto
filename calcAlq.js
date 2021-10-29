//faixas do simples
const faixa1 = 180000
const faixa2 = 360000
const faixa3 = 720000
const faixa4 = 1800000
const faixa5 = 3600000
const faixa6 = 4800000
// VARIAVEIS QUE RECEBEM VALORES
let faturamento12meses = document.getElementById("faturamento12meses")
let anexosimples = document.getElementById("anexosimples")
let fatorR = document.getElementById("fatorR")

function calcular() {
    if (anexosimples == 3 && faturamento12meses <= faixa1) {
        (((AliquotaEfetiva = (faturamento12meses * 0.06) - 0) / faturamento12meses))
    }
    else if (anexosimples == 3 && faturamento12meses > faixa1 && faturamento12meses < faixa2) {
        (((AliquotaEfetiva = (faturamento12meses * 0.120) - 9360) / faturamento12meses))
    } else if (anexosimples == 3 && faturamento12meses > faixa2 && faturamento12meses < faixa3) {
        ((AliquotaEfetiva = (faturamento12meses * 0.135) - 17640) / faturamento12meses)
    } else if (anexosimples == 3 && faturamento12meses > faixa3 && faturamento12meses < faixa4) {
        (((AliquotaEfetiva = faturamento12meses * 0.160) - 35640) / faturamento12meses)
    } else if (anexosimples == 3 && faturamento12meses > faixa4 && faturamento12meses < faixa5) {
        (((AliquotaEfetiva = faturamento12meses * 0.210) - 125640) / faturamento12meses)
    } else if (anexosimples == 3 && faturamento12meses > faixa5 && faturamento12meses < faixa6) {
        (AliquotaEfetiva = "isento de iss")
    } else if (anexosimples == 4 && faturamento12meses <= faixa1) {
        (((AliquotaEfetiva = faturamento12meses * 0.045) - 0) / faturamento12meses)
    } else if (anexosimples == 4 && faturamento12meses > faixa1 && faturamento12meses < faixa2) {
        (((AliquotaEfetiva = faturamento12meses * 0.09) - 8100) / faturamento12meses)
    } else if (anexosimples == 4 && faturamento12meses > faixa2 && faturamento12meses < faixa3) {
        (((AliquotaEfetiva = faturamento12meses * 0.102) - 12420) / faturamento12meses)
    } else if (anexosimples == 4 && faturamento12meses > faixa3 && faturamento12meses < faixa4) {
        (((AliquotaEfetiva = faturamento12meses * 0.140) - 39780) / faturamento12meses)
    } else if (anexosimples == 4 && faturamento12meses > faixa4 && faturamento12meses < faixa5) {
        (((AliquotaEfetiva = faturamento12meses * 0.220) - 183780) / faturamento12meses)
    } else if (anexosimples == 4 && faturamento12meses > faixa5 && faturamento12meses < faixa6) {
        (AliquotaEfetiva = "isento de iss")
    } else if (anexosimples == 5 && faturamento12meses <= faixa1) {
        (((AliquotaEfetiva = faturamento12meses * 0.155) - 0) / faturamento12meses)
    } else if (anexosimples == 5 && faturamento12meses > faixa1 && faturamento12meses < faixa2) {
        (((AliquotaEfetiva = faturamento12meses * 0.180) - 4500) / faturamento12meses)
    } else if (anexosimples == 5 && faturamento12meses > faixa2 && faturamento12meses < faixa3) {
        (((AliquotaEfetiva = faturamento12meses * 0.195) - 9900) / faturamento12meses)
    } else if (anexosimples == 5 && faturamento12meses > faixa3 && faturamento12meses < faixa4) {
        (((AliquotaEfetiva = faturamento12meses * 0.205) - 17100) / faturamento12meses)
    } else if (anexosimples == 5 && faturamento12meses > faixa4 && faturamento12meses < faixa5) {
        (((AliquotaEfetiva = faturamento12meses * 0.230) - 62100) / faturamento12meses)
    } else if (anexosimples == 5 && faturamento12meses > faixa5 && faturamento12meses < faixa6) {
        (AliquotaEfetiva = "isento de iss")
    }
    document.getElementById("aliquotaefetiva").innerHTML = AliquotaEfetiva;
}
