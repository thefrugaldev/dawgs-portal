import GoogleMap from '@/components/store-finder/google-map';
import StoreFinder from '@/components/store-finder/store-finder';

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between">
      <aside className="flex-1 h-screen">
        <StoreFinder />
      </aside>
      <div className="overflow-hidden h-screen w-8/12 relative">
        <GoogleMap />
      </div>
    </main>
  );
}
