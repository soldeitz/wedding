// app/services/auth.server.ts
import { Authenticator, AuthorizationError } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';
import { sessionStorage } from './session.server';

type UserAuth = {
  name: string;
  token: string;
};

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
    if (!username || username?.length === 0) throw new AuthorizationError('Bad Credentials: username is required')
    if (typeof username !== 'string')
      throw new AuthorizationError('Bad Credentials: username must be a string')

    if (!password || password?.length === 0) throw new AuthorizationError('Bad Credentials: Password is required')
    if (typeof password !== 'string')
      throw new AuthorizationError('Bad Credentials: Password must be a string')

    console.log(username);
    console.log(password);

    // login the user, this could be whatever process you want
    if (username === 'admin' && password === 'admin') {
      user = {
        name: username,
        token: `${password}-${new Date().getTime()}`,
      };

      // the type of this user must match the type you pass to the Authenticator
      // the strategy will automatically inherit the type if you instantiate
      // directly inside the `use` method
      return await Promise.resolve({ ...user });

    } else {
      // if problem with user throw error AuthorizationError
      throw new AuthorizationError("Bad Credentials")
    }

  }),
);

export default authenticator