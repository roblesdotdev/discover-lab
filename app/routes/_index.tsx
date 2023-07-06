import {
  json,
  type LoaderFunction,
  type V2_MetaFunction,
} from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { db } from '~/utils/db.server'

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Discover Lab' },
    {
      name: 'description',
      content: `Discover-Lab is an online platform that provides a centralized space to discover, collaborate, and connect with innovative projects and entrepreneurs from around the world.`,
    },
  ]
}

type LoaderData = {
  totalProducts: number
}

export const loader: LoaderFunction = async () => {
  const totalProducts = await db.product.count()
  return json<LoaderData>({
    totalProducts: totalProducts,
  })
}

export default function Index() {
  const { totalProducts } = useLoaderData<LoaderData>()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-1 text-center">
        <span className="rounded-md bg-fg/10 px-3 py-2 text-xs">
          Database: {totalProducts}
        </span>
        <h1 className="text-2xl font-bold sm:text-3xl">Trabajo en progreso</h1>
        <p className="text-fg-muted/90 sm:text-lg">
          Pronto estaremos en línea para sorprenderte. <br />
          ¡Gracias por tu paciencia!
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
