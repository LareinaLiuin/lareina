'use client'

import Image from "next/image";
import { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              林风声
            </h1>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => setActiveSection('about')}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === 'about' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                关于我
              </button>
              <button
                onClick={() => setActiveSection('skills')}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === 'skills' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                技能专长
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === 'contact' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                联系方式
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                你好，我是
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  林风声
                </span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                00后大厂项目经理，专注于智能体与AI编程的落地应用与提效。
                <br />
                热爱AI落地应用的文科生，两小时打工制的践行者。
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href="https://github.com/LareinaLiuin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors text-sm"
                >
                  GitHub Profile
                </a>
                <button
                  onClick={() => setActiveSection('contact')}
                  className="px-5 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm"
                >
                  联系我
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-48 h-48 lg:w-56 lg:h-56 relative">
                <Image
                  src="/avatar.jpg"
                  alt="林风声"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {activeSection === 'about' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">关于我</h2>
                <div className="space-y-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    作为一名00后的大厂项目经理，我始终站在技术与人文的交叉点上，致力于将AI的无限可能转化为实际的生产力提升。
                  </p>
                  <p>
                    我坚信技术的价值在于解决实际问题，特别关注身心灵领域与AI的结合创新，探索智能体在日常工作和生活中的应用场景。
                  </p>
                  <p>
                    "两小时打工制"不仅是我的工作理念，更是我对未来工作方式的思考和实践——通过AI工具和智能工作流，实现高效工作与生活平衡的完美结合。
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'skills' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">技能专长</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-xl">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        AI
                      </div>
                      <h3 className="ml-3 text-lg font-semibold text-slate-900 dark:text-white">
                        Claude Code 开发
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      擅长使用Claude Code进行脑洞开发，快速将创意想法转化为实际产品和解决方案。
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-xl">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        ⚡
                      </div>
                      <h3 className="ml-3 text-lg font-semibold text-slate-900 dark:text-white">
                        智能体工作流
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      使用Coze、N8N等智能体平台搭建工作流，实现日常工作200%提效。
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-xl">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        🔮
                      </div>
                      <h3 className="ml-3 text-lg font-semibold text-slate-900 dark:text-white">
                        AI落地应用
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      专注于AI技术在实际业务场景中的应用，特别关注身心灵领域的创新结合。
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-4 rounded-xl">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        📈
                      </div>
                      <h3 className="ml-3 text-lg font-semibold text-slate-900 dark:text-white">
                        效率提升
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      两小时打工制践行者，通过AI工具和方法论实现工作效率的倍增。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">联系方式</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 text-lg">📧</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white text-sm">微信</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">Lareina_Liuin</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 dark:text-green-400 text-lg">📱</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white text-sm">公众号</h3>
                        <a
                          href="https://mp.weixin.qq.com/s/ymquEzEettN27OaaJJZ8ZQ"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                        >
                          点击关注
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-purple-600 dark:text-purple-400 text-lg">💻</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white text-sm">GitHub</h3>
                        <a
                          href="https://github.com/LareinaLiuin/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                        >
                          @LareinaLiuin
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="relative w-36 h-36">
                      <Image
                        src="/wechat-qrcode.png"
                        alt="微信二维码"
                        fill
                        className="object-cover rounded-xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-3 text-sm">
            © 2024 林风声. 专注于AI落地应用与智能体开发
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/LareinaLiuin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://mp.weixin.qq.com/s/ymquEzEettN27OaaJJZ8ZQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              公众号
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
