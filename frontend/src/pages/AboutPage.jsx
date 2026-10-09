import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartHandshake, Building2, Target, ArrowRight } from 'lucide-react';
import SharedHeader from '../components/SharedHeader';

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/30 flex flex-col items-center relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-500/15 via-cyan-500/5 to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] pointer-events-none z-0" />

      {/* Shared Glassmorphic Header */}
      <SharedHeader activeTab="about" />

      {/* Hero Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl px-6 pt-16 pb-12 text-center z-10"
      >
        <motion.div variants={itemVariants} className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-extrabold uppercase tracking-wider mb-6 shadow-md backdrop-blur-md overflow-hidden group">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-45 animate-shimmer-sweep" />
          </div>
          <Building2 className="w-4 h-4 text-cyan-400 relative z-10" />
          <span className="relative z-10">Our Mission & Vision</span>
        </motion.div>
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
          Empowering Communities Through <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-500 via-primary to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
            Transparent Water Management
          </span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-text/80 leading-relaxed font-medium max-w-2xl mx-auto">
          AquaTrack was architected to bridge the gap between residential communities, water conservation, and automated financial accounting.
        </motion.p>
      </motion.section>

      {/* Narrative Cards */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-8 w-full z-10"
      >
        <div style={{ perspective: '1000px' }} className="w-full">
          <motion.div 
            variants={itemVariants}
            whileHover={{ rotateY: -5, rotateX: 5, y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="glass-card p-8 rounded-3xl border border-border/70 shadow-xl hover:shadow-2xl text-center flex flex-col justify-between h-full relative overflow-hidden group"
          >
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-gradient-to-r from-transparent via-white/10 to-transparent transform -rotate-45 animate-shimmer-sweep" />
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Our Mission</h3>
              <p className="text-sm text-text/75 leading-relaxed font-medium">
                To equip residential societies with precise, tier-based water metering software that rewards conservation and eliminates manual billing errors.
              </p>
            </div>
          </motion.div>
        </div>

        <div style={{ perspective: '1000px' }} className="w-full">
          <motion.div 
            variants={itemVariants}
            whileHover={{ rotateY: -5, rotateX: 5, y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="glass-card p-8 rounded-3xl border border-border/70 shadow-xl hover:shadow-2xl text-center flex flex-col justify-between h-full relative overflow-hidden group"
          >
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-gradient-to-r from-transparent via-white/10 to-transparent transform -rotate-45 animate-shimmer-sweep" />
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Financial Trust</h3>
              <p className="text-sm text-text/75 leading-relaxed font-medium">
                Complete auditability with itemized tariff breakdowns, Razorpay payment integrations, and locked billing cycles for historical integrity.
              </p>
            </div>
          </motion.div>
        </div>

        <div style={{ perspective: '1000px' }} className="w-full">
          <motion.div 
            variants={itemVariants}
            whileHover={{ rotateY: -5, rotateX: 5, y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="glass-card p-8 rounded-3xl border border-border/70 shadow-xl hover:shadow-2xl text-center flex flex-col justify-between h-full relative overflow-hidden group"
          >
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-gradient-to-r from-transparent via-white/10 to-transparent transform -rotate-45 animate-shimmer-sweep" />
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Inclusive AI</h3>
              <p className="text-sm text-text/75 leading-relaxed font-medium">
                Multi-language support for 45+ Indian regional & global foreign languages powered by sweet-voice Text-To-Speech (TTS) to assist every resident seamlessly.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Footer Banner */}
      <section className="w-full max-w-4xl px-6 py-12 text-center z-10">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="glass-card p-10 rounded-3xl border border-primary/30 shadow-2xl relative overflow-hidden bg-gradient-to-b from-surface/80 to-surface/40 backdrop-blur-2xl"
        >
          <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Ready to Transform Your Community?</h2>
          <p className="text-text/80 mb-8 max-w-xl mx-auto font-medium text-base">Join housing societies across India leveraging AquaTrack's smart water billing pipeline.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/register" className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-primary to-cyan-500 text-white font-black text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
