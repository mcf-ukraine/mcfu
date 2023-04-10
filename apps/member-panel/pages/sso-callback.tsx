import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

const SSOCallback = () => (
  // Handle the redirect flow by rendering the
  // prebuilt AuthenticateWithRedirectCallback component.
  // This is the final step in the custom OAuth flow
  <AuthenticateWithRedirectCallback />
);

export default SSOCallback;
