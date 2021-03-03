#Systemdokumentation

##Kurzanleitung

Um die App nutzen zu können musst du dich registrieren und anschliessend anmelden.

Wenn du ein Bänkli siehst, dass dir gefällt, klickst du auf das Plus auf dem Homescreen. Es öffnet sich eine Seite auf der du das Bänkli mit Bild, Kommentar und Bewertung erfassen kannst. Wenn du alle Daten erfasst hast, kannst du den Eintrag speichern, in dem du auf das Speichern-Icon oben rechts klickst.

Die Bänkli, die du erfasst hast, werden auf dem Homescreen aufgelistet. Um mehr über eines zu erfahren, klicke auf das Bild. Es öffnet sich eine Seite, auf der das Bild, der Kommentar sowie die Bewertung und der Standort des entsprechenden Bänkli angezeigt werden. Du hast hier auch die Möglichkeit, das Bänkli zu löschen.

##Persistenzlösung

Die Benutzerdaten werden im Backend gespeichert und verwaltet. Die Registrierung und die Anmeldung erfolgen über Rest-Calls ans Backend.

Die Bänkli werden im AsyncStorage gespeichert, um unnötige Komplexität und lange Ladezeiten zu verhindern.

##Sensoren

###GPS

Um den aktuellen Standort beim Erfassen eines Bänkli zu erhalten, benutze ich den GPS-Sensor des Handys über expo-location.

###Kamera

Damit man Bilder machen kann, habe ich einen Camerascreen erstellt. Mit expo-camera kann man ganz einfach Fotos machen und anschliessend deren Dateipfad abspeichern.

##Netzwerkfunktionalität

Wie weiter oben schon beschrieben, wird für die Benutzerverwaltung ein Backend verwendet, auf welches dementsprechend über das Netzwerk zugegriffen wird.

Es gibt zwei Rest Endpoints: einen für die Registrierung und einen fürs Anmelden.
