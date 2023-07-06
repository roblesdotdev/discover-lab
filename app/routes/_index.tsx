import type { V2_MetaFunction } from '@remix-run/node'

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Discover Lab' },
    {
      name: 'description',
      content: `Discover-Lab is an online platform that provides a centralized space to discover, collaborate, and connect with innovative projects and entrepreneurs from around the world.`,
    },
  ]
}

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h1 className="text-2xl font-bold">Trabajo en progreso</h1>
        <p className="text-fg-muted">
          Pronto estaremos en línea para sorprenderte. ¡Gracias por tu
          paciencia!
        </p>
        <a
          className="mt-4 underline"
          href="https://github.com/roblesdotdev/discover-lab"
          target="_blank"
          rel="noreferrer"
        >
          Repositorio
        </a>
      </div>
    </div>
  )
}
