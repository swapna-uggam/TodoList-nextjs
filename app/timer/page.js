
import TimerComponent from "./components/TimerComponent";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Hello from Next.js!</h1>
      <TimerComponent />
    </main>
  );
}
