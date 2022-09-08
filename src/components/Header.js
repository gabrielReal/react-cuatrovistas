import React from 'react'
import { HeaderLogo } from './HeaderLogo';
import { HeaderNav } from './HeaderNav';
import { HeaderRedes } from './HeaderRedes';
import { MainImage } from './MainImage';
import MenuMobile from './MenuMobile';

export const Header = () => {
  return (
    <>
    <div className='top'>
        <MenuMobile />
        <HeaderLogo />
        <HeaderNav />
        <HeaderRedes />
    </div>
    <MainImage />
    </>
  )
}
