export default function GridLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div className="bg-yellow-300 p-4">Column 1 (Grid)</div>
      <div className="bg-yellow-500 p-4">Column 2 (Grid)</div>
      <div className="bg-yellow-700 p-4">Column 3 (Grid)</div>
    </div>
  );
}
