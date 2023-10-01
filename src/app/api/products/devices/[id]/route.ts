import { NextRequest, NextResponse } from 'next/server';
import { devices } from './../../data/devices';

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {
    const id = params.id
    
    const currentPhone = devices.find(device => device.id === id)
    if (!currentPhone) {
        return NextResponse.error();
    }

    return NextResponse.json(currentPhone)
}
