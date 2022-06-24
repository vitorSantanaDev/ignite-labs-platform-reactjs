import { CheckCircle } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { APP_TEXT } from "../../util/appText";

import { ClassroomTypeEnum, ILessonCardProps } from "./types";

export default function LessonCard(props: ILessonCardProps) {
  const { title, lessonType, availableAt } = props;

  const isLessonAvailable = isPast(availableAt);

  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • ' k'h'mm",
    {
      locale: ptBR,
    }
  );

  return (
    <a href="#">
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              {APP_TEXT.LESSONCARD_TEXT_CONTENT_RELEASED}
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              {APP_TEXT.LESSONCARD_TEXT_COMING_SOON}
            </span>
          )}
          <span className="text-xs uppercase rounded py-[0.125rem] px-2 text-whie border border-green-300 font-bold">
            {lessonType === ClassroomTypeEnum.CLASS
              ? APP_TEXT.PRATICAL_CLASS
              : APP_TEXT.LIVE_TEXT}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </a>
  );
}
