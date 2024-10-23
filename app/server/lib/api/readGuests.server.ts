import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../firebase.server";

export const readGuests = async () => {
    try {
        const db = getFirestore(app);
        const guestsRef = collection(db, "guests");
        const response = await getDocs(guestsRef);
        return response.docs.map((doc) => doc.data());
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error: any) {
        throw new Error(`ERROR in readGuests: ${error.message}`);
    }
}