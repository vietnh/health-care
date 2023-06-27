import PrimaryButton from "@/components/Button/Primary";
import InfoCard from "@/components/Card/InfoCard";
import { Flex, Grid } from "@mantine/core";

const useGetDiaries = () => {
  return new Array(8).fill({
    date: '2021.05.21',
    time: '23:25',
    contents: [
      '私の日記の記録が一部表示されます。',
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
    ]
  })
}

const MyDiaries: React.FC = () => {
  const diaries = useGetDiaries();

  return (
    <Flex direction='column' align='center' px={160} pb={64}>
      <Grid gutter={12} align='stretch' justify='center' w={960}>
        {diaries.map((diary, index) => (
          <Grid.Col span={3} key={index}>
            <InfoCard p={16} radius={0}
              title={[
                diary.date, diary.time
              ]}
              content={diary.contents}
            />
          </Grid.Col>
        ))}
      </Grid >
      <PrimaryButton w={288} mt={28}>
        記録をもっと見る
      </PrimaryButton>
    </Flex >
  );
}

export default MyDiaries;