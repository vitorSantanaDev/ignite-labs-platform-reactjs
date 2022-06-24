import { gql, useQuery } from "@apollo/client";

import { APP_TEXT } from "../../util/appText";

import LessonCard from "../LessonCard";
import { ClassroomTypeEnum } from "../types";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

interface IGetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: ClassroomTypeEnum;
  }[];
}

export default function Sidebar() {
  const { data: lessonsData } =
    useQuery<IGetLessonsQueryResponse>(GET_LESSONS_QUERY);
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        {APP_TEXT.ASIDE_TITLE}
      </span>
      <div className="flex flex-col gap-8">
        {lessonsData?.lessons.map(
          ({ id, title, availableAt, lessonType, slug }) => (
            <LessonCard
              key={id}
              slug={slug}
              title={title}
              lessonType={lessonType}
              availableAt={new Date(availableAt)}
            />
          )
        )}
      </div>
    </aside>
  );
}
