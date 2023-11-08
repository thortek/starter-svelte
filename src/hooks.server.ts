import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import Google from "@auth/core/providers/google"
import { GOOGLE_ID, GOOGLE_SECRET, GITHUB_PROD_ID, GITHUB_PROD_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
  providers: [
   // GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
    Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET }),
    GitHub({ clientId: GITHUB_PROD_ID, clientSecret: GITHUB_PROD_SECRET }),
  ],
})