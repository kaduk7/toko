import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { getToken } from "next-auth/jwt";

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic';

export const GET = async (request: NextRequest) => {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  })
  const karyawanId = Number(token!.karyawanId);

  const laporan = await prisma.servisTb.findMany({
    where: {
      status: 'Done',
      karyawanId: karyawanId
    },
    orderBy: {
      kodeServis: "asc"
    }
  });
  return NextResponse.json(laporan, { status: 200 })
}
