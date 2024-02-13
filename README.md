
# Directory Tree CLI

Das Directory Tree CLI ist ein Node.js-basiertes Kommandozeilen-Tool, das eine grafische Darstellung der Verzeichnisstruktur eines gegebenen Pfades anzeigt. Es unterstützt die Internationalisierung, indem es automatisch die Systemsprache erkennt und entsprechende Übersetzungen verwendet.

## Features

- Anzeige der Verzeichnisstruktur mit Unterstützung für die Ausblendung spezifischer Verzeichnisse (z. B. `node_modules`).
- Automatische Erkennung der Systemsprache und Anzeige der Ausgabe in dieser Sprache.
- Fallback auf Englisch, falls Übersetzungen für die erkannte Sprache nicht verfügbar sind.

## Voraussetzungen

Stellen Sie sicher, dass Node.js und npm auf Ihrem System installiert sind, um das Directory Tree CLI zu verwenden.

## Installation

Das Tool kann global über npm installiert werden:

```bash
npm install -g dir-tree-cli
```

## Verwendung

Nach der Installation können Sie das Tool wie folgt verwenden:

```bash
dir-tree [Pfad] [Ignorieren]
```

- `[Pfad]` (optional): Der Pfad des Verzeichnisses, dessen Struktur angezeigt werden soll. Standardmäßig wird das aktuelle Verzeichnis verwendet.
- `[Ignorieren]` (optional): Ein Verzeichnisname, der bei der Anzeige der Verzeichnisstruktur ignoriert werden soll. Standardmäßig wird `node_modules` ignoriert.

Beispiel:

```bash
dir-tree ./meinProjekt
```

## Internationalisierung

Das Tool erkennt automatisch die Systemsprache und verwendet entsprechende Übersetzungen für die Ausgabe. Aktuell unterstützte Sprachen sind Englisch und Deutsch. Sie können Übersetzungen in der Datei `./locales/{{lng}}/translation.json` hinzufügen oder bearbeiten.

## Beitrag

Feedback und Beiträge sind herzlich willkommen. Bitte erstellen Sie Issues oder Pull Requests im GitHub-Repository, wenn Sie zur Verbesserung des Tools beitragen möchten.

## Lizenz

Das Directory Tree CLI ist unter der MIT-Lizenz veröffentlicht. Details finden Sie in der [LICENSE](LICENSE)-Datei.
