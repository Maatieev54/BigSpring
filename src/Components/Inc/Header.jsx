import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router';

export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const menuRef = useRef(null);
   const lastFocusedElementRef = useRef(null);

   const openMenu = () => {
      lastFocusedElementRef.current = document.activeElement;
      setIsMenuOpen(true);

      // Move focus into menu after state update
      setTimeout(() => {
         menuRef.current?.focus();
      }, 0);
   };

   const closeMenu = () => {
      setIsMenuOpen(false);

      // Restore focus after state update
      setTimeout(() => {
         lastFocusedElementRef.current?.focus();
      }, 0);
   };

   useEffect(() => {
      const handleEscapeKey = (e) => {
         if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
         }
      };

      document.addEventListener('keydown', handleEscapeKey);

      return () => {
         document.removeEventListener('keydown', handleEscapeKey);
      };
   }, [isMenuOpen]);


   return (
      <nav
         className="flex py-2 px-4 md:px-8 bg-white  border-slate-300 min-h-17 relative z-20"
         aria-label="Main navigation"
      >
         <div className="max-w-7xl mx-auto  flex flex-wrap items-center justify-between gap-4 w-full">
          
            <Link  className="min-w-9 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded" to={'/'}>
            <span className="sr-only">Big Spring</span>
               <img
                  src="https://themewagon.github.io/bigspring/images/logo.png"
                  alt="BIG SPring"
                  className="h-9 w-auto"
               /></Link>

            <div
               id="collapseMenu"
               ref={menuRef}
               tabIndex={-1}
               className={`${isMenuOpen ? "block" : "hidden"} lg:block max-lg:bg-white max-lg:border-l max-lg:border-slate-300 max-lg:w-1/2 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-sm:w-full z-50 outline-none`}
            >
               <div className="py-2 px-4 flex justify-between items-center border-b border-slate-300 sticky top-0 bg-white lg:hidden max-lg:min-h-17">
                  <a
                     href="#"
                     className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                     <span className="sr-only">Big Spring</span>
                     <img
                        src="https://themewagon.github.io/bigspring/images/logo.png"
                        alt="Big Spring"
                        className="h-9 w-auto"
                     />
                  </a>
                  <button type="button" aria-controls="collapseMenu"
                     onClick={closeMenu}
                     id="toggleClose"
                     className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                     <span className="sr-only">Close main menu</span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 fill-slate-900"
                        aria-hidden="true"
                        viewBox="0 0 329.269 329"
                     >
                        <path
                           d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
                           data-original="#000000"
                        />
                     </svg>
                  </button>
               </div>

               <ul className="flex flex-col gap-8 font-semibold text-sm text-slate-900 lg:flex-row max-lg:p-6">
                  <li>
                     <NavLink end onClick={closeMenu} className={({ isActive }) => `${isActive ? 'text-[#0ba8a7]' : ''} hover:text-[#0ba8a7] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded`} to={'/'}>Home</NavLink>
                  </li>
                  <li>
               <NavLink onClick={closeMenu} className={({ isActive }) => `${isActive ? 'text-[#0ba8a7]' : ''} hover:text-[#0ba8a7] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded`} to={'/Blog'}>Blog</NavLink>
                  </li>
                  <li>
                   <NavLink onClick={closeMenu} className={({ isActive }) => `${isActive ? 'text-[#0ba8a7]' : ''} hover:text-[#0ba8a7] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded`} to={'/Pricing'}>Pricing</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={closeMenu} className={({ isActive }) => `${isActive ? 'text-[#0ba8a7]' : ''} hover:text-[#0ba8a7] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded`} to={'/Contact'}>Contact</NavLink>
                  </li>
                  <li>
                       <NavLink onClick={closeMenu} className={({ isActive }) => `${isActive ? 'text-[#0ba8a7]' : ''} hover:text-[#0ba8a7] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded`} to={'/Faq'}>Faq</NavLink>
                  </li>
                  <li>
                    
               <Link to={'/Contact'} onClick={closeMenu}  className=" md:hidden py-2 px-3.5 text-sm rounded-3xl font-semibold cursor-pointer text-white border border-[#0BA8A7] 
                  bg-[#0BA8A7] hover:scale-105  transition-all focus:outline-none focus-visible:ring-2">Get Started</Link>
                  </li>
               </ul>
            </div>

            <div className="flex items-center gap-4">
             
               <Link
                  to={'/Contact'}
                  className=" hidden md:block py-2 px-3.5 text-sm rounded-3xl font-semibold cursor-pointer text-white border border-[#0BA8A7] 
                  bg-[#0BA8A7] hover:scale-105  transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
               >
                  Get Started
               </Link>

               <button
                  type="button"
                  aria-controls="collapseMenu"
                  aria-expanded={isMenuOpen}
                  aria-haspopup="true"
                  id="toggleOpen"
                  onClick={openMenu}
                  className="cursor-pointer lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                  <span className="sr-only">Open main menu</span>
                  <svg
                     className="size-7 fill-slate-900"
                     aria-hidden="true"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                     ></path>
                  </svg>
               </button>
            </div>
         </div>
      </nav>
   );
};
