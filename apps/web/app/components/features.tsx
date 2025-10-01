import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import {
  FaBell,
  FaClock,
  FaCloudUploadAlt,
  FaShieldAlt,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaCloudUploadAlt className="h-6 w-6 text-white" />,
      title: "Smart Video Workspace",
      description:
        "Upload raw footage once and organize everything in project folders. No more hunting through Google Drive.",
      bullets: [
        "Unlimited video storage",
        "Auto-organize by project",
        "Version history tracking",
        "Smart file compression",
      ],
      comingSoon: true, // 👈 Feature-level tag

      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      icon: <FaUsers className="h-6 w-6 text-white" />,
      title: "Team Collaboration Hub",
      description:
        "Invite editors, set permissions, and track progress in real-time. Everyone knows exactly what to do.",
      bullets: [
        "One-click editor invites",
        "Custom permission levels",
        "Real-time progress tracking",
        "Comment & feedback system",
      ],
      comingSoonBullets: ["Comment & feedback system"], // 👈 Bullet-level tag

      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      icon: <FaYoutube className="h-6 w-6 text-white" />,
      title: "Direct YouTube Publishing",
      description:
        "Skip the download-upload cycle. Publish approved videos directly to your channels with metadata.",
      bullets: [
        "Connect multiple channels",
        "Schedule publications",
        "Auto-fill metadata",
        "Thumbnail management",
      ],
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
    },
    {
      icon: <FaBell className="h-6 w-6 text-white" />,
      title: "Smart Notifications",
      description:
        "Stay in the loop without being overwhelmed. Get notified when it matters most.",
      comingSoon: true,

      bullets: [
        "Editor upload alerts",
        "Review reminders",
        "Publishing confirmations",
        "Custom notification rules",
      ],
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      icon: <FaShieldAlt className="h-6 w-6 text-white" />,
      title: "Creator-Grade Security",
      description:
        "Your content is precious. We protect it with enterprise-level security that creators trust.",
      bullets: [
        "End-to-end encryption",
        "Secure file sharing",
        "Access control logs",
        "GDPR compliant",
      ],
      gradient: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
    },
    {
      icon: <FaClock className="h-6 w-6 text-white" />,
      title: "Time-Saving Automation",
      description:
        "Automate the boring stuff so you can focus on creating amazing content that your audience loves.",
      bullets: [
        "Auto-backup uploads",
        "Smart file organization",
        "Workflow templates",
        "Batch operations",
      ],
      comingSoon: true,

      gradient: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
    },
  ];

  return (
    <section
      id="features"
      data-fast-scroll="scroll_to_features"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Built for Content Creators
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Scale Your Content
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Stop juggling multiple tools. Syncmate brings your entire video
            workflow into one powerful, creator-focused platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card
                className={`h-full ${feature.bgColor} border-2 ${feature.borderColor} hover:shadow-xl transition-all duration-300 group-hover:scale-105`}
              >
                <CardBody className="p-8">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    {feature.title}
                    {feature.comingSoon && (
                      <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-0.5 rounded">
                        Coming Soon
                      </span>
                    )}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.bullets.map((bullet, bulletIndex) => {
                      const isComingSoon =
                        feature.comingSoonBullets?.includes?.(bullet);
                      return (
                        <li key={bulletIndex} className="flex items-start">
                          <div
                            className={`w-5 h-5 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5`}
                          >
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
                            {bullet}
                            {isComingSoon && (
                              <span className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-1.5 py-0.5 rounded">
                                Coming Soon
                              </span>
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Creator testimonial section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative text-center">
            <div className="text-6xl mb-6">🎬</div>
            <h3 className="text-3xl font-bold mb-4">
              "Finally, a platform that gets creators"
            </h3>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              "I went from spending 2 hours per video on file management to just
              10 minutes. Syncmate gave me my life back so I can focus on what I
              love - creating content."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Mike Chen</div>
                <div className="text-blue-200 text-sm">
                  Tech Reviewer • 1.2M subscribers
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
