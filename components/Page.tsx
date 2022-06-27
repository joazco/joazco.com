import React from "react";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

import Head from "./Head";
import "../index.scss"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  appId: process.env.APP_ID,
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
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
