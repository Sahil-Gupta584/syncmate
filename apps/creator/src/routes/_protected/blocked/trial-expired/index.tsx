"use client";
import { Button } from "@heroui/react";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/_protected/blocked/trial-expired/")({
  component: Page,
});

function Page() {
  const pricingPage = `${import.meta.env.VITE_WEB_BASE_URL}/#pricing`;
  console.log({ pricingPage });

  return (
    <section className="mt-16 flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="inline-flex  items-center justify-center rounded-full size-20 bg-warning/20 text-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>
        <div className="space-y-3 text-center">
          <h2 className="text-2xl">Free trial expired</h2>
          <p className="text-lg text-gray-400 mx-auto max-w-lg">
            Subscribe to a plan to start simplifying your workflow
          </p>
        </div>
      </div>
      <a target="_blank" href={pricingPage}>
        <Button
          color="warning"
          className=" rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Unlock Syncly
        </Button>
      </a>
    </section>
  );
}
