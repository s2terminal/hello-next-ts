import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about">
      <button>About Page</button>
    </Link>
    <p>Hello Next.ts</p>
  </div>
);

export default Index;
