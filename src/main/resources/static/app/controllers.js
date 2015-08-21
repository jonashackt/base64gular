

base64gular.controller('Base64gularCtrl', ['PdfService', function(PdfService) {
    'use strict';

    var ctrl = this;
    ctrl.pdf = {
        base64endcodedPdf: "here the base 64 encoded pdf should be"
        };
    ctrl.decodedPdf = [];

    ctrl.convertPdf = function() {
        ctrl.decodedPdf = PdfService.convertPdf(ctrl.pdf);
    };
}]);