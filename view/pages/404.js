import { useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import errorStyle from '../styles/404.module.css';

const ErrorPage = () => {

    const router = useRouter();

    const redirectToHome = () =>{
        router.push('/');
    }

    useEffect(() => {
        setTimeout(() =>{
            router.push('/');
        },5000)
    }, [])
    

  return (
    <>
    <Navbar/>
    <section className={errorStyle.page_404}>
	<div className="container">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-10 col-sm-offset-1  text-center">
		<div className={errorStyle.four_zero_four_bg}>
			<h1 className="text-center ">404</h1>
		</div>
		<div className={errorStyle.contant_box_404}>
		<h3 className="h2">
		    Look like you're lost
		</h3>
		
		<p>Sorry, Page doesn't exist</p>
		
		<a href="/" className={errorStyle.link_404}>Go to Home</a>
        </div>
        </div>
        </div>
        </div>
        </div>
    </section>
    
    </>
  )
}

export default ErrorPage