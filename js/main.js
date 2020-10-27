// main ejercio 2
var app = new Vue({
    el: '#app',
    data: {
        Horas: 0,
        msgPago: "",
        msgPagoInpuestos: ""
    },
    methods: {
        calcularPago: function() {
            if (this.Horas <= 9) {
                horasNormales = this.Horas * 20;
                var Totalapagar = (horasNormales * 4200) + 230000;
            } else {
                var totalhoras = this.Horas * 20;
                var aumento = 4200 * 0.5;
                var valHorasExtra = 4200 + aumento;
                var numHoraExtras = this.Horas - 9;
                var horasExtras = numHoraExtras * 20;
                var totValHorExtra = horasExtras * valHorasExtra;
                var horaNormales = totalhoras - horasExtras;
                var totValHorNormal = horaNormales * 4200;
                var Totalapagar = totValHorExtra + totValHorNormal + 230000;
            }
            if (Totalapagar < 600000) {
                var bono = Totalapagar * 0.1;
                var totalSueldo = Totalapagar + bono;
                this.msgPago = "El valor del sueldo es de " + totalSueldo
                this.msgPagoInpuestos = "No pagara impuestos resibes una bonoficacion del 10%"
            } else if (Totalapagar >= 600000 && Totalapagar <= 1000000) {
                var inpuesto = Totalapagar * 0.2;
                var totalSueldo = Totalapagar - inpuesto;
                this.msgPago = "El valor del sueldo es de " + totalSueldo
                this.msgPagoInpuestos = "si pagara impuestos"
            } else {
                var inpuesto = Totalapagar * 0.5;
                var totalSueldo = Totalapagar - inpuesto;
                this.msgPago = "El valor del sueldo es de " + totalSueldo
                this.msgPagoInpuestos = "si pagara impuestos"
            }
        }

    },
})