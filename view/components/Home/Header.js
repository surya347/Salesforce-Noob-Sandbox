import { PortfolioContainer } from './PortfolioContainer';
import { HomeFooter } from './HomeFooter';
import portStyles from '../../styles/PortfolioContainer.module.css'


export const Header = () => {
  return (
    <>
    <div className={portStyles.home_container}>
    <PortfolioContainer/>
    <HomeFooter/>
    </div>
    </>
  )
}