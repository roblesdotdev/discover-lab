#!/bin/sh -ex

npx prisma migrate deploy && npx prisma db seed
npm start