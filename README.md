# Soundtrack Your Brand Exercise

This repository contains an example UI build for rendering a playlist history using the Soundtrack Your Brand API as part of a technical interview process.

The project is built using the lit.dev framework for standard web components.

## Running Locally

1. Clone the repository.
2. Run `nvm use` to match the `.nvmrc` node version.
3. Run `npm install`.
4. Run `npm run serve` for local development.
5. Run `npm run build` for building (not fully tested).

## Motivation

* Using lit.dev: Although I'm very comfortable with React, I recently started to prefer more minimal setups—not quite vanilla, but using just the bare minimum. Lit.dev looked interesting because it not only builds standard web components but also is very lightweight. It adds the reactivity I needed for this project, so I took the chance to try it out.

## Conclusions

It was easy to set up lit.dev to build something, but I think the build configuration with Rollup needs more work. From React, I missed using `styled-components`. Lit.dev has built-in CSS-in-JS, but what I like about styled-components is the ability to name my templates with specific, semantically meaningful names rather than just using tag names and classes.

Also, I would like to try composition with different components.

I missed trying out the testing setup with lit.dev using web-test-runner and Jest. There are many things I'd change and would like to try it out, but since this was supposed to be a 2-hour task, I didn't go that far.
