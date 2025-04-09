import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">EnhanceAI : AI Image Enhancer</h1>
          <p className="text-lg text-gray-500">Upload your Image and let AI enhance it in seconds !</p>
        </div>

        <Home />

        <div className="text-lg text-gray-500">
          Made by Kanishka                    
        </div>
      </div>
    </>
  )
}

export default App
