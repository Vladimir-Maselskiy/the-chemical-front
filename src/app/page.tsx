import Image from 'next/image';
import styles from './page.module.css';
import { Home } from '@/components/Home/Home';

export default function HomePage() {
  return (
    <main>
      <Home />
    </main>
  );
}
