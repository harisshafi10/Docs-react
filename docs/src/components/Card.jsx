import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";



function Card ({data, refrence}) {
  return (
      <motion.div drag
       dragConstraints={refrence}
        whileDrag={{scale:1.1}}
         dragElastic={0.1}
         dragTransition={{bounceDamping:30, bounceStiffness:100}}
       className=' relative w-60 h-72 flex-shrink-0 rounded-[45px] bg-zinc-900/90
       text-white px-8 py-10 overflow-hidden'>
      <FaRegFileAlt/>
      <p className='text-sm mt-5 font-semibold leading-tight'> {data.desc}</p>
      <div className='footer bottom-0 absolute  w-full  left-0'>
        <div className='  flex justify-between items-center py-3 px-8 mb-3'>
            <h5>{data.filesize}</h5>
           <span className='w-7 h-7 bg-zinc-600  flex justify-center items-center rounded-full'>
           {data.close ? <IoIosClose/>: <MdOutlineFileDownload size=".8em" color='#fff'/>}
           </span>
        </div>
        {  
            data.tag.isOpen && (<div className={` tag w-full py-4 
            ${data.tag.tagColor === "blue" ? "bg-blue-600": "bg-green-600"}
             flex item-center justify-center`}>
        <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
      </div>)
        }
        
      </div>
      </motion.div>
  )
}

export default Card