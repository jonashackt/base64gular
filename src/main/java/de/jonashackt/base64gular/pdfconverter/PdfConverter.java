package de.jonashackt.base64gular.pdfconverter;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;

@RestController
public class PdfConverter {
    @RequestMapping(value="/converter", method=RequestMethod.POST)
    public ResponseEntity<byte[]> convertPdf(@RequestBody Pdf pdf) {
        System.out.println("Called converter");
        byte[] decodedPdf = Base64.getDecoder().decode(pdf.getBase64Encoded());

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType("application/pdf"));

        ResponseEntity<byte[]> response = new ResponseEntity<byte[]>(decodedPdf, headers, HttpStatus.OK);
        return response;
    }
}
