import FlexboxLayout from "./components/FlexboxLayout";
import GridLayout from "./components/GridLayout";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <>
    <Navbar/>
      <h1 className="text-3xl font-bold text-center mb-8">
        Responsive 3-Column Layouts with Flexbox & Grid
      </h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Flexbox Layout</h2>
        <FlexboxLayout />
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4 mt-12">Grid Layout</h2>
        <GridLayout />
      </section>

      <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <TodoList />
    </main>
    </>
  );
}
