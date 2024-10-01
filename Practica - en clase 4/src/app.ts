import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    try{
    const newestudiante = await prisma.estudiante.create(
        {
            data:
            {
                email: 'paco@gmail.com',
                name: 'Paco',
            }
        }
    )
    console.log(newestudiante)
    
}catch(err){
        console.log(err)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
