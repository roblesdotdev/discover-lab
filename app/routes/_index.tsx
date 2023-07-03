import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Discover Lab" },
    {
      name: "description",
      content: `Discover-Lab is an online platform that provides a centralized space to discover, collaborate, and connect with innovative projects and entrepreneurs from around the world.`,
    },
  ];
};

export default function Index() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="font-bold text-2xl">Working...</h1>
    </div>
  );
}
