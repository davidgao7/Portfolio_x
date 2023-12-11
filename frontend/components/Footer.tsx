import React from 'react'
import { Link } from 'react-router-dom'
import Image from 'next/image'
import { FOOTER_LINKS } from '@/constants'

const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>
        <div className="padding-container max-container flex w-full flex-col gap-14">
          <div className="flex flex-col items-start justiy-center gap-[10%] md:flex-row">
            <Link href="/" className='mb-10'>
              <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
            </Link>
            
            <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
              {FOOTER_LINKS.map(columns)=>(
                <FooterColumn title={}>

                </FooterColumn>
              )}
            </div>
          </div>
        </div>
    </footer>
  )
}

const FooterColumn = ({title, children}: FooterColumnProps) => {
  return(
    <div>
      <h4>{title}</h4>
    </div>
  )
}

export default Footer