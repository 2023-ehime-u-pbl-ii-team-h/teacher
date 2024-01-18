"use client";

import { MsalProvider } from "@azure/msal-react";
import { Configuration, PublicClientApplication } from "@azure/msal-browser";
import { ReactNode } from "react";
import { SnackbarProvider } from "@/atoms/snackbar";

const configuration: Configuration = {
  auth: {
    clientId: "788aebee-7aa0-4286-b58c-7e35bf22e92a",
  },
};

const pca = new PublicClientApplication(configuration);

export const Providers = ({ children }: { children: ReactNode }) => (
  <MsalProvider instance={pca}>
    <SnackbarProvider>{children}</SnackbarProvider>
  </MsalProvider>
);
