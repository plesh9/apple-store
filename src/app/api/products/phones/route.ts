import { NextResponse } from 'next/server';
import { NextApiRequest } from "next";
import { phones } from './../data/phones';

export async function GET(req: NextApiRequest,) {
  return NextResponse.json(phones)
}
