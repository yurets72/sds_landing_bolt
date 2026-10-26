# Как опубликовать проект на GitHub (ветка react-version)

## Шаг 1. Скачайте проект из Bolt

В интерфейсе Bolt нажмите кнопку экспорта / download, чтобы получить локальную копию проекта. В этой копии уже инициализирован git с двумя ветками:
- `main` — состояние после Этапа 2
- `react-version` — текущая рабочая ветка (Этапы 2–3)

## Шаг 2. Перейдите в папку проекта и проверьте ветки

```bash
cd sds_landing
git branch -v
```

Должны увидеть:
```
  main           <hash> Stage 2: hero + tagline reveal, hash router, content extraction
* react-version  <hash> Stages 2-3: hero + tagline reveal, hash router, benefits ...
```

## Шаг 3. Добавьте remote вашего нового репозитория

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

Замените `YOUR_USERNAME/YOUR_REPO` на адрес созданного репозитория.

## Шаг 4. Отправьте ветку react-version

```bash
git push -u origin react-version
```

Ветка `main` из этого локального репозитория не отправляется — ваш новый репозиторий на GitHub получит только `react-version`.

## Шаг 5. Проверьте на GitHub

Откройте страницу репозитория — там должны быть:
- `src/` — весь React-код (компоненты, страницы, контент)
- `index.html`, `tailwind.config.js`, `vite.config.ts`, `package.json`
- `public/favicon.svg`

## Дальнейшие этапы

После следующих этапов делайте коммиты на ветке `react-version`:

```bash
git add -A
git commit -m "Stage 4: how it works"
git push
```
