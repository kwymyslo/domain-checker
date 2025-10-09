# domain-checker 1.0

## `ℹ️` Opis

Prosty skrypt, który regularnie sprawdza status rejestracji domeny w bazie WHOIS. W momencie, w którym domena jest wolna, wysyła powiadomienie e-mail, co pozwala na jej szybkie przechwycenie.

## `✅` Pierwsze użycie

1. Uzupełnij plik `.env`
2. `npm install`
3. `node index.js`

## `❗` Dodatkowe informacje

- Wymagana jest najnowsza wersja [node.js](https://nodejs.org/)
- Skrypt jest domyślnie ustawiony pod Gmail, jednakże można go skonfigurować pod dowolny serwis webmail
- Adres odbiorcy może być taki sam jak adres nadawcy
- Ustawienie zbyt krótkiego czasu między sprawdzeniami może skutkować zablokowaniem adresu IP przez serwis WHOIS