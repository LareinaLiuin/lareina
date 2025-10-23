'use client'

import Image from "next/image";
import { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 flex flex-col">
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

      {/* Main Content Grid */}
      <section className="pt-24 px-6 flex-grow" style={{ height: 'calc(100vh - 96px)' }}>
        <div className="max-w-7xl mx-auto h-full grid grid-rows-[2fr_3fr] grid-cols-2 gap-4">

          {/* 区域2: 左上方 (40%高度的左侧) - 个人简介 */}
          <div className="area-2 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 flex items-center justify-center">
            <div className="jianjie text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                你好，我是
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  林风声
                </span>
              </h1>
              <ul className="text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-3 text-left">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 text-lg mt-0.5">👤</span>
                  <span>00后大厂项目经理，一个热爱AI落地应用的文科生。</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 text-lg mt-0.5">🚀</span>
                  <span>专注于智能体与AI编程的落地应用与提效，四小时打工制的践行者。</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 text-lg mt-0.5">🧘</span>
                  <span>在身心灵领域探索AI落地闭环全流程方案。</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 区域3: 右上方 (40%高度的右侧) - 按钮 */}
          <div className="area-3 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 flex items-center justify-center">
            <div className="anniu">
              <div className="photo mb-6">
                <div className="w-32 h-32 mx-auto relative">
                  <Image
                    src="/avatar.jpg"
                    alt="林风声"
                    fill
                    className="object-cover rounded-full shadow-2xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/LareinaLiuin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors text-sm text-center"
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
          </div>

          {/* 区域1: 下方 (60%高度) - 内容区 */}
          <div className="area-1 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 col-span-2 overflow-y-auto">
            <div className="content">
              {activeSection === 'about' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">关于我</h2>
                  <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p className="flex items-start space-x-3">
                      <span className="text-purple-500 text-lg mt-0.5">💡</span>
                      <span>作为一个文科生，我更关注的不是技术本身，而是技术能为我们带来什么，我始终走在将AI的无限可能转化为实际的生产力提升的道路上。</span>
                    </p>
                    <p className="flex items-start space-x-3">
                      <span className="text-blue-500 text-lg mt-0.5">⚙️</span>
                      <span>"四小时打工制"不仅是我当下平衡工作与生活的方法论，更多的是我对未来工作方式的思考和实践——通过AI工具和全自动工作流，实现高效工作与生活平衡的完美结合。</span>
                    </p>
                    <p className="flex items-start space-x-3">
                      <span className="text-green-500 text-lg mt-0.5">🌱</span>
                      <span>在不断学习、拓展自我生命宽度的道路上，身心灵领域让我感受到了由内而外的力量和改变，因此我非常希望探索身心灵领域与AI的结合创新，打造真正能够落地闭环的全流程方案。</span>
                    </p>
                  </div>
                </div>
              )}

              {activeSection === 'skills' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
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
              )}

              {activeSection === 'contact' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
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
              )}
            </div>
          </div>
        </div>
      </section>

  
      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 px-6 mt-auto">
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
