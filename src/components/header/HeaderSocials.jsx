import React from 'react'
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/soe-cpu" target="_blank"><FaGithub /></a>
        <a href="https://www.facebook.com/soelinaung709" target="_blank"><BsFacebook /></a>
        <a href="https://www.instagram.com/sox8206/" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials