

base64gular.controller('Base64gularCtrl', ['PdfService', function(PdfService) {
    'use strict';

    var ctrl = this;
    ctrl.pdf = {
        base64endcodedPdf: ""
        };
    ctrl.decodedPdf = [];

    ctrl.convertPdf = function() {
        window.open("data:application/pdf;base64, " + ctrl.pdf.base64endcodedPdf);

        //ctrl.decodedPdf = PdfService.convertPdf(ctrl.pdf);

        //window.open("data:application/pdf;byte[]," + ctrl.decodedPdf,'_blank','height=600,width=400');
    };
}]);