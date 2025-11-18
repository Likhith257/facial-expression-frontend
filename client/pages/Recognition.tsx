import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import { Upload, Camera, Loader2, CheckCircle, AlertCircle, Download, Trash2 } from "lucide-react";

export default function Recognition() {
  const [activeTab, setActiveTab] = useState<"upload" | "webcam">("upload");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
        setError(null);
        setResults(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcess = async () => {
    if (!selectedImage) return;

    setIsProcessing(true);
    setError(null);

    // Simulate processing
    setTimeout(() => {
      setResults({
        detected: true,
        confidence: 98.7,
        faces: [
          {
            id: 1,
            confidence: 98.7,
            position: { x: 150, y: 120, width: 180, height: 200 },
            expression: "neutral",
            age: "25-35",
            gender: "Female"
          }
        ],
        processingTime: 245
      });
      setIsProcessing(false);
    }, 1500);
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
        setError(null);
      }
    } catch (err) {
      setError("Unable to access camera. Please check permissions.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      setIsCameraActive(false);
    }
  };

  const captureFrame = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        setSelectedImage(canvasRef.current.toDataURL("image/jpeg"));
        stopCamera();
      }
    }
  };

  const handleClear = () => {
    setSelectedImage(null);
    setResults(null);
    setError(null);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Facial Recognition
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Upload an image or use your webcam to detect and analyze faces in real-time.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              {/* Tab Selection */}
              <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
                <button
                  onClick={() => setActiveTab("upload")}
                  className={`flex-1 px-4 py-2 rounded-md font-medium transition ${
                    activeTab === "upload"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Upload className="w-4 h-4 inline mr-2" />
                  Upload Image
                </button>
                <button
                  onClick={() => setActiveTab("webcam")}
                  className={`flex-1 px-4 py-2 rounded-md font-medium transition ${
                    activeTab === "webcam"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Camera className="w-4 h-4 inline mr-2" />
                  Webcam
                </button>
              </div>

              {/* Upload Tab */}
              {activeTab === "upload" && (
                <div className="space-y-4">
                  {!selectedImage ? (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition"
                    >
                      <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                      <p className="font-semibold text-slate-900 mb-1">
                        Click to upload an image
                      </p>
                      <p className="text-sm text-slate-600">
                        or drag and drop (JPG, PNG, WebP)
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                    </div>
                  ) : (
                    <div className="relative bg-white rounded-lg overflow-hidden border border-slate-200">
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="w-full h-auto"
                      />
                      {results && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <CheckCircle className="w-16 h-16 text-green-400" />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Webcam Tab */}
              {activeTab === "webcam" && (
                <div className="space-y-4">
                  {!isCameraActive ? (
                    <button
                      onClick={startCamera}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
                    >
                      <Camera className="w-5 h-5" />
                      Start Webcam
                    </button>
                  ) : (
                    <div className="space-y-3">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="w-full rounded-lg bg-black"
                      />
                      <canvas ref={canvasRef} className="hidden" />
                      <div className="flex gap-2">
                        <button
                          onClick={captureFrame}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
                        >
                          Capture Photo
                        </button>
                        <button
                          onClick={stopCamera}
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition"
                        >
                          Close Camera
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              {/* Action Buttons */}
              {selectedImage && !isCameraActive && (
                <div className="flex gap-3">
                  <button
                    onClick={handleProcess}
                    disabled={isProcessing}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <span>Analyze Image</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleClear}
                    className="px-4 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition flex items-center justify-center gap-2"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Results Section */}
            <div className="bg-white rounded-lg border border-slate-200 p-8">
              {!selectedImage && !results && (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="p-4 bg-blue-100 rounded-full mb-4">
                    <Camera className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-slate-600 mb-2">
                    Upload an image or use your webcam to get started
                  </p>
                  <p className="text-sm text-slate-500">
                    Results will appear here
                  </p>
                </div>
              )}

              {results && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-semibold">Face(s) Detected Successfully</span>
                  </div>

                  {/* Overall Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-slate-600 mb-1">Overall Confidence</p>
                      <p className="text-2xl font-bold text-blue-600">
                        {results.confidence}%
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="text-sm text-slate-600 mb-1">Processing Time</p>
                      <p className="text-2xl font-bold text-purple-600">
                        {results.processingTime}ms
                      </p>
                    </div>
                  </div>

                  {/* Detected Faces */}
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">
                      Detected Faces ({results.faces.length})
                    </h3>
                    <div className="space-y-3">
                      {results.faces.map((face: any) => (
                        <div
                          key={face.id}
                          className="bg-slate-50 rounded-lg p-4 border border-slate-200"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <span className="font-medium text-slate-900">
                              Face #{face.id}
                            </span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-medium">
                              {face.confidence}%
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="text-slate-600">Expression</p>
                              <p className="font-medium text-slate-900 capitalize">
                                {face.expression}
                              </p>
                            </div>
                            <div>
                              <p className="text-slate-600">Age Range</p>
                              <p className="font-medium text-slate-900">
                                {face.age}
                              </p>
                            </div>
                            <div>
                              <p className="text-slate-600">Gender</p>
                              <p className="font-medium text-slate-900">
                                {face.gender}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Export Button */}
                  <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Report
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
