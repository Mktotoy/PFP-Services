import { NextRequest, NextResponse } from 'next/server';

const REDIRECT_SOURCE = 'deratisation-77.com';
const REDIRECT_TARGET = 'https://pfp-services.fr';

export function proxy(request: NextRequest) {
    const host = request.headers.get('host') ?? '';

    // Strip port if present (e.g. deratisation-77.com:443 → deratisation-77.com)
    const hostname = host.split(':')[0];

    if (hostname === REDIRECT_SOURCE || hostname === `www.${REDIRECT_SOURCE}`) {
        const destination = `${REDIRECT_TARGET}${request.nextUrl.pathname}${request.nextUrl.search}`;
        return NextResponse.redirect(destination, {
            status: 301,
            headers: {
                'Cache-Control': 'public, max-age=31536000',
            },
        });
    }

    return NextResponse.next();
}

export const config = {
    // Run on all routes except Next.js internals and static assets
    matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
