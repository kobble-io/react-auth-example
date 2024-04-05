![React App example with Kobble Authentication for SPA](https://github.com/kobble-io/react-auth-example/blob/main/.readme/banner.png?raw=true)

[![License](https://img.shields.io/:license-mit-blue.svg?style=flat)](https://opensource.org/licenses/MIT)
![Status](https://img.shields.io/:status-stable-green.svg?style=flat)


This template will get you started developing with React with Kobble SDK.

It uses Vite and includes React Router, Twailwind and [@kobbleio/auth-spa-js SDK](https://github.com/kobble-io/auth-spa-js).

[![Deploy with Vercel](https://vercel.com/button)](https%3A%2F%2Fvercel.com%2Fnew%2Fclone%3Frepository-url%3Dhttps%3A%2F%2Fgithub.com%2Fkobble-io%2Freact-auth-example%26env%3DVITE_KOBBLE_DOMAIN%2CVITE_KOBBLE_CLIENT_ID%2CVITE_KOBBLE_REDIRECT_URI%26envDescription%3DThese%20variables%20can%20be%20obtained%20from%20your%20dashboard%20at%20Kobble.io%20after%20configuring%20your%20new%20OAuth%20Application.%26envLink%3Dhttps%3A%2F%2Fdocs.kobble.io%2Fproduct%2Fauthentication%2Foverview%26demo-title%3DReact%20Auth%20Example%26demo-description%3DExample%20React%20application%20including%20Kobble%20Authentication%20SDK%2C%20React%20Router%2C%20and%20Tailwind.%26demo-url%3Dhttps%3A%2F%2Fkobble-react-auth-example.vercel.app%26demo-image%3Dhttps%3A%2F%2Fgithub.com%2Fkobble-io%2Freact-auth-example%2Fblob%2Fmain%2F.readme%2Fscreenshot.png%3Fraw%3Dtrue)
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

