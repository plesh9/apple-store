import { NextResponse } from 'next/server';
import { trailers } from './data';

export async function GET() {
  return NextResponse.json(trailers)
}
