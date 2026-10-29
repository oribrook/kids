import { useMemo } from 'react';

const getRandomOffset = () => ({
  x: (Math.random() - 0.5) * 8,
  y: (Math.random() - 0.5) * 8,
  rotate: (Math.random() - 0.5) * 10,
});

const getIconSize = (count) => {
  if (count <= 2) return '45%';
  if (count <= 4) return '42%';
  if (count <= 6) return '30%';
  return '25%';
};

// Renders IconComponent `count` times with small random offsets (fixed per count)
const MultiIconRenderer = ({ IconComponent, count, containerClass }) => {
  const offsets = useMemo(
    () => Array.from({ length: count > 1 ? count : 0 }, () => getRandomOffset()),
    [count]
  );

  if (!IconComponent || count <= 1) {
    return IconComponent ? <IconComponent /> : null;
  }

  const iconSize = getIconSize(count);

  return (
    <div className={containerClass} style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '4px',
      width: '100%',
      height: '100%',
    }}>
      {offsets.map((offset, i) => (
        <div
          key={i}
          style={{
            width: iconSize,
            height: iconSize,
            transform: `translate(${offset.x}px, ${offset.y}px) rotate(${offset.rotate}deg)`,
          }}
        >
          <IconComponent />
        </div>
      ))}
    </div>
  );
};

export default MultiIconRenderer;
