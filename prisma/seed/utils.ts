import { faker } from '@faker-js/faker'
import type { Prisma } from '@prisma/client'

export function createProduct(): Prisma.ProductCreateInput {
  return {
    title: faker.company.name(),
    headline: faker.company.buzzPhrase(),
    description: faker.lorem.paragraph(),
    image: faker.image.avatar(),
    url: faker.internet.url(),
    category: faker.commerce.department(),
  }
}
