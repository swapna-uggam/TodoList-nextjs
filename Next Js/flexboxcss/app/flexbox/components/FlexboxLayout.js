export default function FlexboxLayout() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-6">
      <div className="flex-1 bg-red-300 p-4 mb-4 md:mb-0">Column 1 (Flexbox)</div>
      <div className="flex-1 bg-green-300 p-4 mb-4 md:mb-0">Column 2 (Flexbox)</div>
      <div className="flex-1 bg-blue-300 p-4">Column 3 (Flexbox)</div>
    </div>
  );
}
