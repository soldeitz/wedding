import { createCookieSessionStorage } from "@remix-run/node";
import { getEnvVars } from "~/utility";

const { ENV } = getEnvVars();


// export the whole sessionStorage object
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'sessionKey', // use any name you want here
    sameSite: 'lax', // this helps with CSRF
    path: '/', // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: ['sold3itz'], // replace this with an actual secret
    secure: ENV === 'production', // enable this in prod only
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;