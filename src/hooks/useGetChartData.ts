import { Period, Statistic } from "@/app/api/statistics/[period]/route";
import { colors } from "@/theme";
import useFetch from "./useFetch";

const useGetChartData = (period: Period) => {
  const statistics = useFetch<Statistic>(
    `/api/statistics/${period}`,
    {
      bodyFat: [],
      bodyWeight: [],
    },
    [period]
  );

  return [
    {
      id: "bodyWeight",
      color: colors.primary[300],
      data: statistics.bodyWeight.map((item) => ({
        x: item.periodValue,
        y: item.value,
      })),
    },
    {
      id: "bodyFat",
      color: colors.secondary[300],
      data: statistics.bodyFat.map((item) => ({
        x: item.periodValue,
        y: item.value,
      })),
    },
  ];
};

export default useGetChartData;
