'use client';
import { Box } from '@/components/Box/Box';
import Image from 'next/image';
import img from '../../../public/login-image.png';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box display="flex">
      <Box position="relative" width="60%" style={{ aspectRatio: 890 / 943 }}>
        <Link href="/">
          <Image src={img} alt="city roads" fill />
        </Link>
      </Box>
      {children}
    </Box>
  );
}
