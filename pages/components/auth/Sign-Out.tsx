import { auth } from "../../../firebase.config";
import { signOut } from "firebase/auth";

export default function SignOut() {
  const signOutBoi = () => {
    signOut(auth);
  };
  return (
    <>
      <button
        className="px-6 mx-4 p-3 rounded shadow flex flex-row bg-purple-700 text-white text-lg font-medium items-center justify-center hover:bg-purple-600 focus:ring-4 hover:shadow-xl"
        onClick={signOutBoi}
      >
        Sign Out
      </button>
    </>
  );
}
