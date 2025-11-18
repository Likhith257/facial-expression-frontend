import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Zap, Eye, Shield, Cpu, Smartphone, Zap as SparkleIcon } from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Powered by Advanced AI</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Facial Recognition
              <br />
              Reimagined
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of identity verification with our cutting-edge facial recognition technology. Fast, accurate, and secure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/recognition"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition transform"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition"
              >
                Learn More
              </a>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30" />
              <div className="relative bg-white rounded-2xl border border-slate-200 p-1 overflow-hidden">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 md:p-12 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-16 h-16 text-blue-400 mx-auto mb-4 opacity-70" />
                    <p className="text-white text-lg font-medium">Real-time Facial Recognition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose FaceDetect?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Industry-leading accuracy with enterprise-grade security and lightning-fast performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-xl transition">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4 group-hover:bg-blue-200 transition">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Lightning Fast</h3>
              <p className="text-slate-600">
                Process facial recognition in milliseconds with our optimized AI models.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 border border-slate-200 rounded-2xl hover:border-purple-300 hover:shadow-xl transition">
              <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4 group-hover:bg-purple-200 transition">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Bank-Level Security</h3>
              <p className="text-slate-600">
                Enterprise-grade encryption and privacy controls to protect user data.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 border border-slate-200 rounded-2xl hover:border-pink-300 hover:shadow-xl transition">
              <div className="p-3 bg-pink-100 rounded-lg w-fit mb-4 group-hover:bg-pink-200 transition">
                <Eye className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">99.8% Accuracy</h3>
              <p className="text-slate-600">
                State-of-the-art deep learning for unparalleled recognition accuracy.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-xl transition">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4 group-hover:bg-blue-200 transition">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Works Everywhere</h3>
              <p className="text-slate-600">
                Desktop, mobile, or tablet - works seamlessly across all platforms.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group p-8 border border-slate-200 rounded-2xl hover:border-purple-300 hover:shadow-xl transition">
              <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4 group-hover:bg-purple-200 transition">
                <SparkleIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Easy Integration</h3>
              <p className="text-slate-600">
                Simple API and SDK for quick integration into your applications.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group p-8 border border-slate-200 rounded-2xl hover:border-pink-300 hover:shadow-xl transition">
              <div className="p-3 bg-pink-100 rounded-lg w-fit mb-4 group-hover:bg-pink-200 transition">
                <Zap className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Real-Time Processing</h3>
              <p className="text-slate-600">
                Process video streams in real-time with zero lag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                10M+
              </div>
              <p className="text-slate-400 text-lg">Faces Recognized</p>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                99.8%
              </div>
              <p className="text-slate-400 text-lg">Accuracy Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
                50ms
              </div>
              <p className="text-slate-400 text-lg">Average Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Experience the power of our facial recognition technology today.
          </p>
          <Link
            to="/recognition"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition transform"
          >
            Start Recognizing Faces
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
