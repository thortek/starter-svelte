import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import Google from "@auth/core/providers/google"
//import { GOOGLE_ID, GOOGLE_SECRET, GITHUB_PROD_ID, GITHUB_PROD_SECRET } from "$env/static/private"

let githubConfig = { clientId: process.env.GITHUB_PROD_ID, clientSecret: process.env.GITHUB_PROD_SECRET }

if (process.env.NODE_ENV === "development") {
  githubConfig = { clientId: process.env.GITHUB_LOCAL_ID, clientSecret: process.env.GITHUB_LOCAL_SECRET }
}

export const handle = SvelteKitAuth({
  providers: [
   // GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
    Google({ clientId: process.env.GOOGLE_ID, clientSecret: process.env.GOOGLE_SECRET }),
    GitHub(githubConfig),
  ],
})