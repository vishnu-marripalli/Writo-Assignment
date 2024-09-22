import React ,{useState} from 'react'

import { FaInstagram, FaSquareGithub, FaLinkedin } from "react-icons/fa6";




export default function Footer() {

  

  

  return (
    <>
    <div className="w-full bg-primary flex flex-col items-center  gap-6 text-white py-10 px-5">
        <h1 className="text-2xl font-semibold">Instructions to Use</h1>
        <div>
            <ul className="list-disc ml-5">
                <li>Click the "Add Row" button to insert a new row into the table.</li>
                <li>Enter the label of the new column in the "Column Label" input field.</li>
                <li>
                Choose the type of column from the dropdown. You can select between: Text
                and Number.
                </li>
                <li>Click the "Add Column" button to insert a new column into the table.</li>
                <li>Click on any cell to edit the content.</li>
                <li>In the "Search" input field, type the text you want to search for.</li>
                <li>From the "Column Name" dropdown, select the column in which you want to search.</li>
                <li>Click the "Search" button to filter rows based on your search criteria.</li>
                <li>Click the column headers to sort the data in ascending or descending order.</li>
            </ul>
        </div>
        <div className='flex flex-col justify-center items-center gap-6'>
          
          <h2 className="sm:text-sm text-[9px] text-center ">
            Developed by VishnuVardhan Marripalli
          </h2>
          <div className='flex  gap-2 '>
              <a href="https://www.instagram.com/vish_nu0022"
              className=""
              target="_blank"
              rel="noopener noreferrer">
              
              <FaInstagram size={30}/></a>
              <a href="https://www.linkedin.com/in/vishnuvardhan-marripalli/"
              className=""
              target="_blank"
              rel="noopener noreferrer">
              
              <FaLinkedin size={30}/></a>
              <a href="https://github.com/vishnu-marripalli"
              className=""
              target="_blank"
              rel="noopener noreferrer">
              
              <FaSquareGithub size={30}  /></a>
          </div>
        </div>
     </div>
    </>
  )
}
