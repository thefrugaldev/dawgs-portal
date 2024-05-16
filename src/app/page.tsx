import StoreFinder from '@/components/store-finder/store-finder';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between">
      <aside className="flex-1 h-screen">
        <StoreFinder />
      </aside>
      <div className="overflow-hidden h-screen w-8/12 relative">
        <Image src={`/static-map-image.png`} alt={`Static Map Image`} fill />
      </div>
    </main>
  );
}
