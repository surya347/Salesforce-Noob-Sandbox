import React from 'react'

const supportIcon = () => {
  return (
    <>
    <div className=''>
        <button className="glow-on-hover" type="button">Support Us</button>
    </div>
    <style jsx>
        {`
            .support_btn{
                
            }

            .glow-on-hover {
                background: linear-gradient(45deg,#d5135a,#ff0000);
                box-shadow: 0px 4px 30px rgba(223,45,70,0.6);
                top: 85vh;
                right: 5vh;
                border: 1px solid #cc0000;
                position: fixed;
                width: 220px;
                height: 50px;
                outline: none;
                color: #fff;
                background: #111;
                cursor: pointer;
                z-index: 100;
                border-radius: 10px;
                font-weight:600;
                font-size:18px;
                font-family: sans-serif;
            }
            
            .glow-on-hover:before {
                content: '';
                background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
                position: absolute;
                top: -2px;
                left:-2px;
                background-size: 400%;
                z-index: -1;
                filter: blur(5px);
                width: calc(100% + 4px);
                height: calc(100% + 4px);
                animation: glowing 20s linear infinite;
                opacity: 0;
                transition: opacity .3s ease-in-out;
                border-radius: 10px;
            }
            
            .glow-on-hover:active {
                color: #000
            }
            .glow-on-hover:active:after {
                background: transparent;
            }
            
            .glow-on-hover:hover:before {
                opacity: 1;
            }
            
            .glow-on-hover:after {
                z-index: -1;
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background: #111;
                left: 0;
                top: 0;
                border-radius: 10px;
            }
            
            @keyframes glowing {
                0% { background-position: 0 0; }
                50% { background-position: 400% 0; }
                100% { background-position: 0 0; }
            }
        `}
    </style>
    </>
  )
}

export default supportIcon;