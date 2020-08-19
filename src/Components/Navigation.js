import React from 'react'
import { useState } from "react"
import {Sidebar, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';

import { FaDiscord } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri"

import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <div>
      <Sidebar bgColor='black' isCollapsed={false}>
        <Logo
          image='http://blyat.fun/screen/Riter_Discord.png'
          imageName='riter logo'/>
        <LogoText>RITER</LogoText>
        <Link to="/panel"><Item bgColor='black'>
          <Icon><i className="fas fa-sitemap"/></Icon>
          <span style={{ fontSize: "20px" }}>PANEL</span> <span style={{ color: "#f16051"}}>Coming Soon...</span>
        </Item></Link>
        <Link to="/"><Item bgColor='black'>
          <Icon><i className="fas fa-info"/></Icon>
          Home
        </Item></Link>
        <Link to="/howto"><Item bgColor='black'>
          <Icon><i className="fas fa-sitemap"/></Icon>
          How-to
        </Item></Link>
        <Link to="/"><Item bgColor='black' className="reference">
          <Icon><i className="far fa-address-book"/></Icon>
          Payment <span style={{ color: "#f16051" }}>Coming Soon...</span>
        </Item></Link>
        <a href="https://discord.gg/X9fjcrW"><RiDiscordLine style={{ fontSize: "90px", color: "white", cursor: "pointer" }} className="discord pt-5"/></a>
      </Sidebar>
    </div>
  )
};

export default Navigation
