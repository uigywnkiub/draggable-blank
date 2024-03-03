import submitRefresh from "./actions";
import Draggable from "./draggable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <Draggable>
        <div className="w-full max-w-sm rounded-lg p-6 flex items-center justify-center border bg-[#f3f4f6] bg-opacity-90 shadow">
          <div className="rounded-lg shadow-sm bg-slate-200 shadow-md">
            <div className="text-center px-12 py-6 rounded-lg">
              <p className="dark:text-black">Server time is:</p>
              <h1 className="font-bold text-3xl dark:text-black">
                {new Date().toLocaleTimeString()}
              </h1>
              <form action={submitRefresh}>
                <button
                  type="button"
                  className="mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Refresh
                </button>
              </form>
            </div>
          </div>
        </div>
      </Draggable>
    </main>
  );
}
