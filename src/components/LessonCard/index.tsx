import { Link, useParams } from "react-router-dom";
import { CheckCircle } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import classNames from "classnames";

import { APP_TEXT } from "../../util/appText";

import { ClassroomTypeEnum, ILessonCardProps } from "./types";

export default function LessonCard(props: ILessonCardProps) {
  const { title, lessonType, availableAt, slug } = props;
  const { slug: slugRoute } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(availableAt);

  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • ' k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slugRoute === slug;

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div
        className={classNames("rounded border border-gray-500 p-4 mt-2", {
          "bg-green-500 text-gray-50": isActiveLesson,
          "group-hover:border-green-500": !isActiveLesson,
        })}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm font-medium flex items-center gap-2",
                {
                  "text-gray-50": isActiveLesson,
                  "text-blue-500": !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              {APP_TEXT.LESSONCARD_TEXT_CONTENT_RELEASED}
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              {APP_TEXT.LESSONCARD_TEXT_COMING_SOON}
            </span>
          )}
          <span
            className={classNames(
              "text-xs uppercase rounded py-[0.125rem] px-2 text-whie border font-bold",
              {
                "border-green-300": !isActiveLesson,
                "border-gray-50": isActiveLesson,
              }
            )}
          >
            {lessonType === ClassroomTypeEnum.CLASS
              ? APP_TEXT.PRATICAL_CLASS
              : APP_TEXT.LIVE_TEXT}
          </span>
        </header>
        <strong
          className={classNames("mt-5 block", {
            "text-gray-50": isActiveLesson,
            "text-gray-200": !isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}
