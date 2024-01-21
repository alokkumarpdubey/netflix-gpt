import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSearchSlice";
import { setAppLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstant";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const langKey = useSelector((store) => store.config.language);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // When Header components unmounts we need to unsubscribe this event as it is not required
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handlGptSearch = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(setAppLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-2">
          <select
            onChange={handleLanguageChange}
            className="p-2 m-2 bg-gray-400 text-white"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.value}
              </option>
            ))}
          </select>
          <button
            className="py-2 px-4 mx-2 my-2 bg-red-700 text-white rounded-lg"
            onClick={handlGptSearch}
          >
            {showGPTSearch ? lang[langKey].home : lang[langKey].gptSearch}
          </button>
          <img
            className="w-10, h-10 my-2"
            src={user?.photoURL}
            alt="usericon"
          />
          <button className="mx-2 font-bold text-white" onClick={handleSignOut}>
            {lang[langKey].signOut}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
