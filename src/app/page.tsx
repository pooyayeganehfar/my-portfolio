"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, MessageCircle, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function NewHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50"
      >
        <div className="md:flex flex-row-reverse">
          {/* Right Side - Photo */}
          <div className="md:w-2/5 relative h-80 md:h-auto">
            <Image
              src="/img/pooya.webp"
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
            {/* Status Badge */}
            <div className="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center border border-green-500/20">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full ml-2 animate-pulse"></div>
              <span className="text-sm font-medium text-green-400">مشغول در تیم رینگ 🦦</span>
            </div>
          </div>

          {/* Left Side - Details */}
          <div className="p-8 md:w-3/5">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">پویا یگانه فر</h1>
            <p className="text-gray-300 mb-6 text-lg">هم بنیانگذار تیم رینگ</p>
            
            <div className="space-y-5">
              <div className="flex items-center text-gray-300">
                <Mail className="ml-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:pyeganehfar@gmail.com" className="hover:text-white transition-colors">pyeganehfar@gmail.com</a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="ml-3 h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="tel:+989302169243" className="hover:text-white transition-colors" dir="ltr">+98 930 216 9243</a>
              </div>
              
              <div className="pt-5 border-t border-gray-700">
                <h3 className="text-sm font-semibold text-gray-400 mb-4 px-1">شبکه‌های اجتماعی</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <a 
                    href="https://github.com/pooyayeganehfar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-gray-700/40 hover:bg-gray-700/70 transition-colors group"
                    aria-label="GitHub"
                  >
                    <div className="p-1.5 sm:p-2 rounded-lg bg-gray-600/30 group-hover:bg-[#333] transition-colors flex-shrink-0">
                      <Github className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm truncate">GitHub</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/pooya-yeganefar-761a7b201" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-gray-700/40 hover:bg-gray-700/70 transition-colors group"
                    aria-label="LinkedIn"
                  >
                    <div className="p-1.5 sm:p-2 rounded-lg bg-gray-600/30 group-hover:bg-[#0A66C2] transition-colors flex-shrink-0">
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm truncate">LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/pooyayeganefar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-gray-700/40 hover:bg-gray-700/70 transition-colors group"
                    aria-label="Instagram"
                  >
                    <div className="p-1.5 sm:p-2 rounded-lg bg-gray-600/30 group-hover:bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] transition-colors flex-shrink-0">
                      <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm truncate">Instagram</span>
                  </a>
                  
                  <a 
                    href="https://t.me/pooyayeganefar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-gray-700/40 hover:bg-gray-700/70 transition-colors group"
                    aria-label="Telegram"
                  >
                    <div className="p-1.5 sm:p-2 rounded-lg bg-gray-600/30 group-hover:bg-[#2AABEE] transition-colors flex-shrink-0">
                      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm truncate">Telegram</span>
                  </a>
                </div>
              </div>

              <div className="pt-5">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">تیم فعلی</h3>
                <div className="inline-flex items-center bg-blue-900/30 text-blue-300 px-4 py-2.5 rounded-lg border border-blue-800/50 group hover:bg-blue-900/50 transition-colors">
                  <Image 
                    src="/img/ringe.webp" 
                    alt="Ringe Team" 
                    width={24} 
                    height={24} 
                    className="ml-2 w-6 h-6 rounded-full object-cover"
                  />
                  <span className="font-medium">تیم رینگ</span>
                  <span className="mr-2 text-blue-400">•</span>
                  <a 
                    href="https://ringe.ir" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                  >
                    مشاهده وبسایت
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 -rotate-45 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
