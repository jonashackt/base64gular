package de.jonashackt.base64gular.pdfconverter;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Pdf {

    private String base64endcodedPdf;

    public String getBase64endcodedPdf() {
        return base64endcodedPdf;
    }

    public void setBase64endcodedPdf(String base64endcodedPdf) {
        this.base64endcodedPdf = base64endcodedPdf;
    }
}
