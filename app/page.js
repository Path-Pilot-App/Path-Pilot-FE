'use server'

import Link from "next/link";

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-6xl font-extrabold">Path Pilot 🚀</h1>
      <h2 className="text-2xl pt-6 font-bold">An AI powered travel itinerary planner that lets you navigate the world on autopilot</h2>
      <button type="button" class="text-lg mt-6 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        <Link href='/builder'>Start your adventure</Link>
      </button>
    </div>
  );
}

export default Home;
