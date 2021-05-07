# Social Media Site Hackathon - Starter Pack

This starter pack is for the "How to build a social media site" hackathon by Mintbean.

## Prerequisites

You need the latest version of Mongo and NPM in order to code on this project.

## Getting started

```bash
yarn install # or npm install
yarn dev # or npm run dev
```

## Deploying

First, have mongodb running. The application will create a `Twitterbean` collection for itself on bootup.

The application can be deployed to port 3000. Changing the port requires a bit of coding.

`WARNING`: This project needs to be deployed at the root of your site. i.e. `http://foo.bar` will work
but `http://foo.bar/baz` most likely will not.

```bash
yarn build
yarn start
```

## Scripts

`yarn dev` will run the dev server for the frontend as well as the backend.
`yarn build` will build the project. It will move the frontend's static assets into the backend's `public` folder.
`yarn start` will run the built backend folder.
`yarn dropdb` will clean the database (you will have to register again)

## Architecture

The project is structured as a [yarn workspaces monorepo](https://medium.com/swlh/yarn-workspaces-monorepo-beginners-guide-ed89de47aa25).
It uses `ts-node` for Typescript support. Typescript is loosely used throughout the project where needed, so there is a mix of Typescript
and JavaScript files in the repository. Please feel free to convert the project to pure JavaScript or pure Typescript should you desire.
Here are the major folders:

`/` contains `.gitignore` and several useful scripts.
`/http` contains API calls that can be called using VSCode's [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension.
`/packages/frontend` contains the frontend project.
`/packages/backend` contains the backend project.

## Frontend

We are using Parcel Bundler, which simply uses `index.html` as its entrypoint. It automatically parses the `script` tag to find out which JS or TS file it should start with, then stitches together the imports and deploys it to a dev server with hot reload. Once you're ready to build, run `yarn build` from the root of the project and Parcel will automatically build the Frontend project and paste the resulting bundled static assets into `packages/backend/public`

We're using [Material-UI](https://material-ui.com/) as the framework.

We're using the [useReducer](https://alligator.io/react/usereducer/) hook to manage state. We're passing it down without prop-drilling by making good use of the [useContext](https://www.digitalocean.com/community/tutorials/react-usecontext) hook. (check these out, they're super cool and easy to use once you understand them!)

`NOTE` If you encounter a Build Error in dev mode, try a server reset. If that doesn't work, delete the `packages/frontend/.cache` folder, then try resetting the server again.

## Backend

We're using Express and Mongoose/MongoDB on the backend. All code is custom-built, and we're using as few pieces as possible in order to maximize learning potential from this project.

## Known Issues You Can Tackle First

- You will have to figure out deployment.
- Error handling is currently being done via `alert` boxes. It should be done via actual popup modals built in JavaScript. See [Snackbar Component](https://material-ui.com/components/snackbars/)
- Posting a tweet will fail silently, with a console error, if you are not logged in.
- Some of the code is not very DRY, especially between Register and Login.
- The project is half JS, half TS. It should be one or the other, but having both just causes confusion and issues.
- The `req.sessions.user` type needs `//@ts-ignore` in order to work, because the global declaration in `types.d.ts` is not set correctly. (If you don't understand what this means, that's fine. Just be mindful that it always needs a `//@ts-ignore` on the preceding line.)

## Suggested Features

- Profile page
- Ability to set your photo, bio and fullname
- Ability to @tweet at people
- Hashtags
- Tweet search
- News feed
