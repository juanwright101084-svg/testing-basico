# testing-basico

Proyecto de práctica de **testing en Next.js**: pruebas unitarias con Vitest, validación de datos con Zod y pruebas end-to-end (E2E) con Playwright. Hecho durante el bootcamp Full Stack de Kodigo.

## Tecnologías

- [Next.js](https://nextjs.org/) 16 (App Router) + TypeScript + Tailwind CSS
- [Vitest](https://vitest.dev/) para pruebas unitarias
- [Zod](https://zod.dev/) para validación de datos
- [Playwright](https://playwright.dev/) para pruebas E2E (Chromium, Firefox y WebKit)
- GitHub Actions para correr las pruebas E2E en cada push

## Requisitos

- Node.js 22 o superior
- npm

## Instalación

```bash
git clone https://github.com/TU-USUARIO/testing-basico.git
cd testing-basico
npm install
npx playwright install
```

`npx playwright install` descarga los navegadores que usa Playwright. Solo hace falta la primera vez.

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Inicia la app en `http://localhost:3000` |
| `npm test` | Pruebas unitarias en modo watch |
| `npm test -- --run` | Pruebas unitarias, una sola ejecución |
| `npm run test:ui` | Interfaz web de Vitest |
| `npm run test:report` | Genera y abre el reporte HTML de Vitest |
| `npm run test:e2e` | Pruebas E2E con Playwright |
| `npm run test:e2e:ui` | Interfaz interactiva de Playwright |
| `npm run test:all` | Unitarias y E2E, una después de la otra |

## Ver las pruebas en el navegador

### Unitarias (Vitest)

**Opción 1: reporte HTML** (una foto del resultado de la última corrida)

```bash
npm run test:report
```

Genera el reporte y lo sirve en `http://localhost:4173/`. Ahí se ve cada archivo y cada prueba con su estado, sus tiempos, su código y el grafo de módulos. Para detener el servidor, presiona `Ctrl + C`.

**Opción 2: interfaz interactiva** (se actualiza sola al guardar)

```bash
npm run test:ui -- --open
```

La interfaz solo abre con una URL que lleva un token, así que `--open` hace que se abra sola con el token incluido.

### E2E (Playwright)

Reporte de la última corrida:

```bash
npm run test:e2e
npx playwright show-report
```

Interfaz interactiva, con línea de tiempo y capturas de cada paso:

```bash
npm run test:e2e:ui
```

## Estructura

```
testing-basico/
├── app/                  # Páginas de Next.js
├── lib/                  # Lógica y pruebas unitarias (Vitest)
│   ├── math.js
│   ├── math.test.js
│   ├── primos.js
│   ├── primos.test.js
│   ├── validarTarea.ts
│   └── validarTarea.test.ts
├── tests/                # Pruebas E2E (Playwright)
│   └── home.spec.ts
├── .github/workflows/    # Integración continua
├── vitest.config.mts
└── playwright.config.ts
```

Las pruebas unitarias van junto al código, en `lib/`, con la extensión `.test.js` o `.test.ts`. Las E2E van en `tests/` con la extensión `.spec.ts`. Vitest excluye `tests/` para no mezclar ambas.

## Pruebas incluidas

**Unitarias (15 pruebas)**

- `math.test.js`: suma de números positivos y negativos.
- `primos.test.js`: `esPrimo` con casos normales y casos límite (1, 0, negativos, decimales, 2 y un primo grande).
- `validarTarea.test.ts`: validación con Zod de una tarea (`titulo` de al menos 3 caracteres y `prioridad` entre `baja`, `media` o `alta`). Cubre un objeto válido, título corto, prioridad inválida, campo faltante y prioridad en mayúsculas.

**E2E**

- `home.spec.ts`: verifica que la página principal carga. Se ejecuta en Chromium, Firefox y WebKit.

## Integración continua

El workflow de `.github/workflows/playwright.yml` ejecuta las pruebas E2E en cada push y pull request. Los resultados se ven en la pestaña **Actions** del repositorio.