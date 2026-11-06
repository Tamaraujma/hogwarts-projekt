Pseudokode

GET /[ressource]
- Alle elementer hentes fra databasen.
- Listen sendes tilbage.
- Ved der er fejl bliver der sendt et fejlsvar.

GET /[ressource]/:id
- Id'et fra URL'en.
- Find elementet med det id.
- Hvis det er fundet sendes elementet tilbage.
- Hvis det ikke er fundet sendes statuskoden 404.
- Ved fejl bliver der sendt fejlsvar.

POST /[ressource]
- Dataen bliver læst fra request body.
- Nyt element oprettes i databasen.
- Det nye element sendes tilbage.
- Ved fejl bliver der sendt  fejlsvar.

PUT /[ressource]/:id
- Id'et bliver læst fra URL'en og data fra body.
- Elementer opdateres med det id.
- Hvis det ikke er fundet sendes det opdateret element tilbage.
- Hvis det ikke er fundet sendes statuskoden 404.
- Ved fejl bliver der sendt fejlsvar.

DELETE /[ressource]/:id
- Id'et bliver læst fra URL.
- Elementet slettes med det id.
- Hvis det er fundet bliver der sendt en bekræftelse.
- Hvis det ikke er fundet bliver der sendt statuskoden 404.
- Ved fejl bliver der sendt et fejlsvar.

Samme mønster bruges for:
- houses
- teachers
- students
- courses

Roller i koden
- Router: sender request videre til controller.
- Controller: håndterer request og response.
- Repository: står for databasekald.
