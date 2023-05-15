import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

interface Props {
  id?: string;
  className?: string;
  x?: number;
  y?: number;
}

function useOpacity() {
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setOpacity(0);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return opacity;
}
function Snow(props: Props) {
  return <Image id={props.id} className={props.className} style={{ 
    translate: `${props.x || 0}px ${props.y || 0}px`,
    opacity: useOpacity(),
  }} src="/snow.gif" alt="Snow" width={24} height={24} />;
}
function Snow2(props: Props) {
  return <Image id={props.id} className={props.className} style={{
    translate: `${props.x || 0}px ${props.y || 0}px`,
    opacity: useOpacity(),
  }} src="/snow3.gif" alt="Snow" width={25} height={28} />;
}
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function useSnow(props: Props) {
  if (getRandomInt(0, 1) == 0) return Snow(props)
  else return Snow2(props);
}
function getPageHeight() {
  var body = document.body, html = document.documentElement;

  var height = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight );
  return height
}
function getPageWidth() {
  return screen.width;
}
function SnowFall() {
  const width = getPageWidth();
  const height = getPageHeight();
  const [x, setX] = useState(getRandomInt(-width, 2 * width));
  const [y, setY] = useState(-30);
  const snow = useSnow({className: "absolute transition-all duration-[5s] ease-out z-10", x: x, y: y});
  useEffect(() => {
    setX(getRandomInt(0, width));
    setY(height-30);
  }, [width, height]);
  return snow;
}
export function WinterAnimation({numSnows = 100}) {
  const [snows, setSnows] = useState<Array<any>>([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSnows([...snows, <li key={index}><SnowFall /></li>]);
      setIndex((index+1) % numSnows);
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, [snows, numSnows, index])
  useEffect(() => {
    if (snows.length > numSnows) setSnows(snows.slice(1));
  }, [snows, numSnows]);

  return <ul>
    {snows}
  </ul>;
}