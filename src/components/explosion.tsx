import { useEffect, useState } from "react";
import "./explosion.css";

const Explosion = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    // Optional: Reset or handle sound here if not handled centrally
    const timer = setTimeout(() => setActive(false), 2000); // Effect duration
    return () => clearTimeout(timer);
  }, []);

  if (!active) return null;

  return (
    <div className="explosion-container">
      <div className="shockwave"></div>
      <div className="flash"></div>
      <div className="fireball"></div>
      <div className="debris d1"></div>
      <div className="debris d2"></div>
      <div className="debris d3"></div>
      <div className="debris d4"></div>
      <div className="debris d5"></div>
      <div className="debris d6"></div>
    </div>
  );
};

export default Explosion;
