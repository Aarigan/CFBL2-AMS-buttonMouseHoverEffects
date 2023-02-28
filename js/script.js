
/**
 * Inspired by - https://dev.to/jashgopani
 */



const btn = document.querySelector(".button");

  btn.addEventListener("mousemove", (e) => {
   
    const rect = e.target.getBoundingClientRect();
 
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 
    e.target.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(2, 252, 231, 0.2),rgba(2, 252, 231, 0))`;
    e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px, rgba(2, 252, 231, 0.7),rgba(2, 252, 231, 0.1)) 1 / 1.5px / 5px stretch`;
  });

  btn.onmouseleave = (e) => {
    e.target.style.background = "#535353";
    e.target.style.borderImage = null;
  };
