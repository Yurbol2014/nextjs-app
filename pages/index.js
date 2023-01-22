import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';


import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div>
   
      <h1 className={`${styles.title}`}>Главная</h1>
      <Link href='/burgers'>Все бургеры</Link>
      
    </div>
  );
}
