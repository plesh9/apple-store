import { NextResponse } from 'next/server';
import { NextApiRequest } from "next";
import { trailers } from './data';

export async function GET(req: NextApiRequest,) {
  return NextResponse.json(trailers)
}
