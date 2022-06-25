import { gql, useQuery } from "@apollo/client";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
  FileImage,
} from "phosphor-react";
import { Player, Youtube, DefaultUi } from "@vime/react";

import "@vime/core/themes/default.css";

import { APP_TEXT } from "../../util/appText";
import { IVideoPlayerProps } from "./types";

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        avatarURL
        bio
        name
      }
    }
  }
`;

export interface IGetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}

export default function VideoPlayer({ lessonSlug }: IVideoPlayerProps) {
  const { data: lessonData } = useQuery<IGetLessonBySlugResponse>(
    GET_LESSON_BY_SLUG,
    {
      variables: {
        slug: lessonSlug,
      },
    }
  );
  const lesson = lessonData?.lesson;

  if (!lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }

  const { title, description, teacher, videoId } = lesson;

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="p-8 mx-w-[1100px] mx-auto">
        <section className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">{description}</p>
            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={teacher.avatarURL}
                alt=""
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  {teacher.name}
                </strong>
                <span className="text-gray-200 text-sm block">
                  {teacher.bio}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href=""
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              {APP_TEXT.BUTTON_TEXT_COMMUNITY_OF_DISCORD}
            </a>
            <a
              href=""
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              {APP_TEXT.CHALLENGE_ACCESS_TEXT_BUTTON}
            </a>
          </div>
        </section>
        <section className="gap-8 mt-20 mb-20 grid grid-cols-2">
          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">
                {APP_TEXT.SUPPLEMENTARY_MATERIAL_CARD_TITLE}
              </strong>
              <p className="text-sm text-gray-200 mt-2">
                {APP_TEXT.SUPPLEMENTARY_MATERIAL_CARD_DESCRIPTION}
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileImage size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">
                {APP_TEXT.EXCLUSIVE_WALLPAPERS_CARD_TITLE}
              </strong>
              <p className="text-sm text-gray-200 mt-2">
                {APP_TEXT.EXCLUSIVE_WALLPAPERS_CARD_DESCRIPTION}
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </section>
      </div>
    </div>
  );
}
