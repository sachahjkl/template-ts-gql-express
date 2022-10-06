import { Application, Request, Response } from 'express';
import { GraphQLClient } from 'graphql-request';
import dotenv from 'dotenv-flow';
import express from 'express';
dotenv.config(); // charge les variables dans les fichiers ".env.*" dans l'environnement du processus

const app: Application = express();
const port = process.env.PORT || 4875;

const headers = [
	['x-api-key', 'VITE_X_API_KEY'],
	['Content-Type', 'application/json']
] as HeadersInit;

const endpoint = `${process.env.HOPEX_GRAPHQL_URL}/HOPEXGraphQL/api/${process.env.SCHEMA}`;

const gqlClient = new GraphQLClient(endpoint, { headers });

app.get('/toto', (req: Request, res: Response) => {
	res.send('Hello toto');
});

app.listen(port, function () {
	console.log(`App is listening on port ${port} !`);
});
