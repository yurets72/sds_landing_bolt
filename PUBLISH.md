# Как опубликовать проект на GitHub (ветка react-version)

Эта ветка содержит React-версию сайта СпецДорСервис. Ветка `main` в этом локальном репозитории — тоже содержит проект; при пуше на ваш GitHub НЕ затирайте основную `main` с исходными HTML-файлами.

## Шаг 1. Скачайте проект из Bolt

В интерфейсе Bolt нажмите кнопку экспорта / download, чтобы получить локальную копию проекта. В этой копии уже инициализирован git с двумя ветками:
- `main` — состояние после Этапа 2
- `react-version` — состояние после Этапа 3 (текущая рабочая ветка)

## Шаг 2. Локально перейдите в папку проекта и проверьте ветки

```bash
cd sds_landing
git branch -v
```

Должны увидеть:
```
  main          <hash> Stage 2: hero + tagline reveal, hash router, content extraction
* react-version <hash> Stages 2-3: hero + tagline reveal, hash router, benefits ...
```

## Шаг 3. Добавьте remote вашего существующего репозитория

Если репозиторий `yurets72/sds_landing` уже есть на GitHub и в нём лежат исходные HTML-файлы в `main`:

```bash
git remote add origin https://github.com/yurets72/sds_landing.git
```

## Шаг 4. Отправьте только ветку react-version

```bash
git push -u origin react-version
```

НЕ выполняйте `git push origin main` — это затрёт исходные HTML-файлы в вашей основной ветке на GitHub. Ветка `react-version` будет жить параллельно.

## Шаг 5. Проверьте на GitHub

Откройте https://github.com/yurets72/sds_landing/tree/react-version — там должны быть:
- `src/` — весь React-код (компоненты, страницы, контент)
- `index.html`, `tailwind.config.js`, `vite.config.ts`, `package.json`
- `public/favicon.svg`

Исходные HTML-файлы в `main` на GitHub остаются нетронутыми.

## Дальнейшие этапы

После следующих этапов (Этап 4: How it works, Этап 5: форма/FAQ, Этап 6: финал) делайте коммиты на ветке `react-version`:

```bash
git add -A
git commit -m "Stage 4: how it works"
git push
```

## Альтернатива: отдельный репозиторий

Если хотите полностью разделить React-версию от исходных HTML-файлов, создайте новый репозиторий на GitHub (например, `sds_landing_react`) и отправьте туда обе ветки:

```bash
git remote add react-origin https://github.com/yurets72/sds_landing_react.git
git push -u react-origin main
git push react-origin react-version
```
