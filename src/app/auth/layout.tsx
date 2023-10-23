'use client';
import { Box } from '@/components/Box/Box';
import Image from 'next/image';
import img from '../../../public/login-image.png';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box display="flex">
      <Box
        position="relative"
        minWidth="60%"
        minHeight={943}
        border="2px solid red"
      >
        <Image src={img} alt="city roads" fill />
      </Box>
      {children}
    </Box>
  );
}
