'use client';
import { Box } from '@/components/Box/Box';
import Image from 'next/image';
import img from '../../../public/login-image.png';
import Link from 'next/link';
import { useMediaQuery } from '@/hooks';

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMoreThen856 = useMediaQuery(856);
  return (
    <Box display="flex" paddingTop={isMoreThen856 ? 0 : 100}>
      {isMoreThen856 && (
        <Box position="relative" width="60%" style={{ aspectRatio: 890 / 943 }}>
          <Link href="/">
            <Image src={img} alt="city roads" fill />
          </Link>
        </Box>
      )}
      {children}
    </Box>
  );
}
