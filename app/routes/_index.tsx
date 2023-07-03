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
      <div className="mx-auto flex max-w-2xl flex-col items-center">
        <h1 className="text-2xl font-bold">Working...</h1>
        <p className="text-fg-muted">
          Donec quam urna, rutrum nec velit in, consequat efficitur nulla. Nunc
          consequat posuere felis, non egestas ligula imperdiet sit amet.
        </p>
      </div>

      <button className="rounded-md bg-primary px-6 py-3 text-on-primary hover:bg-primary-variant">
        Click Me
      </button>
    </div>
  )
}
