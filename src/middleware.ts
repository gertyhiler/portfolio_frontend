import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export default function middleware(request: NextRequest) {
  return NextResponse.next({
    request: {
      headers: new Headers({ "x-next-path-page": request.nextUrl.pathname }),
    },
  });
}
