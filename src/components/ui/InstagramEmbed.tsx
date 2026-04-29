'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

type Props = {
  postUrl: string;
  className?: string;
  /**
   * Clip the embed to show only the image portion.
   * Hides Instagram's header (~54px) and bottom caption/buttons.
   * Best for square posts.
   */
  imageOnly?: boolean;
  /** Background color for the bottom fade overlay (match section bg). Default: #FAF6F0 */
  fadeBg?: string;
};

export function InstagramEmbed({
  postUrl,
  className = '',
  imageOnly = false,
  fadeBg = '#FAF6F0',
}: Props) {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [postUrl]);

  const blockquoteStyle: React.CSSProperties = {
    background: '#FFF',
    border: 0,
    borderRadius: '3px',
    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
    margin: '0 auto',
    maxWidth: '480px',
    minWidth: '326px',
    padding: 0,
    width: '100%',
  };

  if (imageOnly) {
    return (
      <div
        className={className}
        style={{
          position: 'relative',
          maxWidth: '480px',
          margin: '0 auto',
          overflow: 'hidden',
          height: '560px',
        }}
      >
        {/* Negative margin hides only the very top Instagram logo bar */}
        <div style={{ marginTop: '-20px' }}>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={postUrl}
            data-instgrm-version="14"
            style={blockquoteStyle}
          />
        </div>
        {/* Fade overlay at bottom masks action buttons */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '48px',
            background: `linear-gradient(transparent, ${fadeBg})`,
            pointerEvents: 'none',
          }}
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned=""
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={blockquoteStyle}
      />
    </div>
  );
}
