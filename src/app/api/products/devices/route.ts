import { NextRequest, NextResponse } from 'next/server';
import { devices } from './../data/devices';

export async function GET(req: NextRequest,) {
  const url = new URL(req.url)
  const filter = url.searchParams.get("filter")
  if (!filter || filter === 'all products') {
    return NextResponse.json(devices)
  }

  const curentDevices = devices.filter(device => device.category === filter)

  return NextResponse.json(curentDevices)
}
