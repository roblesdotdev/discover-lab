import { PrismaClient } from '@prisma/client'
import { createProduct } from './utils'
const db = new PrismaClient()

async function seed() {
  console.log('🌱 Seeding...')

  console.time(`🌱 Database has been seeded`)

  const totalProducts = 30
  console.time(`Products created ${totalProducts}`)
  Array.from({ length: totalProducts }, async () => {
    await db.product.create({
      data: {
        ...createProduct(),
      },
    })
  })
  console.timeEnd(`Products created ${totalProducts}`)

  console.timeEnd(`🌱 Database has been seeded`)
}

seed()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
