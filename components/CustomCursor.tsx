// import React, { useEffect, useRef } from 'react';

// export const CustomCursor = () => {
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const cursorTrailRef = useRef<HTMLDivElement>(null);
//   let cursorPosition = { x: 0, y: 0 };
//   let trailPosition = { x: 0, y: 0 };

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     const cursorTrail = cursorTrailRef.current;
    
//     const moveCursor = (e: MouseEvent) => {
//       if (cursor && cursorTrail) {
//         cursorPosition.x = e.clientX;
//         cursorPosition.y = e.clientY;
        
//         cursor.style.left = `${cursorPosition.x}px`;
//         cursor.style.top = `${cursorPosition.y}px`;
//       }
//     };

//     const moveTrail = () => {
//       if (cursorTrail) {

//         const dx = cursorPosition.x - trailPosition.x;
//         const dy = cursorPosition.y - trailPosition.y;
        
//         trailPosition.x += dx * 0.15;
//         trailPosition.y += dy * 0.15;
        
//         cursorTrail.style.left = `${trailPosition.x}px`;
//         cursorTrail.style.top = `${trailPosition.y}px`;

//         requestAnimationFrame(moveTrail);
//       }
//     };

//     window.addEventListener('mousemove', moveCursor);
//     requestAnimationFrame(moveTrail);
    
//     return () => {
//       window.removeEventListener('mousemove', moveCursor);
//     };
//   }, []);

//   return (
//     <>
//       <div ref={cursorRef} className="cursor" />
//       <div ref={cursorTrailRef} className="cursor-trail" />
//     </>
//   );
// };



import React, { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTrailRef = useRef<HTMLDivElement>(null);
  let cursorPosition = { x: 0, y: 0 };
  let trailPosition = { x: 0, y: 0 };

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorTrail = cursorTrailRef.current;

    const moveCursor = (e: MouseEvent) => {
      if (cursor && cursorTrail) {
        cursorPosition.x = e.clientX;
        cursorPosition.y = e.clientY;

        cursor.style.left = `${cursorPosition.x}px`;
        cursor.style.top = `${cursorPosition.y}px`;
      }
    };

    const moveTrail = () => {
      if (cursorTrail) {
        const dx = cursorPosition.x - trailPosition.x;
        const dy = cursorPosition.y - trailPosition.y;

        trailPosition.x += dx * 0.2;
        trailPosition.y += dy * 0.2;

        cursorTrail.style.left = `${trailPosition.x}px`;
        cursorTrail.style.top = `${trailPosition.y}px`;

        requestAnimationFrame(moveTrail);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    requestAnimationFrame(moveTrail);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={cursorTrailRef} className="cursor-trail" />
    </>
  );
};
