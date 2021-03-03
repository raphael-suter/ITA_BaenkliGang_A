#Testdokumentation

##Sign Up

1. Klicke auf "Sign In" am unteren Bildschirmrand. **Expected:** Der SignInScreen wird geöffnet.

2. Sende das Formular ab, ohne eine E-Mail-Adresse einzugeben. **Expected:** Die Meldung "E-Mail-Adresse darf nicht leer sein." erscheint.

3. Sende das Formular mit einer E-Mail-Adresse ab, die bereits registriert ist. **Expected:** Die Meldung "Diese E-Mail-Adresse wird bereits verwendet." erscheint.

4. Sende das Formular ab, ohne ein Passwort einzugeben. **Expected:** Die Meldung "Passwort darf nicht leer sein." erscheint.

5. Sende das Formular ab, ohne das Passwort zu wiederholen. **Expected:** Die Meldung "Passwörter stimmen nicht überein." erscheint.

6. Sende das Formular korrekt ausgefüllt ab. **Expected:** Der SignInScreen wird geöffnet.

##Sign In

1. Klicke auf "Sign Up" am unteren Bildschirmrand. **Expected:** Der SignUpScreen wird geöffnet.

2. Sende das Formular ab, ohne eine E-Mail-Adresse einzugeben. **Expected:** Die Meldung "Dieser Benutzer wurde nicht gefunden." erscheint.

3. Sende das Formular ab, ohne ein Passwort einzugeben. **Expected:** Die Meldung "Falsches Passwort." erscheint.

4. Sende das Formular korrekt ausgefüllt ab. **Expected:** Der HomeScreen wird geöffnet. Bei erneutem Öffnen der App wird man direkt auf den HomeScreen umgeleitet.

##Home

1. Klicke auf das Icon in der Toolbar. **Expected:** Der SignInScreen wird geöffnet. Bei erneutem Öffnen der App bleibt man auf dem SignInScreen.

2. Klicke auf das "+" unten rechts. **Expected:** Der CreateScreen wird geöffnet.

3. Klicke auf einen Eintrag in der Liste. **Expected:** Der ItemScreen wird geöffnet und der eben angeklickte Eintrag angezeigt.

##Create

1. Klicke auf das Icon in der Toolbar. **Expected:** Die Meldung "Bitte füge ein Foto hinzu." erscheint.

2. Füge ein Foto hinzu und klicke auf das Icon in der Toolbar. **Expected:** Die Meldung "Bitte füge einen Kommentar hinzu." erscheint.

3. Füge einen Kommentar hinzu und klicke auf das Icon in der Toolbar. **Expected:** Die Meldung "Bitte füge eine Bewertung hinzu." erscheint.

4. Füge eine Bewertung hinzu und klicke auf das Icon in der Toolbar. **Expected:** Der HomeScreen öffnet sich. Der eben erstellte Eintrag erscheint dort in der Liste. Ist die Bewertung kleiner als 1, wird sie auf 1 korrigiert. Ist die Bewertung grösser als 5, wird sie auf 5 korrigiert.

##Camera

1. Klicke auf den Foto-Button. **Expected:** Der CreateButton wird geöffnet und das eben gemachte Bild angezeigt.

##Item

1. Klicke auf das Icon in der Toolbar. **Expected:** Der HomeScreen wird geöffnet. Der eben angezeigte Eintrag befindet sich nicht mehr in der Liste.
