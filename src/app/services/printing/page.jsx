import Link from "next/link";

export default function PrintingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-4xl md:text-6xl font-bold">Printing</h1>
      <Link
        href="/services"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Back to Services
      </Link>
    </main>
  );
}
