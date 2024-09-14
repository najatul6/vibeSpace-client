import { getAuth } from "firebase/auth";
import { app } from "../Firebase/firebase.init";
const useAuth = getAuth(app);
export default useAuth