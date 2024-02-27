# Lakshaya Coaching Institute Project

This is a freelancing project for a Coaching institute named Lakshaya. Our target is to provide online education to the students by scaling from offline to online. Students can purchase courses, view notes, and watch course videos.

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
### Install PrimeReact Component Library
PrimeReact is a collection of rich UI components for React. All widgets are open source and free to use under MIT License. PrimeReact is developed by PrimeTek Informatics, a vendor with years of expertise in developing open source UI solutions.

To install PrimeReact and its dependencies, run the following commands:

```bash
npm install primereact
npm install primeicons       
npm install react-transition-group
```