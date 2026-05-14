import { createFileRoute } from "@tanstack/react-router";
import { CourseDetailView } from "@/components/CourseDetailView";
import { courses } from "@/data/courses";

const course = courses.find((c) => c.slug === "mobile-app-dev")!;

export const Route = createFileRoute("/courses/mobile-app-dev")({
  head: () => ({
    meta: [
      { title: `${course.title} — Code Garden` },
      { name: "description", content: course.blurb },
      { property: "og:title", content: course.title },
      { property: "og:description", content: course.blurb },
      { property: "og:image", content: course.image },
    ],
  }),
  component: () => <CourseDetailView course={course} />,
});
