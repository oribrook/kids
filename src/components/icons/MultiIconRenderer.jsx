// Helper component to render multiple icons with random offsets
const MultiIconRenderer = ({ IconComponent, count, containerClass }) => {
  if (!IconComponent || count <= 1) {
    return IconComponent ? <IconComponent /> : null;
  }

  // Generate random offsets for each icon (small variations for natural look)
  const getRandomOffset = () => ({
    x: (Math.random() - 0.5) * 8,
    y: (Math.random() - 0.5) * 8,
    rotate: (Math.random() - 0.5) * 10,
  });

  // Calculate icon size based on count
  const getIconSize = (count) => {
    if (count <= 2) return '45%';
    if (count <= 4) return '42%';
    if (count <= 6) return '30%';
    return '25%';
  };

  const iconSize = getIconSize(count);
  const offsets = Array.from({ length: count }, () => getRandomOffset());

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
