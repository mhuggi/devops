# Devops projekt
### Grupp: Salmi Emil, Långnabba Joel, Häll Christian, Sandelin Thomas
## Uppg 1: Pull request pipeline
En kontinuerlig pipeline triggas när en pull request utförs för master branchen. Sedan krävs en review av någon annan för att merge ska fungera. Merge fungerar heller inte om builden inte lyckas.
## Uppg 2: Codepipeline
En kontinuerlig pipeline konfigurerat för att triggas igång på merge till vår master-branch. Denna pipeline bygger koden, som bl.a. kör våra React-test. Ifall vår applikation byggs utan fel så kopierar den vår kod och artifacts till en S3-bucket. Med denna pipeline uppnår vi en god kontinuerlig leverans när vi utvecklar våran applikation.
Fas:
- Source    -> Våran GitHub-repository med källkoden
- Build     -> Bygger vår applikation samt kör tester
- Deploy    -> Ifall applikationen byggs utan fel, kopiera koden och artifacts till vår S3-bucket
## Uppg 3: React app
Appen är skapat med create-react-app. Väldigt simpel app för att söka data från en API som är hostad på AWS. När man trycker på knappen så skickar appen en Get request mha axios till AWS APIn. 
APIn fungerar med lambda funktion.
## Uppg 4: React test
React testerna använder react test library. Testerna testar att appen laddas, text laddas in, och när man trycker på knappen så söker den datan.
Knapp-testet är en asynkron funktion som väntar på att apin laddas in och testar efter det.
## Uppg 5: Build status notification
Ett CloudWatch Alarm skickas till ett SNS Topic om builds/minut överstiger noll. En Lambda-funktion prenumererar på SNS topic, som i sin tur skickar ett meddelande i Discord.
