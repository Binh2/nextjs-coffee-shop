import Image from 'next/image'
import styles from './ImageSlide.module.css'
import { useCallback, useEffect, useState } from 'react';

export function ImageSlide() {
  const [order, setOrder] = useState(1);
  const [inter, setInter] = useState(3000);
  const num_order = 4;
  const imageStyle = ' ' + `transition-all duration-{3s}`
  function incrementOrder() {
    setOrder((order + 1) % num_order);
  }
  const decrementOrder = useCallback(function() {
    setOrder((order + num_order - 1) % num_order);
  }, [order, setOrder]);

  useEffect(() => {
    const timer = setInterval(decrementOrder, inter);
    return () => clearInterval(timer);
  }, [decrementOrder, inter])

  return <div className={`flex`}>
    <Image className={styles['image_order_' + ((order + 0) % num_order).toString()] + imageStyle} src="/banner1.jpg" alt="Image of the coffee shop" width={800} height={420} />
    <Image className={styles['image_order_' + ((order + 1) % num_order).toString()] + imageStyle} src="/banner2.jpg" alt="Image of the coffee shop" width={800} height={420} />
    <Image className={styles['image_order_' + ((order + 2) % num_order).toString()] + imageStyle} src="/banner3.jpg" alt="Image of the coffee shop" width={800} height={420} />
    <Image className={styles['image_order_' + ((order + 3) % num_order).toString()] + imageStyle} src="/banner4.jpg" alt="Image of the coffee shop" width={800} height={420} />
    <button className='absolute top-[calc(50%-21px)] left-2 opacity-60' onClick={() => {
      incrementOrder();
      setInter(10000);
    }}>
      <Image src="/left.gif" alt="Arrow to the left" width={42} height={42} />
    </button>
    <button className='absolute top-[calc(50%-21px)] right-2 opacity-60' onClick={() => {
      decrementOrder();
      setInter(3000);
    }}>
      <Image src="/right.gif" alt="Arrow to the right" width={42} height={42} />
    </button>
  </div>
}