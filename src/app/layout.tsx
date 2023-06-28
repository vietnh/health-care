"use client";

import { Flex, Text, MantineProvider, createStyles, Box } from "@mantine/core";
import healthCareTheme from "@/theme";
import { NavBar } from "@/components/NavBar";
import { Challenge, Info, Logo, Memo, Menu } from "@/components/Icons";
import { MenuItem } from "@/components/Header/MenuItem";
import ScrollToTop from "@/components/ScrollToTop";
import { useRouter } from "next/navigation";
import ContextMenu from "@/components/ContextMenu";

const useStyles = createStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 64,
    paddingBottom: 128,
    minHeight: "100vh",
  },
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { classes } = useStyles();
  return (
    <html lang="en">
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={healthCareTheme}
      >
        <body>
          <Header />
          <main className={classes.main}>{children}</main>
          <Footer />
          <ScrollToTop position={{ bottom: 144, right: 96 }} />
        </body>
      </MantineProvider>
    </html>
  );
}

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <NavBar
      h={64}
      leftContent={
        <Logo width={109} height={40} onClick={() => router.push("/")} />
      }
      rightContent={
        <Flex align="center" gap={16}>
          <MenuItem
            icon={<Memo />}
            text="自分の記録"
            onClick={() => router.push("/my-record")}
          />
          <MenuItem icon={<Challenge />} text="チャレンジ" />
          <MenuItem icon={<Info />} text="お知らせ" />
          <ContextMenu
            width={280}
            target={
              <Box>
                <Menu />
              </Box>
            }
            items={[
              { label: "自分の記録", onClick: () => router.push("/") },
              { label: "体重グラフ" },
              { label: "目標" },
              { label: "選択中のコース" },
              { label: "コラム一覧", onClick: () => router.push("/column") },
              { label: "設定" },
            ]}
            position="bottom-end"
          />
        </Flex>
      }
    />
  );
};

const Footer: React.FC = () => {
  const FooterText = ({ children }: React.PropsWithChildren) => (
    <Text fz={11} color="white">
      {children}
    </Text>
  );

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
        </Flex>
      }
    />
  );
};
