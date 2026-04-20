import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import type { Magnet } from '../types/magnet';
import React from 'react';

export default function WordMagnet({ magnet }: { magnet: Magnet }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: magnet.id });

  const style: React.CSSProperties =
    magnet.status === 'fridge'
      ? {
          position: 'absolute',
          left: magnet.x,
          top: magnet.y,
          transform: CSS.Translate.toString(transform),
        }
      : {
          position: 'relative',
          transform: CSS.Translate.toString(transform),
        };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white border border-gray-300 shadow px-2 py-1 text-sm font-bold cursor-grab active:cursor-grabbing rounded"
    >
      {magnet.word}
    </div>
  );
}