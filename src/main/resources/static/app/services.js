

base64gular.service('PdfService', function PdfService($http) {
    'use strict';

    this.convertPdf = function(encodedPdf) {
        return $http.post('http://localhost:8087/converter', encodedPdf).
            then(function(response) {
                return response.data;
            })
    }
});

