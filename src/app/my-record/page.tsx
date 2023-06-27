"use client";
import { Flex } from "@mantine/core";
import RecordCategories, { RecordCategoryType } from "@/widgets/RecordCategories";
import DiaryList from "@/widgets/DiaryList";
import Inter from "@/components/Text/Inter";
import ExerciseList from "@/widgets/ExerciseList";
import BodyRecord from "@/widgets/BodyRecord";
import { useScrollIntoView } from "@mantine/hooks";

const useScrollToCategory = () => {
    const { scrollIntoView: scrollToBodyRecord, targetRef: bodyRecordRef } =
    useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollToDiaries, targetRef: diariesRef } =
    useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollToExercises, targetRef: exercisesRef } =
    useScrollIntoView<HTMLDivElement>();
  const scrollToview = (title: RecordCategoryType) => {
    switch (title) {
      case RecordCategoryType.BodyRecord:
        scrollToBodyRecord({ alignment: "center" });
        break;
      case RecordCategoryType.MyExercise:
        scrollToExercises({ alignment: "center" });
        break;
      case RecordCategoryType.MyDiary:
        scrollToDiaries({ alignment: "center" });
        break;
    }
  };
  return { scrollToview, bodyRecordRef, diariesRef, exercisesRef };
}

export default function MyRecord() {
  const { scrollToview, bodyRecordRef, diariesRef, exercisesRef } = useScrollToCategory();

  return (
    <Flex direction="column" gap={56} px={160} py={56}>
      <RecordCategories
        onClick={scrollToview}
      />
      <BodyRecord ref={bodyRecordRef} />
      <ExerciseList ref={exercisesRef} />
      <Inter fz={22} fw={400}>
        MY DIARY
      </Inter>
      <DiaryList ref={diariesRef} />
    </Flex>
  );
}
