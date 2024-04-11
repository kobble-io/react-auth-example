import ReactDOM from 'react-dom/client';
import './index.css';
import {router} from "./router";
import {RouterProvider} from "react-router-dom";
import {KobbleProvider} from "@kobbleio/react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
    <KobbleProvider domain={import.meta.env.VITE_KOBBLE_DOMAIN}
                    clientId={import.meta.env.VITE_KOBBLE_CLIENT_ID}
                    redirectUri={import.meta.env.VITE_KOBBLE_REDIRECT_URI}>
        <RouterProvider router={router} />
    </KobbleProvider>
);