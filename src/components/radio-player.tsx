'use client';
import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface Props {
  src: string;
}

export const RadioPlayer = ({ src }: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(audioRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
      
      });

      return () => {
        hls.destroy();
      };
    } else if (audioRef.current?.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari nativo
      audioRef.current.src = src;

    }
  }, [src]);

  return (
    <audio ref={audioRef} controls />
  );
};
