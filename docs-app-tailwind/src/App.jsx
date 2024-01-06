import "./App.css";

function App() {
  return (
    <div className="relative w-full h-screen bg-slate-700">
      <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-800 text-4xl font-semibold">
        Documents
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vh] leading-none tracking-tighter font-semibold text-zinc-900">
        DOCS.
      </h1>
    </div>
  );
}

export default App;
