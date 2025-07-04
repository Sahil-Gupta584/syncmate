import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/blocked/payment-failed/")({
  component: Page,
});

function Page() {
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
          <h2 className="text-2xl">Payment Failed</h2>
          <p className="text-lg text-gray-400 mx-auto max-w-lg">
            It's been more than 7 days of your last subscription got failed or
            didn't completed please check your balance or &nbsp;
            <a
              href={`${import.meta.env.VITE_WEB_BASE_URL}/contact-us`}
              className="text-blue-600 dark:text-warning-400 underline"
            >
              contact us.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
