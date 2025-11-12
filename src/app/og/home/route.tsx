import React from 'react';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale') === 'pl' ? 'pl' : 'en';

  const title =
    locale === 'pl'
      ? 'Interaktywna przestrzeń do coachingu i autorefleksji'
      : 'Interactive workspace for coaching and self‑reflection';
  const subtitle =
    locale === 'pl'
      ? 'Metody wizualne • Sesje online • Wsparcie AI'
      : 'Visual methods • Real‑time online sessions • AI‑assisted';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '64px',
          background: 'linear-gradient(135deg, #FCF9F1 0%, #F8D749 100%)',
        }}
      >
        <div style={{ fontSize: 48, fontWeight: 800, color: '#222', fontFamily: 'Montserrat, Arial' }}>Flow‑XR</div>
        <div style={{ height: 16 }} />
        <div style={{ fontSize: 42, fontWeight: 800, color: '#222', fontFamily: 'Montserrat, Arial' }}>{title}</div>
        <div style={{ height: 24 }} />
        <div style={{ width: 560, height: 6, background: 'rgba(0,0,0,0.15)' }} />
        <div style={{ height: 24 }} />
        <div style={{ fontSize: 26, color: '#333', fontFamily: 'DM Sans, Arial' }}>{subtitle}</div>
      </div>
    ),
    { ...size }
  );
}

