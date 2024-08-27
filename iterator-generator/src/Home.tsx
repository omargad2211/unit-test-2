import { iterator } from "./Iterator/index";
import { Generator } from "./Generator/index";

function Home() {
  const iteratorRange = iterator(1, 27, 3);
  const generatorRange = Generator(2, 12, 2);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-5xl w-full flex flex-col md:flex-row">
        {/* Iterator Range Section */}
        <section className="flex-1 p-8 flex flex-col items-center space-y-4 border-b md:border-b-0 md:border-r border-gray-200">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Iterator Range
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
            {Array.from(iteratorRange).map((value) => (
              <div
                className="flex items-center justify-center h-20 w-20 bg-green-200 border border-green-400 text-green-800 rounded-full text-2xl font-semibold shadow-md"
                key={value}
              >
                {value}
              </div>
            ))}
          </div>
        </section>

        {/* Generator Range Section */}
        <section className="flex-1 p-8 flex flex-col items-center space-y-4">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Generator Range
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
            {Array.from(generatorRange).map((value) => (
              <div
                className="flex items-center justify-center h-20 w-20 bg-indigo-200 border border-indigo-400 text-indigo-800 rounded-full text-2xl font-semibold shadow-md"
                key={value}
              >
                {value}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
