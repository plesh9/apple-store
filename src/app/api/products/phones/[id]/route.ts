import { NextResponse, NextRequest } from 'next/server';
import { phones } from "../../data/phones";

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {
    const id = params.id
    
    const currentPhone = phones.find(phone => phone.id === id)
    if (!currentPhone) {
        return NextResponse.error();
    }

    return NextResponse.json(currentPhone)
}
