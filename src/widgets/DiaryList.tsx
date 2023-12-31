import { Diary } from "@/app/api/diaries/route";
import PrimaryButton from "@/components/Button/Primary";
import InfoCard from "@/components/Card/InfoCard";
import Inter from "@/components/Text/Inter";
import useFetchWithPagination from "@/hooks/useFetchWithPagination";
import { formatDate } from "@/utils/date";
import { Flex, Grid } from "@mantine/core";
import { forwardRef } from "react";

const DiaryList = forwardRef<HTMLDivElement>((_, ref) => {
  const { data: diaries, fetch } =
    useFetchWithPagination<Diary>("/api/diaries");

  return (
    <Flex direction="column" align="center" px={160} pb={64} ref={ref}>
      <Inter fz={22} fw={400} sx={{ alignSelf: 'flex-start' }}>
        MY DIARY
      </Inter>
      <Grid gutter={12} align="stretch" justify="center" w={960}>
        {diaries.map((diary, index) => (
          <Grid.Col span={3} key={index}>
            <InfoCard
              p={16}
              radius={0}
              title={[
                formatDate(diary.date, "YYYY.MM.DD"),
                formatDate(diary.date, "HH:mm"),
              ]}
              content={diary.contents}
            />
          </Grid.Col>
        ))}
      </Grid>
      <PrimaryButton w={288} mt={28} onClick={() => fetch(undefined, true)}>
        記録をもっと見る
      </PrimaryButton>
    </Flex>
  );
});

export default DiaryList;
