import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'UMC - University MakeUs Challenge';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: '#000000',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* Decorative Grid Lines */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: '20px solid #1a1a1a',
            display: 'flex',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          {/* Glow Effect */}
          <div
            style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              background: '#52E560',
              filter: 'blur(150px)',
              opacity: 0.2,
              borderRadius: '50%',
              zIndex: -1,
            }}
          />

          <div
            style={{
              fontSize: 140,
              fontWeight: 900,
              fontStyle: 'italic',
              color: 'white',
              lineHeight: 1,
              letterSpacing: '-0.05em',
              marginBottom: 20,
              textShadow: '0 0 30px rgba(82, 229, 96, 0.3)',
              display: 'flex',
            }}
          >
            UMC
          </div>

          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: '#52E560',
              textTransform: 'uppercase',
              display: 'flex',
            }}
          >
            University MakeUs Challenge
          </div>

          <div
            style={{
              marginTop: 60,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 24px',
              border: '1px solid #333',
              borderRadius: '50px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            }}
          >
            <div
              style={{
                fontSize: 18,
                color: '#888',
                letterSpacing: '0.1em',
                marginRight: 10,
              }}
            >
              NEXT GEN UNIVERSITY CLUB
            </div>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#52E560',
                boxShadow: '0 0 10px #52E560',
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
