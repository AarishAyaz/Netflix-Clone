import React, { useState } from 'react'
import { motion } from "framer-motion";
const FAQAccordion = ({question,answer,isOpen, onClick}) => {

 

  return (
    <div className="mb-4 border-b text-2xl  border-gray-950">
      <div className=''>
      <button
      className="w-full text-left p-4 bg-gray-900 text-white font-medium flex justify-between cursor-pointer hover:bg-gray-800 h-25 items-center"
      onClick={onClick}
    >
      <h2 className=''>{question}</h2>
      <span>{isOpen ? "✖" : "➕"}</span>
    </button>
    <hr className="border-black" />
    <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        {isOpen && <p className="p-4 bg-gray-900 text-gray-300">{answer}</p>}
      </motion.div>
      </div>
  
  </div>
  )
}

export default FAQAccordion
