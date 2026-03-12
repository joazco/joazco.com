import React from "react";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

import Head from "./Head";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const fetchProjects = async () => {
  const onfulfilled = await getDocs(query(collection(db, "projects")));
  if (!onfulfilled || onfulfilled.size === 0) return [];
  const _projects = [];
  onfulfilled.forEach((doc) => {
    _projects.push(doc.data());
  });
  return await _projects;
};

type PageProps = {
  children: React.ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <Head />
      <main>{children}</main>
    </>
  );
};

export default Page;
