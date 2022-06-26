import { useGetLessonsQuery } from "../../graphql/generated";

import { APP_TEXT } from "../../util/appText";

import LessonCard from "../LessonCard";

export default function Sidebar() {
  const { data: lessonsData } = useGetLessonsQuery();

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
              title={title}
              slug={slug}
              lessonType={lessonType}
              availableAt={new Date(availableAt)}
            />
          )
        )}
      </div>
    </aside>
  );
}
