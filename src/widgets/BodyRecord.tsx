import { Period } from "@/app/api/statistics/[period]/route";
import Badge from "@/components/Badge";
import ContainerCard from "@/components/Card/ContainerCard";
import LineChart from "@/components/Chart/Line";
import Inter from "@/components/Text/Inter";
import useGetChartData from "@/hooks/useGetChartData";
import { formatDate } from "@/utils/date";
import { Box, Flex } from "@mantine/core";
import { forwardRef, useState } from "react";

const BodyRecord = forwardRef<HTMLDivElement>((_, ref) => {
  const [period, setPeriod] = useState<Period>("month");
  const data = useGetChartData(period);

  return (
    <ContainerCard
      w={960}
      h={304}
      px={32}
      py={16}
      title={[
        <Inter fz={15} w={96} sx={{ lineHeight: "18px" }}>
          BODY RECORD
        </Inter>,
        <Inter fz={22} sx={{ lineHeight: "27px" }}>
          {formatDate(new Date(), "YYYY.MM.DD")}
        </Inter>,
      ]}
      ref={ref}
    >
      <Box h="calc(100% - 60px)">
        <LineChart
          data={data}
          period={period}
          margin={{ top: 5, right: 50, bottom: 32, left: 23 }}
        />
      </Box>
      <Flex gap={16}>
        <Badge
          label="日"
          active={period === "day"}
          onClick={() => setPeriod("day")}
        />
        <Badge
          label="週"
          active={period === "week"}
          onClick={() => setPeriod("week")}
        />
        <Badge
          label="月"
          active={period === "month"}
          onClick={() => setPeriod("month")}
        />
        <Badge
          label="年"
          active={period === "year"}
          onClick={() => setPeriod("year")}
        />
      </Flex>
    </ContainerCard>
  );
});

export default BodyRecord;
