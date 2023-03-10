# Как работать с проектом
Читай или умри

## Че надо поставить
- На винде скачать отсюда https://github.com/coreybutler/nvm-windows/releases
- Качаем nvm-setup.exe
    После установки открываем cmd:
    ```
    nvm install 18.12.0
    nvm use 18.12.0
    ```
- Также надо иметь установленным [git bash](https://gitforwindows.org/)
- Проверить, что ПАША когда-то вам настроил ssh (в папке пользователя есть папка .ssh/, и в ней есть какие-то файлики). Если не настроен, то открываем [это](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=windows) и [это](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) и разбираемся. Если совсем все плохо, то можно писать ПАШЕ
- Для работы с фронтом скачать VSCode. За расширениями спросить ПАШУ.

## После того, как все поставил
- Открываем [git bash](https://gitforwindows.org/) и не закрываем: дальше все будет делаться в нем
- Создаем папочку для проекта
    ```
    mkdir название-папки
    ```
- Инициализируем В НЕЙ git, все дальнейшие действия будут выполняться в НЕЙ:
    ```
    cd название-только-что-созданной-папки
    git init
    ```
- Добавляем наш удаленный репозиторий:
    ```
    git remote add origin git@github.com:PahaN47/company-front.git
    ```
- Создаем ветку master:
    ```
    git checkout -b master
    ```
- Пулим мастер себе:
    ```
    git pull origin master
    ```
- Устанавливаем все пакеты:
    ```
    npm ci
    ```

## Как запускать?
Так:
```
npm run dev
```

## Хочу что-то сделать
- Переходим на главную ветку (master), отводим от него новую ветку (и даем ей осмысленное название):
    ```
    git checkout master
    git checkout -b очень-осмысленное-название-ветки
    ```
- Делаем

## Я что-то сделал. Что дальше? (отправляем изменения на гит)
- Делаем коммит на той ветке, которую создали (коммит значит, что ваши изменения финальные и что их надо сохранить на текущей ветке):
    ```
    git add .
    git commit -m 'очень осмысленное название коммита'
    ```
- Если не вышло, то вы, скорее всего, наделали гадостей в коде
- Если вышло, делаем пуш:
    ```
    git push origin очень-осмысленное-название-ветки-которое-мы-ей-давали-раньше
    ```
- Идем на https://github.com/PahaN47/company-front
- Видим большую желтую штуку, которая говорит вам, что вы что-то запушили, и предлагает создать PR. Жмем создать
- Экран со всеми изменениями: там надо нажать создать
- Можно найти кнопку, чтобы у кого-нибудь запросить ревью
- Когда есть ревью и все хорошо, можно жать на зеленую кнопку 'merge pull request'

## Кто-то что-то дописал, и мне теперь надо, чтобы его изменения были у меня
- Переключаемся на основную ветку
    ```
    git checkout master
    ```
- Пулим на нее себе все
    ```
    git pull origin master
    ```

!!!Все вопросы к ПАШЕ!!!
