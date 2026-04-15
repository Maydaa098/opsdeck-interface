const RadarSVG = () => (
  <svg
    viewBox="0 0 800 800"
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.08]"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Concentric circles */}
    {[100, 200, 300, 400].map((r) => (
      <circle key={r} cx="400" cy="400" r={r} stroke="hsl(220,100%,50%)" strokeWidth="0.5" />
    ))}
    {/* Crosshairs */}
    <line x1="0" y1="400" x2="800" y2="400" stroke="hsl(220,100%,50%)" strokeWidth="0.5" />
    <line x1="400" y1="0" x2="400" y2="800" stroke="hsl(220,100%,50%)" strokeWidth="0.5" />
    <line x1="117" y1="117" x2="683" y2="683" stroke="hsl(220,100%,50%)" strokeWidth="0.3" />
    <line x1="683" y1="117" x2="117" y2="683" stroke="hsl(220,100%,50%)" strokeWidth="0.3" />
    {/* Sweep line */}
    <line x1="400" y1="400" x2="400" y2="0" stroke="hsl(155,100%,50%)" strokeWidth="1" className="slow-rotate" style={{ transformOrigin: '400px 400px' }} />
    {/* Blips */}
    <circle cx="320" cy="250" r="3" fill="hsl(155,100%,50%)" className="pulse-ring" style={{ transformOrigin: '320px 250px' }} />
    <circle cx="520" cy="340" r="3" fill="hsl(155,100%,50%)" className="pulse-ring" style={{ transformOrigin: '520px 340px', animationDelay: '1s' }} />
    <circle cx="450" cy="500" r="2" fill="hsl(18,100%,50%)" className="pulse-ring" style={{ transformOrigin: '450px 500px', animationDelay: '2s' }} />
  </svg>
);

export default RadarSVG;
