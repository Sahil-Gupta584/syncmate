import { Divider } from "@heroui/react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Syncmate
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The collaboration platform that content creators actually love. 
              Stop the file chaos, start creating more.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/guptas3067"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://x.com/guptas3067"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaYoutube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="https://x.com/guptas3067"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://x.com/guptas3067"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-white">
              For Creators
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/guptas3067"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/guptas3067"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Creator Resources
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-white">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://x.com/guptas3067"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/guptas3067"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Video Tutorials
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/guptas3067"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Creator Community
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Divider className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Syncmate. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="/cancellations-and-refund"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Refund Policy
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> for content creators worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}