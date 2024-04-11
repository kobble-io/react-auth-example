![React App example with Kobble Authentication for SPA](https://github.com/kobble-io/react-auth-example/blob/main/.readme/banner.png?raw=true)

[![License](https://img.shields.io/:license-mit-blue.svg?style=flat)](https://opensource.org/licenses/MIT)
![Status](https://img.shields.io/:status-stable-green.svg?style=flat)


This template will get you started developing with React with Kobble SDK.

It uses Vite and includes React Router, Twailwind and [@kobbleio/react](https://github.com/kobble-io/react).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&env=VITE_KOBBLE_DOMAIN,VITE_KOBBLE_CLIENT_ID,VITE_KOBBLE_REDIRECT_URI&envDescription=These%20variables%20can%20be%20obtained%20from%20your%20dashboard%20at%20Kobble.io%20after%20configuring%20your%20new%20OAuth%20Application.&envLink=https%3A%2F%2Fdocs.kobble.io%2Fproduct%2Fauthentication%2Foverview&demo-title=React%20Auth%20Example&demo-description=Example%20React%20application%20including%20Kobble%20Authentication%20SDK%2C%20React%20Router%2C%20and%20Tailwind.&demo-url=https%3A%2F%2Fkobble-react-auth-example.vercel.app&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fkobble-io%2Freact-auth-example%2Fea7dacdb664bf29331a03261c51ec3cb8778f90f%2F.readme%2Fscreenshot.png%3Fraw%3Dtrue)
_[![Preview](https://github.com/kobble-io/react-auth-example/blob/main/.readme/preview-btn.svg?raw=true)](https://kobble-react-auth-example.vercel.app)_

## Getting Started

### Installation

Using [npm](https://npmjs.org) in your project directory run the following command:

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Configure Kobble

Create an **Application** in your [Kobble Dashboard](https://app.kobble.io/p/applications).

Make sure your application can handle your localhost callback URL (see section below).

Note the **Client ID** and your **Portal Domain** values.

### Update environment

Copy the `.env.example` file to `.env` and update the values with your Kobble Application details.

```bash
cp .env.example > .env
```

Example:
```
VITE_KOBBLE_DOMAIN=https://your-project.portal.kobble.io
VITE_KOBBLE_CLIENT_ID=cluipasqr0000k8bzevczqy23
VITE_KOBBLE_REDIRECT_URI=https://your-app-url/callback
```

### Raise an issue

To provide feedback or report a bug, please [raise an issue on our issue tracker](https://github.com/kobble-io/react-auth-example/issues).

## What is Kobble?

<p align="center">
  <picture>
    <img alt="Kobble Logo" src="https://github.com/kobble-io/react-auth-example/blob/main/.readme/logo.png?raw=true" width="150">
  </picture>
</p>
<p align="center">
 Kobble is the one-stop solution for monetizing modern SaaS and APIs. It allows to add authentication, analytics and payment to any app in under 10 minutes.
</p>

