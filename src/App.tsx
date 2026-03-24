import React, { useState } from 'react';
import { Search, MapPin, FileText, Box, Clock, Hash, Eye, Star, ShoppingCart, ChevronRight, X, ArrowLeft, Play, Settings } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'product' | 'trial'>('product');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f7fa] font-sans text-slate-800">
      <Header />
      
      {currentView === 'product' ? (
        <main className="max-w-[1400px] mx-auto px-6 py-6">
          <Breadcrumb />
          <ProductHeader 
            onOpenTrial={() => setCurrentView('trial')} 
            onOpenModal={() => setIsModalOpen(true)} 
          />
          <div className="flex gap-6 mt-6">
            <div className="flex-1">
              <ProductDetails />
            </div>
            <div className="w-[320px] shrink-0">
              <Sidebar />
            </div>
          </div>
        </main>
      ) : (
        <TrialPage onBack={() => setCurrentView('product')} />
      )}

      {isModalOpen && <CustomModelModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xl leading-none">S</div>
          <span className="text-xl font-bold tracking-wider">数据流通利用统一服务平台</span>
        </div>
        
        <nav className="flex items-center gap-10 text-base">
          <a href="#" className="text-slate-600 hover:text-blue-600">首页</a>
          <a href="#" className="text-slate-600 hover:text-blue-600">政策资讯</a>
          <a href="#" className="text-[#0056ff] font-medium relative after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-0.5 after:bg-[#0056ff]">流通利用</a>
          <a href="#" className="text-slate-600 hover:text-blue-600">数据生态</a>
          <a href="#" className="text-slate-600 hover:text-blue-600">区块链核验</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 cursor-pointer hover:bg-slate-50 transition-colors">
            <Search size={18} />
          </div>
          <button className="bg-[#0056ff] text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
            立即登录
          </button>
        </div>
      </div>
    </header>
  );
}

function Breadcrumb() {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
      <MapPin size={16} className="text-[#0056ff]" />
      <a href="#" className="hover:text-[#0056ff]">首页</a>
      <ChevronRight size={14} />
      <a href="#" className="hover:text-[#0056ff]">产品中心</a>
      <ChevronRight size={14} />
      <span className="text-slate-700">详情</span>
    </div>
  );
}

