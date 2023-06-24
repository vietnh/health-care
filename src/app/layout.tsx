
'use client';

import { Flex, Text, MantineProvider, createStyles } from '@mantine/core'
import healthCareTheme from '@/theme';
import { NavBar } from '@/components/NavBar';
import { Challenge, Info, Logo, Memo, Menu } from '@/components/Icons';
import { MenuItem } from '@/components/Header/MenuItem';
import { notoSan } from './fonts';

const useStyles = createStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 64,
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
        </body>
      </MantineProvider>
    </html>
  )
}

const Header: React.FC = () => {
  return (
    <NavBar
      h={64}
      leftContent={<Logo />}
      rightContent={
        <Flex align='center' gap={16}>
          <MenuItem icon={<Memo />} text='自分の記録' />
          <MenuItem icon={<Challenge />} text='チャレンジ' />
          <MenuItem icon={<Info />} text='お知らせ' />
          <Menu />
        </Flex>
      }
    />
  )
}

const Footer: React.FC = () => {
  return (
    <NavBar
      h={128}
      bottom={0}
      leftContent={
        <Flex gap={45}>
          <Text fz={11} color='white'>会員登録</Text>
          <Text fz={11} color='white'>運営会社</Text>
          <Text fz={11} color='white'>利用規約</Text>
          <Text fz={11} color='white'>個人情報の取扱について</Text>
          <Text fz={11} color='white'>特定商取引法に基づく表記</Text>
          <Text fz={11} color='white'>お問い合わせ</Text>
        </Flex>}
    />
  )
};
