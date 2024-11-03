export const getEnvVars = () => {
    console.log(import.meta.env.VITE_ENV);
    return {
        FIREBASE_API_KEY: import.meta.env.VITE_FIREBASE_API_KEY,
        FIREBASE_AUTH_DOMAIN: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        FIREBASE_PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        FIREBASE_STORAGE_BUCKET: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        FIREBASE_MESSAGING_SENDER_ID: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        FIREBASE_APP_ID: import.meta.env.VITE_FIREBASE_APP_ID,
        FIREBASE_MEASUREMENT_ID: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
        ADMIN_USER: import.meta.env.VITE_ADMIN_USER,
        ADMIN_PASSWORD: import.meta.env.VITE_ADMIN_PASSWORD,
        ENV: import.meta.env.VITE_ENV,
    }
}