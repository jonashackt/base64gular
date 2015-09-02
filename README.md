# Convert a Base64-encoded String into a PDF and open a Browser-Tab to view it with one click
[![Build Status](https://travis-ci.org/jonashackt/base64gular.svg?branch=master)](https://travis-ci.org/jonashackt/base64gular)

While building SOAP-Webservices (like [the one here]), one for shure get´s in touch with sending Attachments (e.g. PDF-Files) via SOAP. These often get base64-encoded and packed inside the Reponse. Now you ask yourself, if this base64-String is a valid PDF and looks like you intended. So here´s a small app to solve the problem - just copy-paste the String inside the GUI and click "convert".

### HowTo Use

Run "mvn clean install"-command at command-line

Then, you could use Spring Boot with maven to expose your SOAP-Webservices
```sh
mvn spring-boot:run
```
or run the build .jar-File with
```sh
java -jar soap-spring-boot-cxf-0.0.5-SNAPSHOT.jar
```

### Done´s
* Angular-App
* REST-Backend

### Todo's

* Sending SOAP-Requests

[the one here]:https://github.com/jonashackt/soap-spring-boot-cxf