function ProductHeader({ onOpenTrial, onOpenModal }: { onOpenTrial: () => void, onOpenModal: () => void }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm flex gap-8 relative">
      {/* Image */}
      <div className="w-[200px] h-[200px] bg-blue-50/50 rounded-lg overflow-hidden shrink-0 border border-slate-100 flex items-center justify-center">
        <img src="https://picsum.photos/seed/finance/400/400" alt="Product" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-2xl font-bold text-slate-800">西安金融风险报告</h1>
          <span className="px-2 py-0.5 text-xs text-[#0056ff] border border-[#0056ff]/30 bg-blue-50 rounded">已登记</span>
        </div>

        <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-slate-600 mb-8">
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-slate-400" />
            <span className="text-slate-500">产品编号：</span>
            <span>CPBH-202501021</span>
          </div>
          <div className="flex items-center gap-2">
            <Box size={16} className="text-slate-400" />
            <span className="text-slate-500">产品类型：</span>
            <span>数据应用</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-slate-400" />
            <span className="text-slate-500">所属业务节点：</span>
            <span>流通利用平台</span>
          </div>
          <div className="flex items-center gap-2">
            <Hash size={16} className="text-slate-400" />
            <span className="text-slate-500">产品标识：</span>
            <span>61566565776577676673303000000031</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye size={16} className="text-slate-400" />
            <span className="text-slate-500">浏览量：</span>
            <span>407</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={16} className="text-slate-400" />
            <span className="text-slate-500">收藏量：</span>
            <span>11</span>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingCart size={16} className="text-slate-400" />
            <span className="text-slate-500">加购量：</span>
            <span>4</span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="bg-[#0056ff] text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition-colors">
              <FileText size={16} />
              立即订购
            </button>
            <button className="border border-slate-300 text-slate-600 px-4 py-2 rounded flex items-center gap-2 hover:bg-slate-50 transition-colors">
              <Star size={16} />
              收藏
            </button>
            <button className="border border-slate-300 text-slate-600 px-4 py-2 rounded flex items-center gap-2 hover:bg-slate-50 transition-colors">
              <ShoppingCart size={16} />
              加购
            </button>
            
            {/* New Added Buttons */}
            <button 
              onClick={onOpenTrial}
              className="border border-[#0056ff] text-[#0056ff] px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-50 transition-colors ml-2"
            >
              <Play size={16} />
              在线试用
            </button>
            <button 
              onClick={onOpenModal}
              className="border border-[#0056ff] text-[#0056ff] px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-50 transition-colors"
            >
              <Settings size={16} />
              定制模型
            </button>
          </div>
          
          <div className="text-[#ff6b00] font-medium text-xl italic">
            按订阅12元/月
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDetails() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-slate-100 px-6 pt-2">
        <button className="px-6 py-4 text-[#0056ff] border-b-2 border-[#0056ff] font-medium">产品信息</button>
        <button className="px-6 py-4 text-slate-600 hover:text-[#0056ff] transition-colors">数据申明信息</button>
        <button className="px-6 py-4 text-slate-600 hover:text-[#0056ff] transition-colors">产品提供方信息</button>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-4 bg-[#0056ff] rounded-full"></div>
          <h3 className="font-bold text-slate-800">基本信息</h3>
        </div>

        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm text-left">
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="w-48 bg-slate-50/80 py-4 px-6 text-slate-600 border-r border-slate-200 text-center">产品名称</td>
                <td className="py-4 px-6 text-slate-800">西安金融风险报告</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="w-48 bg-slate-50/80 py-4 px-6 text-slate-600 border-r border-slate-200 text-center">产品版本</td>
                <td className="py-4 px-6 text-slate-800">V1.0</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="w-48 bg-slate-50/80 py-4 px-6 text-slate-600 border-r border-slate-200 text-center">产品类型</td>
                <td className="py-4 px-6 text-slate-800">数据应用</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="w-48 bg-slate-50/80 py-4 px-6 text-slate-600 border-r border-slate-200 text-center">数据主体</td>
                <td className="py-4 px-6 text-slate-800">个人信息</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="w-48 bg-slate-50/80 py-4 px-6 text-slate-600 border-r border-slate-200 text-center">是否涉及个人信息</td>
                <td className="py-4 px-6 text-slate-800">否</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="w-48 bg-slate-50/80 py-4 px-6 text-slate-600 border-r border-slate-200 text-center">产品简介</td>
                <td className="py-4 px-6 text-slate-800">提供西安市企业和个人信用风险分析报告，优化金融服务</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="w-48 bg-slate-50/80 py-4 px-6 text-slate-600 border-r border-slate-200 text-center">行业分类</td>
                <td className="py-4 px-6 text-slate-800">金融业</td>
              </tr>
              <tr>
                <td className="w-48 bg-slate-50/80 py-4 px-6 text-slate-600 border-r border-slate-200 text-center">产品登记地域</td>
                <td className="py-4 px-6 text-slate-800">陕西省-西安市-市辖区</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  const recommendations = [
    { title: '西安金融风险报告', desc: '提供西安市企业和个人信用风险分析报告，优化金融服务' },
    { title: '陕西居民健康档案数据集', desc: '提供陕西居民健康档案的结构化数据集，包含人口健康信息、疾病记录等，适用于医疗研究和政...' },
    { title: '信用评分模型', desc: '基于信用数据的评分模型，优化金融服务和风险管理' },
    { title: '陕西旅游资源分析报告', desc: '分析陕西省旅游资源和游客行为数据，生成市场趋势报告，优化旅游产业' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-blue-50/50 to-white">
        <h3 className="font-bold text-slate-800">热门推荐</h3>
        <a href="#" className="text-xs text-slate-400 hover:text-[#0056ff] transition-colors">查看更多</a>
      </div>
      <div className="p-4 flex flex-col gap-4">
        {recommendations.map((item, idx) => (
          <div key={idx} className="bg-gradient-to-br from-[#f0f7ff] to-white border border-blue-100/50 rounded-lg p-4 cursor-pointer hover:shadow-md hover:border-blue-200 transition-all">
            <h4 className="font-medium text-slate-800 mb-2">{item.title}</h4>
            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrialPage({ onBack }: { onBack: () => void }) {
  const [testResult, setTestResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTest = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setTestResult(JSON.stringify({
        status: "success",
        code: 200,
        message: "请求成功",
        data: {
          riskScore: 85,
          riskLevel: "低风险",
          details: "该主体信用记录良好，无违约历史。",
          reportId: "REP-2025-03-23-001"
        }
      }, null, 2));
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-6 animate-in fade-in duration-300">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-[#0056ff] mb-6 transition-colors font-medium"
      >
        <ArrowLeft size={18} />
        <span>返回产品详情</span>
      </button>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden flex min-h-[700px] border border-slate-200">
        {/* Left Side: Input */}
        <div className="w-1/2 border-r border-slate-200 p-8 flex flex-col bg-white">
          <h2 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[#0056ff] rounded-full"></div>
            接口参数填写
          </h2>
          
          <div className="space-y-6 flex-1">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">API Key <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                placeholder="请输入您的 API Key"
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0056ff]/20 focus:border-[#0056ff] transition-all"
                defaultValue="sk-test-1234567890abcdef"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">请求主体 (JSON) <span className="text-red-500">*</span></label>
              <textarea 
                rows={14}
                placeholder="请输入请求参数..."
                className="w-full border border-slate-300 rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#0056ff]/20 focus:border-[#0056ff] transition-all resize-none"
                defaultValue={JSON.stringify({
                  "companyName": "测试企业有限公司",
                  "creditCode": "91610100MA6XXXXX00",
                  "queryType": "full_report"
                }, null, 2)}
              ></textarea>
            </div>
          </div>

          <div className="pt-6 mt-auto border-t border-slate-100">
            <button 
              onClick={handleTest}
              disabled={isLoading}
              className="w-full bg-[#0056ff] text-white py-3.5 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-70 flex items-center justify-center gap-2 shadow-sm shadow-blue-500/30"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  测试中...
                </>
              ) : (
                <>
                  <Play size={18} fill="currentColor" />
                  发送测试
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Side: Output */}
        <div className="w-1/2 bg-slate-50 p-8 flex flex-col">
          <h2 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <div className="w-1.5 h-6 bg-emerald-500 rounded-full"></div>
            测试结果
          </h2>

          <div className="flex-1 flex flex-col gap-6">
            <div className="flex-1 flex flex-col">
              <h3 className="text-sm font-medium text-slate-700 mb-2 flex items-center justify-between">
                <span>返回信息 (Response)</span>
                {testResult && <span className="text-xs text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">Status: 200 OK</span>}
              </h3>
              <div className="flex-1 bg-[#1e293b] rounded-xl p-5 overflow-auto relative shadow-inner border border-slate-800">
                {testResult ? (
                  <pre className="text-emerald-400 font-mono text-sm whitespace-pre-wrap leading-relaxed">
                    {testResult}
                  </pre>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 text-sm gap-3">
                    <Box size={32} className="text-slate-600 opacity-50" />
                    <p>点击左侧“发送测试”按钮获取结果</p>
                  </div>
                )}
              </div>
            </div>

            <div className="h-[280px] flex flex-col">
              <h3 className="text-sm font-medium text-slate-700 mb-2">SDK 示例 (Python)</h3>
              <div className="flex-1 bg-[#1e293b] rounded-xl p-5 overflow-auto shadow-inner border border-slate-800">
                <pre className="text-blue-300 font-mono text-sm whitespace-pre-wrap leading-relaxed">
{`import requests
import json

url = "https://api.example.com/v1/finance/risk-report"
headers = {
  "Authorization": "Bearer sk-test-1234567890abcdef",
  "Content-Type": "application/json"
}
payload = {
  "companyName": "测试企业有限公司",
  "creditCode": "91610100MA6XXXXX00",
  "queryType": "full_report"
}

response = requests.post(url, headers=headers, json=payload)
print(response.json())`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomModelModal({ onClose }: { onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Settings size={20} className="text-[#0056ff]" />
            定制模型需求收集
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 p-1.5 rounded-md hover:bg-slate-200 transition-colors">
            <X size={20} />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-5 shadow-sm">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">提交成功</h3>
            <p className="text-slate-500">您的需求已收到，我们的业务人员将尽快与您联系。</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">联系人姓名 <span className="text-red-500">*</span></label>
                <input 
                  required
                  type="text" 
                  placeholder="请输入姓名"
                  className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0056ff]/20 focus:border-[#0056ff] transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">联系方式 <span className="text-red-500">*</span></label>
                <input 
                  required
                  type="text" 
                  placeholder="手机号或邮箱"
                  className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0056ff]/20 focus:border-[#0056ff] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">需求概述 <span className="text-red-500">*</span></label>
              <input 
                required
                type="text" 
                placeholder="一句话描述您的核心需求"
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0056ff]/20 focus:border-[#0056ff] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">留言详细说明</label>
              <textarea 
                rows={4}
                placeholder="请详细描述您的业务场景、期望的模型效果、数据情况等..."
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0056ff]/20 focus:border-[#0056ff] transition-all resize-none"
              ></textarea>
            </div>

            <div className="pt-5 mt-2 flex items-center justify-end gap-3 border-t border-slate-100">
              <button 
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-colors"
              >
                取消
              </button>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-[#0056ff] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-70 flex items-center gap-2 shadow-sm shadow-blue-500/30"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    提交中...
                  </>
                ) : (
                  '提交需求'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
