import { NextResponse } from 'next/server';
import { phones } from './../data/phones';

export async function GET() {
  if (!phones) return NextResponse.error(); 
  return NextResponse.json(phones)
}
