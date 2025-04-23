This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Functionaliteiten (Gelieve binnen een git repo te werken waarbij verschillende functionaliteiten in verschillende commits zijn terug te vinden)
- **Dashboard Pagina** met alle to-dos
- **Maak een nieuwe To-Do** (Formulier met validatie)
- **Bewerk een bestaande To-Do**
- **Verwijder een To-Do** (met een bevestigingsprompt)
- **Toggle Completion Status**

### Formuliervalidatie
Voor formuliervalidatie zou je gebruik kunnen maken van:
- **Zod**
- **Yup**
- **TanStack Forms**

## 3. Bonus Features (Optioneel, maar Aangeraden, pick your favorites)

- **Realtime Updates** met PocketBase’s realtime subscriptions.
- **Filters en Sorteren** (bijv. alleen voltooide/onvoltooide taken tonen).
- **Donkere modus** toggle.
- **Mobiel-vriendelijke Responsieve UI**.
- **Bulk Verwijdering** (Selecteer meerdere to-dos en verwijder ze in één keer).
- **Alles Verwijderen** (Verwijder alle to-dos die completed zijn met een bevestigingsprompt).

## 4. Extra Bonus - Docker Setup

Om je begrip van implementatie en containerisatie te tonen, kun je **je project containeriseren** met **Docker**.

### Vereisten:
- Er is **geen officiële Docker image** voor PocketBase, dus je moet **de documentatie zorgvuldig lezen** en je eigen **Dockerfile** maken.
- De frontend moet ook worden containerized met een eigen **Dockerfile**.
- Optioneel kun je een **docker-compose.yml** bestand toevoegen om beide services te beheren.

Het doel is dat iemand **het volledige project kan draaien met één `docker-compose up` opdracht**.

## 5. Deliverables

- Een **GitHub repository** met een README waarin wordt uitgelegd hoe het project moet worden uitgevoerd.
- **Goed gestructureerde code** die de best practices volgt.
- Een **Dockerfile of Docker Compose setup** _(optioneel)_.