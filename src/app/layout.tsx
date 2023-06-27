
'use client';

import { Flex, Text, MantineProvider, createStyles, Box, Button, Affix, rem } from '@mantine/core'
import healthCareTheme from '@/theme';
import { NavBar } from '@/components/NavBar';
import { Challenge, Info, Logo, Memo, Menu } from '@/components/Icons';
import { MenuItem } from '@/components/Header/MenuItem';
import { notoSan } from './fonts';
import ScrollToTop from '@/components/ScrollToTop';
import { useRouter } from 'next/navigation';

const useStyles = createStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 64,
    paddingBottom: 128,
    minHeight: '100vh',
  }
}))

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { classes } = useStyles();
  return (
    <html lang="en">
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={healthCareTheme}
      >
        <body className={notoSan.className}>
          <Header />
          <main className={classes.main}>
            {children}
          </main>
          <Footer />
          <ScrollToTop position={{ bottom: 144, right: 96 }} />
        </body>
      </MantineProvider>
    </html>
  )
}

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <NavBar
      h={64}
      leftContent={<Logo />}
      rightContent={
        <Flex align='center' gap={16}>
          <MenuItem icon={<Memo />} text='自分の記録' onClick={() => router.push('/my-record')} />
          <MenuItem icon={<Challenge />} text='チャレンジ' />
          <MenuItem icon={<Info />} text='お知らせ' />
          <Menu />
        </Flex>
      }
    />
  )
};

const Footer: React.FC = () => {
  const FooterText = ({ children }: React.PropsWithChildren) => (<Text fz={11} color='white'>{children}</Text>);

  return (
    <NavBar
      h={128}
      bottom={0}
      leftContent={
        <Flex gap={45}>
          <FooterText>会員登録</FooterText>
          <FooterText>運営会社</FooterText>
          <FooterText>利用規約</FooterText>
          <FooterText>個人情報の取扱について</FooterText>
          <FooterText>特定商取引法に基づく表記</FooterText>
          <FooterText>お問い合わせ</FooterText>
        </Flex>}
    />
  )
};
