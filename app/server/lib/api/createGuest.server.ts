import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../firebase.server";
import { Guest, GuestSchema } from "~/utility";

export const createGuest = async (guest: Guest) => {
    try {
        const parsedGuest = GuestSchema.parse(guest);

        const db = getFirestore(app);
        const guestsRef = collection(db, "guests");

        await setDoc(doc(guestsRef), parsedGuest);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error: any) {
        throw new Error(`ERROR in createGuests: ${error.message}`);
    }
}