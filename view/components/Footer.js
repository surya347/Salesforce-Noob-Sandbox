import { FaEnvelope,FaTelegramPlane,FaLocationArrow,FaYoutube,FaLinkedin,FaLinkedinIn,FaInstagram,FaInstagramSquare } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import footerStyle from '../styles/Footer.module.css';

const Footers = () => {
  return (
    <>
    <footer className={footerStyle.footers}>
        <div className={footerStyle.footer_row}>
            
                <div className={footerStyle.footer_col}>
                <Image src="/Sf_noob_logo.png" className={footerStyle.footer_log} width="150" height="120"/>
                <p>If you don’t like your destiny, don’t accept it. Instead have the courage to change it the way you want it to be.</p>
            </div>
            
            
            <div className={footerStyle.footer_col}>
            <h3>Contact Us! <div className={footerStyle.footer_underline}><span></span></div></h3>
                <p className={footerStyle.email_id}>noobsalesforce@gmail.com</p>
                {/* <h4>+91- 9285405005</h4>          */}
            </div>
            
            <div className={footerStyle.footer_col}>

                <h3>Links<div className={footerStyle.footer_underline}><span></span></div></h3>
                <ul className={footerStyle.footer_link_list}>
                    <li><a href='/'>Home</a></li>
                    <li><Link href='/code'>Source Code</Link></li>
                    {/* <li><Link href=''></Link>Courses</li> */}
                    <li><Link href='/profile'>Profile</Link></li>
                    <li><Link href='/code'>Codes</Link></li>
                    <li><Link href='/blogs'>Blogs</Link></li>

                </ul>
                </div>
            
                <div className={footerStyle.footer_col}>
                <h3>NewsLetter<div className={footerStyle.footer_underline}><span></span></div></h3>
                <form>
                    <i className={footerStyle.enveloper_icon}><FaEnvelope/></i>
                    <input type="email" placeholder='Enter your email id' required></input>
                    <button type='submit'><i className={footerStyle.arrow_icone}><FaLocationArrow/></i></button>
                </form>
                
                <div className={footerStyle.footer_social_icons}>
                   <a href="https://www.youtube.com/channel/UCvgE8SgvQTpBK5BzdOyAAQw" ><i className={footerStyle.social_icons} aria-hidden="true"><FaYoutube/></i></a>
                   <a href="https://www.instagram.com/sfnoob10/"><i className={footerStyle.social_icons} aria-hidden="true"><FaInstagram/></i></a>
                    <a href="https://www.linkedin.com/in/salesforce-noob-315990221/" ><i className={footerStyle.social_icons} aria-hidden="true"><FaLinkedinIn/></i></a>
                    <a href="https://t.me/salesforcenoobcommunity/" ><i className={footerStyle.social_icons} aria-hidden="true"><FaTelegramPlane/></i></a>

                    {/* <i class="fa fa-facebook-square" aria-hidden="true"></i> */}
                </div>
                </div>
        </div>
       <hr className={footerStyle.hr_footer} />
       {/* <p className='copyright_footer'>Salesforce Noob Ⓒ 2022 - All Rights Reserved</p> */}
       <p className={footerStyle.copyright_footer}>Salesforce Noob</p>

    </footer>
    <style jsx>
        {`
        footer{
            width: 100%;
            /* position: absolute; */
            /* bottom: 0; */
            background: linear-gradient(to right,#00093c,#2d0b00);
            color: #fff;
            padding: 100px 0 30px;
            border-top-left-radius: 125px;
            font-size: 13px;
        }
        `}
    </style>
       </>
  )
}

export default Footers;
