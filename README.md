# CODEBASE

- postgresql installed
- copy `.env.example` to `.env`
- configure `.env` configurations with your own config
- run migrations `yarn knex:migrate:latest`
- run seeders `yarn knex:seed:run`
- open new terminal `yarn build:dev` (build ts to js)
- open new terminal `yarn start:dev` (run compiled js)
- open http.rest (install http rest extension in vscode or use postmant, etc)
- run signup endpoint