var cuenta = /** @class */ (function () {
    function cuenta(saldo) {
        this.saldo = saldo;
    }
    cuenta.prototype.retirar = function (monto) {
        return this.saldo - monto;
    };
    return cuenta;
}());
var cta = new cuenta(50000);
var monto = parseInt(prompt("Ingrese monto a retirar"));
var resultado = cta.retirar(monto);
if (resultado >= 0)
    document.write("Tu saldo actual es: " + resultado);
else
    document.write("El saldo es insuficiente para realizar la acción");
