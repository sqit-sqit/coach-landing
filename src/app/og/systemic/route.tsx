import React from 'react';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale') === 'pl' ? 'pl' : 'en';
  const title = locale === 'pl' ? 'Ustawienia Systemowe i Rodzinne Online' : 'Systemic & Family Constellations Online';
  const subtitle = locale === 'pl' ? 'Interaktywna tablica • Bert Hellinger' : 'Interactive board • Bert Hellinger';

  return new ImageResponse(
    (
      <div style={{ width: 1200, height: 630, background: '#0f766e', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 64 }}>
        <div style={{ fontSize: 44, fontWeight: 800, fontFamily: 'Montserrat, Arial' }}>{title}</div>
        <div style={{ height: 18 }} />
        <div style={{ width: 560, height: 6, background: 'rgba(255,255,255,0.35)' }} />
        <div style={{ height: 18 }} />
        <div style={{ fontSize: 26, fontFamily: 'DM Sans, Arial', color: '#e7fffa' }}>{subtitle}</div>
      </div>
    ),
    { ...size }
  );
}

