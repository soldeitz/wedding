import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../firebase.server";

export const readGuests = async () => {
    try {
        const db = getFirestore(app);
        const response = await getDocs(collection(db, "guests"));
        return response;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error: any) {
        throw new Error(`ERROR in readGuests: ${error.message}`);
    }
}