import { NextResponse } from 'next/server'

// RSS feed is currently disabled
export async function GET(req: Request) {
    return new NextResponse('RSS feed is currently disabled', {
        status: 404,
        headers: {
            'Content-Type': 'text/plain',
        },
    })
}
