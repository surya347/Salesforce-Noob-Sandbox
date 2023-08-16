import Image from 'next/image'
import portStyles from '../../styles/PortfolioContainer.module.css'


export const HomeFooter = () => {
  return (
    <>
    <div className={portStyles.footer_container}>
        <div className={portStyles.footer_parent}>
            <img src='/shape-bg.png' alt="no internet connection" />
        </div>
    </div>
    
    </>
  )
}
