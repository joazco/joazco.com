# AGENTS.md : joazco.com

Guide des développeurs et des agents qui travaillent sur ce dépôt.

## 1. À lire en premier : niveau 0

**Avant toute tâche, lis en entier `JOAZCO.md` (niveau 0), à la racine du Drive Joazco Teams.** C'est le point d'entrée, avant ce fichier et avant le code.

Ensuite, pour du développement :

1. `Developpement/cto.md` : métiers à appliquer, branches, points où Jordan décide.
2. La fiche du métier choisi par `cto.md`. Pour le code de ce site : `developpeur-nextjs.md`, qui renvoie à `developpeur-react.md`.
3. Ce fichier. C'est le `.md` du projet : **en cas de contradiction, il l'emporte**. S'il ne dit rien, la règle du niveau au-dessus s'applique.

Si tu n'as pas accès au Drive, dis-le et demande à Jordan. N'invente pas les règles.

Ne recopie pas les règles du Drive ici : une seule source par règle. Lis chaque `.md` une fois par session.

## 2. Le projet

Site vitrine de Joazco ([joazco.com](https://joazco.com)) : export statique Next.js sur Firebase Hosting (projet `joazco-1fd73`), avec Firestore et Firebase Auth.

Versions : Next 12.1.6 (**Pages Router**), React 18.1, TypeScript 4.7 (`strict: false`), MUI 5, SCSS. Pour les Cloud Functions : Node 24, TypeScript 6 strict, `firebase-functions` v2, Nodemailer.

| Chemin | Contenu |
|---|---|
| `pages/index.tsx` | Accueil. Les projets sont lus dans `getStaticProps` |
| `pages/admin.tsx` | Connexion et gestion des projets |
| `pages/darkbluedungeon.tsx` | Page du jeu Dark Blue Dungeon |
| `pages/comicspacegame.tsx` | Politique de confidentialité de Comic Space Game |
| `components/Page.tsx` | Gabarit de page **et** initialisation Firebase (`app`, `db`, `auth`, `fetchProjects`) |
| `components/Head.tsx` | SEO, JSON-LD, favicon |
| `components/Home/brand.ts` | Liens du logo, du favicon (Firebase Storage), des réseaux sociaux et e-mail. Comptes de référence : `Réseaux sociaux.md` du Drive |
| `components/Home/`, `components/Admin/` | Sections de l'accueil, écrans d'admin |
| `hooks/` | `useAdmin`, `useProjectForm`, `useContactForm`, `useMenu`, `useAccent`, `useCopyText` |
| `scripts/` | `useAOS` (page Dark Blue Dungeon) |
| `node-compat.js` | Correctif pour Node 26, chargé par les scripts npm |
| `index.scss`, `scss/` | `_home.scss` : accueil (charte graphique). `_body.scss` : anciennes variables, encore utilisées par l'admin |
| `types.ts` | Type `Project` |
| `functions/src/index.ts` | Cloud Function `sendMail` |

Les composants, hooks et scripts s'importent depuis leur `index.ts` (certains imports existants font exception, comme `components/Page`).

## 3. Démarrer

Le site tourne sur **Node 26** (version fixée dans la CI). Next 12 a besoin pour cela de `node-compat.js` : lance toujours Next par les scripts npm, pas par `npx next`.

```bash
npm ci
cp .env.dist .env.local   # si .env.local n'existe pas ; demander les valeurs à Jordan
npm run dev
```

| Besoin | Commande |
|---|---|
| Vérifier les types du site | `npx tsc --noEmit` |
| Build et export vers `out/` | `npm run build` (lit Firestore, il faut `.env.local` et le réseau) |
| Compiler les functions | `cd functions && npm ci && npm run build` |
| Émuler les functions | `cd functions && npm run serve` |

- Il n'y a **aucun test**. ESLint n'est pas configuré : `npm run lint` ne vérifie rien en l'état.
- `npm run start` et un `npm run export` isolé ne sont pas nécessaires : `build` fait déjà l'export.
- `next build` peut réécrire `package-lock.json` et `tsc` réécrit `tsconfig.tsbuildinfo` : vérifie `git status` avant de commiter.
- La CI utilise **npm**. `yarn.lock` et `pnpm-lock.yaml` sont aussi présents : ne les prends pas comme référence.
- Les vérifications sont lancées selon le rôle défini dans `cto.md` (PO, sur demande de Jordan).

## 4. Déploiement

- **Tout push sur `main`, donc toute fusion de PR, déploie le site en production** (`.github/workflows/firebase-hosting-merge.yml`). Aucune fusion sans la demande de Jordan.
- La CI ne vérifie que le build. Elle ne déploie **pas** les functions : `cd functions && npm run deploy`, seulement sur demande de Jordan.

## 5. Règles du code

- **Export statique** : pas de route API, pas de `getServerSideProps`, pas d'ISR, pas d'optimisation d'images côté serveur. `window`, `localStorage`, `$` et `AOS` ne s'utilisent que côté navigateur (effets, événements).
- **Les projets affichés sur l'accueil sont figés au build.** Une modification dans l'admin n'apparaît sur le site qu'après un nouveau déploiement.
- Reste en Pages Router et en SCSS. Pas de migration (App Router, Tailwind, montée de version) ni de nouvelle dépendance sans l'accord de Jordan.
- Le site est en anglais (`lang="en"`) et n'a **pas de système de traduction** : les textes existants sont en dur. Avant d'ajouter un texte visible, demande à Jordan comment faire (le Drive interdit le texte en dur). L'admin est en partie en français.
- Accueil : référence visuelle = la charte graphique du Drive (« Chartre graphique entreprise »). **Version claire uniquement**, anglais uniquement, pas de filtre de projets ni de fenêtre modale.
- Les styles de l'accueil restent sous `.joazco--home`, pour ne pas toucher aux autres pages.
- Le logo et le favicon s'utilisent par leurs liens Firebase Storage (`brand.ts`). Ne les copie pas dans le dépôt.
- La navigation utilise des ancres vers les `id` des sections (`top`, `projects`, `who`, `universe`, `contact`).
- La console d'accueil choisit trois projets d'après leur lien (`universes` dans `Bloc1.tsx`). Si un lien change, son onglet disparaît.
- Les mots accentués changent de couleur toutes les 4 s : garde le bouton de pause et le respect de la réduction du mouvement.
- Les pages de jeux chargent leurs propres scripts externes.
- Garde l'accessibilité en place : lien d'évitement, `aria-label`, `alt`, navigation au clavier.
- SEO : les métadonnées de l'accueil et de l'admin sont dans `components/Head.tsx` (canonical fixé sur la racine). Les deux pages de jeux ont leur propre `Head`.

## 6. Données et sécurité

- Firestore, collection `projects` : champs de `types.ts` (`title`, `content`, `image`, `link`, `order`, `id`). `order` sert au tri et de clé React : garde-le unique.
- `project.content` est injecté en HTML (`dangerouslySetInnerHTML`) sans nettoyage. Il ne doit venir que d'un administrateur de confiance.
- **Les règles Firestore ne sont pas dans ce dépôt.** L'écran de connexion de `/admin` ne protège pas les données : seules ces règles le font. Elles se vérifient dans la console Firebase.
- Les variables `NEXT_PUBLIC_*` sont visibles dans le navigateur : aucun secret dedans.
- Ne commite jamais `.env.local`. `functions/.env.joazco-1fd73` est **suivi par Git** : aucun secret dedans.
- `SMTP_PASSWORD` et `SEND_MAIL_API_KEY` sont des secrets Firebase (`firebase functions:secrets:set NOM`).

### `sendMail`

Cette fonction **ne sert pas au formulaire de contact du site**. Elle envoie les mails d'une liste de naissance : CORS limité à `liste-de-naissance-b2b53.web.app`, en-tête `x-api-key` obligatoire, champs `name`, `gift` (ou `subject`) et `deliveryMethode` (orthographe à conserver, des alias sont acceptés). Elle a donc un client hors de ce dépôt : ne change pas son contrat sans l'accord de Jordan.

## 7. Pièges connus

Constatés à la lecture du code. Ne les corrige pas au passage : signale-les ou traite-les dans une tâche dédiée.

- `.env.dist` et la CI définissent `NEXT_PUBLIC_TORAGE_BUCKET`, mais `Page.tsx` lit `NEXT_PUBLIC_STORAGE_BUCKET`. `storageBucket` reste donc vide avec ces noms. Une correction doit toucher `.env.dist`, la CI, le secret GitHub et les `.env.local`.
- `useContactForm` n'est utilisé par aucun composant et appelle un autre projet Firebase (`sprint-1bda4`). L'accueil propose seulement un lien `mailto:`.
- `useAdmin` n'est pas un contexte : `admin.tsx`, `SigninForm` et `ProjectsTable` ont chacun leur état et leurs abonnements Firebase. Les abonnements ne sont jamais fermés.
- `useProjectForm` : après un échec d'écriture, le formulaire se ferme sans message. L'`id` est ajouté au document dans un second appel, que le code n'attend pas.

## 8. Git

Les règles de branches, de commit et de push sont dans `cto.md`. En bref : **aucun commit, push ou fusion sans la demande de Jordan.**

## 9. Tenir ce fichier à jour

Si une tâche change une commande, la structure, le déploiement ou corrige un piège de la section 7, mets ce fichier à jour dans la même branche.
