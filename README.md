# Contacts

Для запуска необходимо ввести команду npm start

В приложении есть две страницы: страница входа и страница со списком контактов.

Для реализации авторизации используется API с моковыми данными:
https://jsonplaceholder.typicode.com

Страница контактов пользователя доступна только после авторизации.

На странице контактов есть возможность добавлять/удалять/редактировать контакты, также есть функция поиска.

JSONPlaceholder не имеет функций редактирования и создания. Приложение отрабатывает оптимистический рендеринг, показывая внесенные изменения, без проверки. CRUD-запрос отправляется в фономов режиме. После каждого такого запроса будет происходить запланированный сбой, и данные будут возвращаться к исходному типу. Для демонстарции фронтенда этого достаточно.
 
Авторизация проходит по любым парам логин/пароль.