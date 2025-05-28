
import UsersList from '../fetchdata/UsersList';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        Fetch Users Example
      </h1>
      <div className="w-full max-w-xl">
        <UsersList />
      </div>
    </main>
  );
}
