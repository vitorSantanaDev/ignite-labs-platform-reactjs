export interface ILessonCardProps {
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: "live" | "class";
}

export enum ClassroomTypeEnum {
  LIVE = "live",
  CLASS = "class",
}
