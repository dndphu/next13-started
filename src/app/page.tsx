"use client";
// import Image from "next/image";
// import styles from "./page.module.css";
// import Link from "next/link";
import { useEffect } from "react";
import useSWR from "swr";
import AppTable from "@/components/app.table";
export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const blogs = await res.json();
  //     console.log(blogs);
  //   };
  //   fetchData();
  // }, []);
  if (isLoading) return "Loading...";
  return (
    <main>
      <h1>Hi </h1>

      <AppTable blogs={data}></AppTable>
    </main>
  );
}
