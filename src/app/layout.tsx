'use client';
import './globals.css';
import { Merriweather } from 'next/font/google';
import { Header } from '@/components/Header/Header';
import StyledComponentsRegistry from '@/lib/registry';
import { Box } from '@/components/Box/Box';
import { Providers } from '@/redux/providers';

const merriweather = Merriweather({
  weight: ['300', '700'],
  subsets: ['latin'],
});

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={merriweather.className} style={{ paddingTop: 80 }}>
          <StyledComponentsRegistry>
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              minWidth={480}
            >
              <Box maxWidth={1440} width="100vw" minWidth={480}>
                <Header />
                {children}
              </Box>
            </Box>
          </StyledComponentsRegistry>
        </body>
      </Providers>

      {/* </UserWrapper> */}
    </html>
  );
}
