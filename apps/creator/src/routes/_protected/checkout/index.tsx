import { addToast } from "@heroui/react";
import { type TPlan, plans } from "@repo/lib/constants";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import z from "zod";
import { useSession } from "../../../lib/authActions";

export const Route = createFileRoute("/_protected/checkout/")({
  component: CheckoutPage,
  validateSearch: z.object({
    planType: z.string().optional(),
  }),
});

export type TPaymentMethod = "razorpay";

function CheckoutPage() {
  const search = Route.useSearch();
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<TPlan>(
    () => plans[1] as TPlan
  );
  const { data } = useSession();
  useEffect(() => {
    (async () => {
      const selectedPlan =
        search?.planType && plans.find((p) => p.name === search?.planType);
      if (selectedPlan) setSelectedPlan(selectedPlan as TPlan);
    })();
  }, [search]);
  function loadRazorpayScript(): Promise<boolean> {
    return new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  const handlePayment = async (duration: "monthly" | "yearly") => {
    try {
      console.log("handling");
      const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
      if (!razorpayKeyId) {
        addToast({ color: "danger", description: "A Server Error Occurred." });
      }
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        addToast({
          description: "Failed to load payment script. Please try again later.",
          color: "danger",
        });
        return;
      }
      if (!data?.user.id) return;

      console.log({ subid: import.meta.env.VITE_TEST_SUBS_ID });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const razorpay = new (window as any).Razorpay({
        // key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        key: razorpayKeyId,
        // subscription_id: duration === "monthly" ? selectedPlan.monthlySubscriptionId : selectedPlan.yearlySubscriptionId,
        subscription_id: import.meta.env.VITE_TEST_SUBS_ID,
        name: "Syncly",
        description:
          duration === "monthly"
            ? "Monthly Subscription"
            : "Yearly Subscription (2 months free!)",
        theme: { color: "#6366F1" },
        notes: {
          userId: data?.user.id,
          plan: "PRO",
        },
        handler: function () {
          router.navigate({ to: "/" });
        },
      });

      razorpay.open();
    } catch (error) {
      console.error("Payment failed:", error);
      addToast({
        description: "Oops! Something went wrong, please contact us.",
        color: "danger",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
        <button
          onClick={() => router.history.back()}
          className="flex items-center justify-center text-sm hover:text-indigo-600 transition mb-6"
        >
          <FiArrowLeft className="mr-2 mb-1" />
          Back
        </button>

        <div className="mb-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <FiCheckCircle className="text-indigo-600 w-6 h-6" />
            </div>
          </div>
          <p className=" mt-1">
            Selected Plan: &nbsp;
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              {selectedPlan.name}
            </span>
          </p>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Unlock premium features with a subscription.
          </p>
        </div>

        <div className="space-y-4">
          {/* Yearly Plan */}
          <div
            className="cursor-pointer border-2 rounded-lg p-5 transition duration-200 relative border-orange-600 hover:shadow-lg hover:scale-[1.01] hover:border-orange-500"
            onClick={() => handlePayment("yearly")}
          >
            <div className="absolute top-0 right-0 bg-orange-600 text-xs font-bold text-black px-2 py-1 rounded-bl-md">
              2 Months Free!
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Yearly
                </h3>
                <p className="text-sm text-gray-500">
                  Pay once, enjoy all year
                </p>
              </div>
              <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
                ${Number(selectedPlan.price.replace("$", "")) * 10}
              </span>
            </div>
          </div>

          {/* Monthly Plan */}
          <div
            onClick={() => handlePayment("monthly")}
            className="cursor-pointer border-2 rounded-lg p-5 transition duration-200 border-indigo-500 shadow-md hover:shadow-lg hover:scale-[1.01] hover:border-indigo-400"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Monthly
                </h3>
                <p className="text-sm text-gray-500">
                  Billed monthly, cancel anytime
                </p>
              </div>
              <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
                {selectedPlan.price}
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs text-center text-gray-400 mt-6">
          🔒 Secure payments powered by{" "}
          <span className="font-medium">Razorpay</span>.
        </p>
      </div>
    </div>
  );
}
