import React from 'react';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale') === 'pl' ? 'pl' : 'en';
  const title = 'Bogoban Online';
  const subtitle = locale === 'pl' ? 'Tablica wizualna do coachingu • Pavel Piskarev' : 'Visual board for coaching • Pavel Piskarev';

  return new ImageResponse(
    (
      <div style={{ width: 1200, height: 630, background: '#1e293b', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 64 }}>
        <div style={{ fontSize: 46, fontWeight: 800, fontFamily: 'Montserrat, Arial', color: '#F8D749' }}>{title}</div>
        <div style={{ height: 16 }} />
        <div style={{ fontSize: 34, fontWeight: 700, fontFamily: 'Montserrat, Arial' }}>{locale === 'pl' ? 'Tablica online do Bogoban' : 'Online Board for Bogoban'}</div>
        <div style={{ height: 18 }} />
        <div style={{ width: 560, height: 6, background: 'rgba(248,215,73,0.6)' }} />
        <div style={{ height: 18 }} />
        <div style={{ fontSize: 26, fontFamily: 'DM Sans, Arial' }}>{subtitle}</div>
      </div>
    ),
    { ...size }
  );
}

