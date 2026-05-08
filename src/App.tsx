/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  Zap, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  AlertCircle,
  ChevronDown,
  Star,
  Smartphone,
  MousePointer2
} from 'lucide-react';

const PRODUCT_NAME = "AutoSale 5.0";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className={`text-2xl font-extrabold tracking-tighter ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
          {PRODUCT_NAME}
        </div>
        <a 
          href="#form" 
          className="bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 glow-orange text-sm md:text-base"
        >
          Đăng ký ngay
        </a>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center bg-brand-blue text-white overflow-hidden pt-20">
    {/* Decorative background elements */}
    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-orange/10 blur-[120px] rounded-full" />
    <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/10 blur-[100px] rounded-full" />

    <div className="container mx-auto px-6 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:w-3/5"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          X3 Doanh Số Với Hệ Thống <span className="text-brand-orange">Bán Hàng Tự Động</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
          Giải pháp đột phá dành riêng cho chủ shop online và doanh nghiệp nhỏ. Tối ưu quy trình, giảm chi phí nhân sự và bùng nổ đơn hàng 24/7.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="#form" className="btn bg-brand-orange text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-orange-hover transition-all flex items-center justify-center gap-2 group glow-orange">
            Nhận Tư Vấn Miễn Phí
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#benefits" className="btn border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-brand-blue transition-all">
            Tìm Hiểu Thêm
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:w-2/5 relative"
      >
        <div className="bg-gradient-to-tr from-brand-orange to-orange-400 p-1 rounded-2xl shadow-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
            alt="Dashboard mockup" 
            className="rounded-xl w-full translate-y-4"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white text-brand-blue p-4 rounded-xl shadow-xl hidden md:block">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-green-500 w-8 h-8" />
            <div>
              <div className="text-2xl font-bold">+215%</div>
              <div className="text-xs text-slate-500">Doanh thu tháng này</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const PainPoints = () => {
  const points = [
    {
      title: "Quá Tải Đơn Hàng",
      desc: "Khách nhắn tin quá nhiều nhưng không kịp phản hồi dẫn đến mất đơn vào tay đối thủ.",
      icon: <AlertCircle className="text-red-500 w-10 h-10" />
    },
    {
      title: "Chi Phí Quảng Cáo Cao",
      desc: "Đốt tiền quảng cáo nhưng tỷ lệ chốt đơn thấp, bạn không thu được lợi nhuận thực tế.",
      icon: <AlertCircle className="text-red-500 w-10 h-10" />
    },
    {
      title: "Nhân Sự Rời Bỏ",
      desc: "Mệt mỏi vì đào tạo nhân viên chốt sale nhưng họ lại nghỉ việc sau vài tháng làm việc.",
      icon: <AlertCircle className="text-red-500 w-10 h-10" />
    }
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-4">Bạn Có Đang Gặp Phải Những Vấn Đề Này?</h2>
          <p className="text-lg text-slate-600">Đừng để những rào cản cũ cản bước tiến của doanh nghiệp bạn.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-2xl border-t-4 border-red-500 shadow-lg hover:translate-y-[-8px] transition-transform"
            >
              <div className="mb-6">{point.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="w-12 h-12 text-brand-orange" />,
      title: "Tự Động 100%",
      desc: "Hệ thống tự động chăm sóc và chốt đơn 24/7 ngay cả khi bạn đang ngủ hoặc bận rộn."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-brand-orange" />,
      title: "Tăng Tỷ Lệ Chốt",
      desc: "Kịch bản cá nhân hóa giúp khách hàng hài lòng, nâng cao tỷ lệ chuyển đổi trung bình 40%."
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-brand-orange" />,
      title: "Bảo Mật Tuyệt Đối",
      desc: "Dữ liệu khách hàng được bảo mật và vận hành ổn định trên mọi nền tảng phổ biến hiện nay."
    }
  ];

  return (
    <section id="benefits" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-4">Giải Pháp {PRODUCT_NAME} Giúp Bạn Như Thế Nào?</h2>
          <p className="text-lg text-slate-600">Những lợi ích thực tế giúp bạn bứt phá trong kinh doanh kỷ nguyên số.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="bg-orange-50 w-24 h-24 rounded-full flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href="#form" className="btn bg-brand-orange text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand-orange-hover transition-all glow-orange">
            Tôi Muốn Trải Nghiệm Ngay
          </a>
        </div>
      </div>
    </section>
  );
};

const Proof = () => (
  <section className="bg-brand-blue py-24 text-white">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 text-center mb-24">
        <div>
          <div className="text-6xl font-extrabold text-brand-orange mb-2">500+</div>
          <p className="text-xl text-slate-300">Chủ shop đã tin dùng</p>
        </div>
        <div>
          <div className="text-6xl font-extrabold text-brand-orange mb-2">1.2M</div>
          <p className="text-xl text-slate-300">Đơn hàng được xử lý</p>
        </div>
        <div>
          <div className="text-6xl font-extrabold text-brand-orange mb-2">95%</div>
          <p className="text-xl text-slate-300">Khách hàng hài lòng</p>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Khách Hàng Nói Gì Về Chúng Tôi?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            text: "Từ khi dùng AutoSale 5.0, tôi không còn phải thức đến 2h sáng để trả lời tin nhắn nữa. Doanh thu tăng vọt mà lại có thời gian cho gia đình.",
            author: "Chị Lan",
            role: "Chủ Shop Mỹ Phẩm"
          },
          {
            text: "Hệ thống vận hành rất mượt, nhân viên hỗ trợ nhiệt tình. Đây là khoản đầu tư thông minh nhất năm nay của doanh nghiệp tôi.",
            author: "Anh Tuấn",
            role: "CEO Doanh nghiệp nhỏ"
          }
        ].map((testimonial, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 italic"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-brand-orange text-brand-orange" />)}
            </div>
            <p className="text-lg text-slate-200 mb-6 leading-relaxed">"{testimonial.text}"</p>
            <div className="not-italic">
              <span className="font-bold text-lg text-white">{testimonial.author}</span>
              <span className="text-slate-400 block text-sm">{testimonial.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Offer = () => {
  const [timeLeft, setTimeLeft] = useState(86399); // 24h in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto border-4 border-brand-orange rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-8 py-2 rounded-full font-bold uppercase tracking-widest text-sm">
            Ưu đãi giới hạn
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-brand-blue mb-8">Sở Hữu Trọn Bộ Giải Pháp</h2>
          
          <div className="mb-10">
            <span className="text-2xl text-slate-400 line-through mr-4">5.000.000đ</span>
            <span className="text-6xl md:text-8xl font-black text-brand-blue">1.990.000đ</span>
          </div>

          <div className="bg-red-50 text-red-600 py-3 px-6 rounded-full inline-flex items-center gap-2 font-bold mb-10">
            <Clock className="w-5 h-5" />
            Kết thúc sau: {formatTime(timeLeft)}
          </div>

          <p className="text-xl text-slate-600 mb-12">
            <strong>Quà tặng kèm:</strong> Khóa học tối ưu quảng cáo trị giá 2tr đồng (Dành cho 50 người đăng ký sớm nhất).
          </p>

          <a href="#form" className="btn block sm:inline-block bg-brand-orange text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-brand-orange-hover transition-all glow-orange">
            NHẬN ƯU ĐÃI NGAY
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Tôi không rành kỹ thuật có dùng được không?",
      a: "Hoàn toàn được! Giao diện thiết kế theo hướng kéo thả và cài đặt tốn chưa đầy 15 phút. Chúng tôi cũng có đội ngũ kỹ thuật hỗ trợ bạn 1-1 cho đến khi vận hành trôi chảy."
    },
    {
      q: "Sản phẩm có hỗ trợ trên điện thoại không?",
      a: "Chắc chắn rồi. Hệ thống tương thích hoàn toàn với nền tảng iOS và Android, cho phép bạn quản lý mọi hoạt động kinh doanh ngay trên thiết bị di động."
    },
    {
      q: "Tôi có được hoàn tiền nếu không hiệu quả?",
      a: "Chúng tôi cam kết chất lượng sản phẩm. Nếu bạn thực hiện đúng quy trình mà không mang lại kết quả, chúng tôi sẽ hỗ trợ tối ưu lại cho đến khi có đơn hàng."
    }
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-16 text-center">Câu Hỏi Thường Gặp</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="text-xl font-bold text-brand-blue">{faq.q}</span>
                <ChevronDown className={`w-6 h-6 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RegisterForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="form" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto bg-white p-8 md:p-12 rounded-[32px] shadow-2xl relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-4">Để Lại Thông Tin</h2>
            <p className="text-slate-600">Chúng tôi sẽ liên hệ tư vấn giải pháp tối ưu nhất cho bạn trong 15 phút.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Họ và Tên</label>
              <input 
                type="text" 
                required 
                placeholder="Nhập tên của bạn..." 
                className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Số Điện Thoại (Zalo)</label>
              <input 
                type="tel" 
                required 
                placeholder="Số điện thoại nhận tư vấn..." 
                className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-brand-blue text-white py-5 rounded-xl text-xl font-bold hover:bg-brand-blue-light transition-all transform active:scale-95"
            >
              GỬI YÊU CẦU NGAY
            </button>
            <p className="text-center text-xs text-slate-400 mt-4 italic">
              * Chúng tôi cam kết bảo mật thông tin khách hàng tuyệt đối theo quy định.
            </p>
          </form>

          <AnimatePresence>
            {submitted && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 bg-white rounded-[32px] flex flex-col items-center justify-center p-8 text-center"
              >
                <div className="bg-green-100 p-4 rounded-full mb-6">
                  <CheckCircle2 className="w-16 h-16 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-brand-blue mb-4">Gửi Thành Công!</h3>
                <p className="text-lg text-slate-600">Cảm ơn bạn đã tin tưởng. Chuyên viên sẽ gọi cho bạn ngay trong ít phút.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ZaloFloat = () => (
  <a 
    href="https://zalo.me/your_number" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#0068ff] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
    aria-label="Chat Zalo"
  >
    <MessageCircle className="w-8 h-8" />
    <span className="absolute right-full mr-4 bg-white text-brand-blue px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
      Chat Zalo Ngay
    </span>
  </a>
);

export default function App() {
  return (
    <div className="antialiased select-none">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Benefits />
        <Proof />
        <Offer />
        <FAQ />
        <RegisterForm />
      </main>
      
      <footer className="bg-brand-blue text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-black mb-6 uppercase tracking-tighter">{PRODUCT_NAME}</div>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">Giải pháp đi đầu trong việc tối ưu hóa doanh thu cho doanh nghiệp vừa và nhỏ tại Việt Nam.</p>
          <div className="flex justify-center gap-6 mb-12">
            <Smartphone className="text-white/40" />
            <MousePointer2 className="text-white/40" />
            <Users className="text-white/40" />
          </div>
          <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">
            &copy; 2026 {PRODUCT_NAME}. All Rights Reserved.
          </div>
        </div>
      </footer>

      <ZaloFloat />
    </div>
  );
}
