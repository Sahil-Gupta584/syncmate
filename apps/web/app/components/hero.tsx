"use client";
import heroImage from "@/public/heroImage.png";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaPlay, FaYoutube } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="pt-20 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <motion.div
            className="lg:col-span-6 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Trust indicator */}
            <motion.div
              className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Trusted by 500+ Content Creators
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Stop the{" "}
              <span className="text-red-500 line-through decoration-4">
                Download-Upload
              </span>{" "}
              <br />
              <span className="text-primary bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nightmare
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
              The <strong>first collaboration platform</strong> built
              specifically for content creators. Upload once, collaborate
              seamlessly, publish directly to YouTube.
              <span className="text-primary font-semibold">
                No more file chaos.
              </span>
            </p>

            {/* Pain point callout */}
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 rounded-r-lg">
              <p className="text-red-700 dark:text-red-300 text-sm">
                <strong>Tired of:</strong> Google Drive links, WhatsApp file
                sharing, endless downloads, version confusion, and manual
                YouTube uploads?
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Link href={process.env.VITE_CREATOR_BASE_URL!}>
                <Button className="rounded-md w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 h-auto text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <FaPlay className="mr-2" />
                  Start Free Trial
                </Button>
              </Link>
              <a href="#whyUs">
                <Button
                  variant="bordered"
                  className="rounded-md w-full sm:w-auto px-8 py-6 h-auto text-lg border-2 border-gray-300 dark:border-gray-600 hover:border-primary dark:text-gray-300 hover:bg-primary/5 transition-all duration-300"
                >
                  See How It Works
                </Button>
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                    +
                  </div>
                </div>
                <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                  500+ creators already saving hours weekly
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center space-x-4">
              <span className="text-gray-500 dark:text-gray-300 text-sm font-medium">
                Works with
              </span>
              <div className="flex items-center justify-center bg-white dark:bg-gray-800 rounded-full h-10 w-10 shadow-sm">
                <FaYoutube className="h-6 w-6 text-red-600" />
              </div>
              <span className="text-gray-500 dark:text-gray-300 text-sm">
                TikTok, Instagram & more coming soon
              </span>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✅ No Downloads
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                🚀 Direct Publish
              </motion.div>

              <div className="rounded-xl bg-white dark:bg-gray-800 shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={heroImage.src}
                    alt="Content creator workflow dashboard"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70  to-black/30 flex items-center justify-center">
                    <div className="text-white text-center max-w-md px-6">
                      <motion.div
                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaPlay className="text-white text-xl ml-1" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-3 drop-shadow-md">
                        See Syncmate in Action
                      </h3>
                      <p className="text-white/90 drop-shadow font-medium">
                        Watch how creators are saving 5+ hours per video with
                        our streamlined workflow
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-white dark:bg-gray-800 relative">
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-4 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-center text-xl font-semibold mt-4 text-gray-900 dark:text-white">
                    Upload → Collaborate → Publish
                  </h3>
                  <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
                    The only platform that connects your entire video workflow
                    in one place
                  </p>

                  {/* Mini workflow steps */}
                  <div className="flex justify-center space-x-4 mt-6">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-1">
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">
                          1
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">Upload</span>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-1">
                        <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">
                          2
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">Edit</span>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-1">
                        <span className="text-green-600 dark:text-green-400 text-sm font-bold">
                          3
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">Publish</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating testimonial */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-w-xs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                  "Saved me 6 hours per video. Game changer!"
                </p>
                <div className="flex items-center mt-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2"></div>
                  <span className="text-xs font-medium text-gray-500">
                    Tech Creator, 2M subs
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
