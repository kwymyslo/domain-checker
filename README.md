# domain-checker

## `ℹ️` Opis

Prosty skrypt, który regularnie sprawdza status rejestracji domeny w bazie WHOIS. W momencie, gdy domena jest wolna, wysyła powiadomienie e-mail, co pozwala na jej szybkie przechwycenie.

## `✅` Pierwsze użycie

1. Uzupełnij plik `.env`.
2. Zainstaluj wymagane zasoby, używając komendy `npm install`.
3. Uruchom skrypt plikiem `win-start.bat` lub komendą `node index.js`.

## `❗` Dodatkowe informacje

- Wymagana jest najnowsza wersja [node.js](https://nodejs.org/).
- Skrypt jest domyślnie skonfigurowany pod Gmail, jednak można dostosować go do dowolnego serwisu webmail.
- W przypadku korzystania z Gmaila, zamiast wpisywania hasła do konta Google, wygeneruj [hasło aplikacji](https://support.google.com/accounts/answer/185833).
- Adres odbiorcy może być taki sam jak adres nadawcy.
- Zbyt krótki odstęp czasu między sprawdzeniami może skutkować zablokowaniem adresu IP przez serwis WHOIS.
