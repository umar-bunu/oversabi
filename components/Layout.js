import Navigation from "./Navigation";
import React, { useReducer, useEffect } from "react";

import Footer from "./Footer";
import firebase from "../lib/firebase";
export const AdminContext = React.createContext();
const reducer = (state, action) => {
  switch (action) {
    case "signOut":
      return false;
    case "signIn":
      return true;
    default:
      return false;
  }
};

const Layout = ({ children }) => {
  const [isAdmin, dispatch] = useReducer(reducer, false);
  const getIsAdmin = async () => {
    if (firebase.auth().currentUser != null) {
      var doc = await firebase
        .firestore()
        .collection("admins")
        .doc(firebase.auth().currentUser.email)
        .get();
      if (doc.exists) {
        dispatch("signIn");
      }
    }
  };
  useEffect(() => {
    getIsAdmin();

    return () => {};
  }, [firebase.auth().currentUser]);
  return (
    <div>
      <AdminContext.Provider
        value={{ adminState: isAdmin, adminDispatch: dispatch }}
      >
        <Navigation />
        {children}
        <Footer />
      </AdminContext.Provider>
    </div>
  );
};

export default Layout;
