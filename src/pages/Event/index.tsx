import { Fragment } from "react";
import { useParams } from "react-router-dom";

import { Footer, Header, Sidebar, VideoPlayer } from "../../components";

export default function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <VideoPlayer lessonSlug={slug} />
        ) : (
          <div className="flex-1"></div>
        )}
        <Sidebar />
      </main>
      <Footer />
    </section>
  );
}
