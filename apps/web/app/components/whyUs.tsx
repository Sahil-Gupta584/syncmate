import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const painPoints = [
  { text: "Record and download the video", icon: "📹", time: "5 min" },
  { text: "Upload to Google Drive or Dropbox", icon: "☁️", time: "15 min" },
  { text: "Send link to editor via WhatsApp/Email", icon: "📱", time: "2 min" },
  { text: "Editor downloads and edits", icon: "✂️", time: "3 hours" },
  { text: "Editor sends back via new link", icon: "🔗", time: "10 min" },
  { text: "Download again and upload to YouTube", icon: "📤", time: "20 min" },
];

const ourSolution = [
  { text: "Upload video to your workspace", icon: "🚀", time: "2 min" },
  { text: "Assign editor(s) with one click", icon: "👥", time: "10 sec" },
  {
    text: "Editor downloads and re-uploads edited version",
    icon: "⚡",
    time: "5 min",
  },
  { text: "You review and approve", icon: "👀", time: "5 min" },
  { text: "Directly publish to YouTube", icon: "🎯", time: "30 sec" },
];

const stats = [
  {
    value: "Hours",
    label: "Saved per video",
    color: "from-green-400 to-green-600",
  },
  {
    value: "80%",
    label: "Faster publishing",
    color: "from-blue-400 to-blue-600",
  },
  {
    value: "Zero",
    label: "File management stress",
    color: "from-purple-400 to-purple-600",
  },
];

export default function WhyUs() {
  const oldWorkflowTime = painPoints.reduce((total, point) => {
    const minutes =
      parseInt(point.time.split(" ")[0]) *
      (point.time.includes("hour") ? 60 : 1);
    return total + minutes;
  }, 0);

  const newWorkflowTime = ourSolution.reduce((total, point) => {
    const timeStr = point.time.split(" ")[0];
    const minutes =
      timeStr === "10" && point.time.includes("sec")
        ? 0.17
        : timeStr === "30" && point.time.includes("sec")
          ? 0.5
          : parseInt(timeStr);
    return total + minutes;
  }, 0);

  return (
    <section
      id="whyUs"
      className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20 px-4 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">The Creator's</span>{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Daily Struggle
            </span>{" "}
            <span className="text-gray-900 dark:text-white">vs</span>{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Syncmate Magic
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See exactly how we transform the chaotic creator workflow into a
            streamlined, professional collaboration experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Old Workflow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-8 border-2 border-red-200 dark:border-red-800">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold mb-4">
                  <FaExclamationTriangle className="mr-2" />
                  The Old Way (Painful!)
                </div>
                <p className="text-red-700 dark:text-red-300 font-medium">
                  What every creator deals with daily...
                </p>
              </div>

              <div className="space-y-4">
                {painPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-red-200 dark:border-red-800"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <div className="text-2xl">{point.icon}</div>
                    <div className="flex-1">
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {point.text}
                      </p>
                      <span className="text-red-500 text-sm font-semibold">
                        ⏱️ {point.time}
                      </span>
                    </div>
                    <FaArrowRight className="text-red-400 mt-2 flex-shrink-0" />
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/40 rounded-lg border border-red-300 dark:border-red-700">
                <p className="text-red-800 dark:text-red-200 font-semibold text-center">
                  😩 Result: Stressed creators, confused editors, missed
                  deadlines
                </p>
              </div>
            </div>
          </motion.div>

          {/* New Workflow */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-lg font-bold mb-4">
                  <FaCheckCircle className="mr-2" />
                  The Syncmate Way ✨
                </div>
                <p className="text-green-700 dark:text-green-300 font-medium">
                  How successful creators work now...
                </p>
              </div>

              <div className="space-y-4">
                {ourSolution.map((point, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-green-200 dark:border-green-800"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <div className="text-2xl">{point.icon}</div>
                    <div className="flex-1">
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {point.text}
                      </p>
                      <span className="text-green-500 text-sm font-semibold">
                        ⚡ {point.time}
                      </span>
                    </div>
                    <FaCheckCircle className="text-green-400 mt-2 flex-shrink-0" />
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/40 rounded-lg border border-green-300 dark:border-green-700">
                <p className="text-green-800 dark:text-green-200 font-semibold text-center">
                  🚀 Result: Happy creators, efficient editors, consistent
                  uploads
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 mt-16 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">The Syncmate Impact</h3>
              <p className="text-blue-100 text-lg">
                Real results from creators who made the switch
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-blue-100 text-lg">
                <strong>Join 500+ creators</strong> who've already transformed
                their workflow
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
