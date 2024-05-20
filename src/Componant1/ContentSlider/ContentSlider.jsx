 const ContentSlider = () => {
   return (
     <div className=" main__container">
       <h1>My Marquee</h1>
       <section className=" ">
         <h2>Default Behaviour</h2>

         <div className="marquee">
           <ul className="marquee__content">
             <div className=" marquee__item">
               <h5>hello</h5>
             </div>
             <div className=" marquee__item">
               <h5>hello</h5>
             </div>
             <div className=" marquee__item">
               <h5>hello</h5>
             </div>
             <div className=" marquee__item">
               <h5>hello</h5>
             </div>
             <div className=" marquee__item">
               <h5>hello</h5>
             </div>
             <div className=" marquee__item">
               <h5>hello</h5>
             </div>
           </ul>

           <ul aria-hidden="true" className="marquee__content">
             <div className=" marquee__item">
               <h5>hello</h5>
             </div>
             <div className=" marquee__item">
               <h5>hello</h5>
             </div>
             <div className=" marquee__item">
               <h5>hello</h5>
             </div>
             <div className=" marquee__item">
               <h5>hello</h5>
             </div>
             <div className=" marquee__item">
               <h5>hello</h5>
             </div>
             <div className=" marquee__item">
               <h5>hello</h5>
             </div>
           </ul>
         </div>
       </section>
     </div>
   );
 };
export default ContentSlider;