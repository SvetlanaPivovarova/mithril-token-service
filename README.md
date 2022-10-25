# Проект: mithril-token-service

**Интро**

Репозиторий для фронтенд-части тестового приложения - интерфейс для добавления нового токена, просмотра существующих токенов, а также отзыва (удаления) токена.

**Содержание**

    1. Страница /tokens должна выдать список всех токенов в виде таблицы с полями:
        1. Название домена (строка).
        2. Токен (строка).
        3. Удалить (ссылка на страницу удаления).
    2. Страница добавления токена /add-token, на которой нужно вывести поле «Название домена» и кнопку «Добавить». После нажатия на кнопку, нужно вывести сообщение, что токен добавлен и переадресовать на страницу со списком токенов. Генерацию самого токена будет производить бэкенд. Бэкенд написан самостоятельно.
    3. Страница /token/token-id/delete которая выводит вопрос «Вы точно хотите удалить данный токен для организации такой-то?». Если человек нажимает кнопку «Да», то производим удаление токена (опять же на стороне бэкенде фактически будет отдаваться ответ в виде готового json файла), выводим сообщение об удалении и переадресуем на страницу со списком токенов. Если человек нажимает «Отмена», то переадресуем на страницу со списком всех токенов.

**Технологии**

В проекте применены:
* фреймворк MithrilJS;
* методология БЭМ;
* flex-верстка.

**Размещение проекта**

[mithril-token-service](https://svetlanapivovarova.github.io/mithril-token-service/) \
[server](https://api.pivovarova.diploma.nomoredomains.xyz/)
