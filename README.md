# Decisions (structure/state/data approach)
Structure 
- views/ = pages (HomePage, NewsArticle)
- components/ = UI blocks (AppHeader, AppFooter, NewsList, NewsCard, etc.)
- stores/ = Pinia stores (news, user)
- constants/ = mock data (MOCK_NEWS, MOCK_USER)
- types/ = TypeScript types
- composables/ = for this small test project, a composables/ folder can be a bit “too much”. but I still added it to show the idea: move small logic/helpers out of components (for example, mapping image file names to assets). In real projects there are usually many composables.
- added scss and use 7-1 SASS Pattern (short form because of small test project)

I wanted to mention isLoading: I added it to show the moment when the data is "loading", but I didn’t have enough time to finish it.

Data:
-Data is loaded async from mocks (using setTimeout) to show a real flow: loading -> set data -> loading=false.
Mock images are file names, so I added a small mapping filename imported asset. With a real API I would expect full image URLs and remove this mapping.

# Next steps(if I had more time)
- Finish the details page(UI and logic). if news is not loaded yet -> call loadNews() and show loader. if id is not found -> show “Not found” state.
- Loading / empty / error states: Show loader (spinner/skeleton) for news list. Add simple empty/error UI state.
- Tests: for stores, components and composables.
- Small improvements: Validate route.params.id (undefined/NaN). Format dates(because we usually don't get a date in the format 14.12.2025). add pagination to the NewsList, or infinite scroll.
- add i18n (I usually don't hardcode text in files because there are many languages in our app).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run eslint-fix
```
