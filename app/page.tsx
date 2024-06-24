"use client";
import OrderDetailTable from "./Orders/page";

export default function Home() {
  return (
    <>
    <main className="flex flex-col min-h-screen">
      <OrderDetailTable />
    </main>
    </>
  );
}
