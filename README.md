# Lakshaya Coaching Institute Project

This freelancing project involves transitioning a coaching institute, named Lakshaya, from offline to online education. The primary objective is to offer students the opportunity to purchase courses, access study materials such as notes, and watch instructional videos through the online platform.

## Setup Instructions

### Install Vite for React

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts: a dev server that provides rich feature enhancements over native ES modules, and a build command that bundles your code with Rollup.

To install Vite, run the following command:
```bash
npm create vite@latest
```

### Install Tailwind CSS
To install Tailwind CSS, run the following command:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### tailwind.config.js file
```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
#### index.css
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### Install Flowbite Component Library
Install Flowbite and Flowbite React by running the following command in your terminal:

```bash
npm install flowbite flowbite-react
```
### Require Flowbite as a plugin inside your tailwind.config.js file:
```bash
module.exports = {
  plugins: [
    require('flowbite/plugin')
  ]
}
```
Additionally to your own content data you should add the Flowbite source paths to apply the classes from the interactive elements in the tailwind.config.js file:

```bash
module.exports = {
  content: [
    // ...
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ]
}
```