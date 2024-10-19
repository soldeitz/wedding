// app/services/auth.server.ts
import { Authenticator, AuthorizationError } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';
import { sessionStorage } from './session.server';
import { getEnvVars, UserAuth } from '~/utility';

const { ADMIN_USER, ADMIN_PASSWORD } = getEnvVars();

// Create an instance of the authenticator, pass a Type, User,  with what
// strategies will return and will store in the session
const authenticator = new Authenticator<UserAuth | Error | null>(sessionStorage, {
  sessionKey: "sessionKey", // keep in sync
  sessionErrorKey: "sessionErrorKey", // keep in sync
});

// Tell the Authenticator to use the form strategy
authenticator.use(
  new FormStrategy(async ({ form }) => {

    // get the data from the form...
    const username = (form.get('username') as string).replaceAll("\"", "").replaceAll("'", "");
    const password = (form.get('password') as string).replaceAll("\"", "").replaceAll("'", "");

    // initiialize the user here
    let user = null;

    // do some validation, errors are in the sessionErrorKey
    if (!username || username?.length === 0) throw new AuthorizationError('Username è richiesto')
    if (typeof username !== 'string')
      throw new AuthorizationError('Bad Credentials: username must be a string')

    if (!password || password?.length === 0) throw new AuthorizationError('Password è richiesta')
    if (typeof password !== 'string')
      throw new AuthorizationError('Bad Credentials: Password must be a string')

    // login the user, this could be whatever process you want
    if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
      const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));
      const token = Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');

      user = {
        name: username,
        token: token,
      };

      // the type of this user must match the type you pass to the Authenticator
      // the strategy will automatically inherit the type if you instantiate
      // directly inside the `use` method
      return await Promise.resolve({ ...user });

    } else {
      // if problem with user throw error AuthorizationError
      throw new AuthorizationError("Credenziali non valide");
    }

  }),
);

export default authenticator