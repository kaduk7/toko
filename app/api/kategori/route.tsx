import { NextResponse } from "next/server"
import { PrismaClient, KategoriTb } from "@prisma/client"

const prisma = new PrismaClient()

export const POST = async (request: Request) => {

    const body: KategoriTb = await request.json()
    const kategori = await prisma.kategoriTb.create({    
        data: {
            nama: body.nama,
        }
    })
    return NextResponse.json(kategori, { status: 201 })
}

export const GET = async () => {
    const kategori = await prisma.kategoriTb.findMany({
        orderBy:{
            id:'asc'
        }
    });
    return NextResponse.json(kategori, { status: 200 })
}