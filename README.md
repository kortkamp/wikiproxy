# Wikiproxy

A Next.js project to Show Wikipedia content with an improved reading experience.

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The project

Wikipedia is a wonderful content repository but lacks of a great reading experience. So I started this project intending to build a 'semi-proxy' of wikipedia content but with a customizable user interface. You gonna have the option to change fonts , colors and layouts in a very simples way.

## Working

When you open a url (http://mydomain.com/en/TypeScript),  the App fetches the first section of articles content from the Wikipedia API and renders it in the server side, then loads dynamically (user side) all the lasting sections. This approach has proven to reduce the data flow on our server and gives a better user experience in addition to give Google bots some contents for our routes.


