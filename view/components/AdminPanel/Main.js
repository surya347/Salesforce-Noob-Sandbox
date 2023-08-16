import { FaBlackTie ,FaAppStore,FaHandHoldingUsd,FaCode} from "react-icons/fa";
import { HiThumbUp } from "react-icons/hi";
import UsersDetailsCard from './UsersDetailsCard';


const Main = (props) => { 

    const userNumber = props.data[1];
    const sourceCodeNumber = props.data[2];
    const recommendationsNumber = props.data[3];
    const questionNumbers = props.data[4];
    
    
    return (
        <>
        <main>
            <div className="main__container">
                <div className="main__title"> 
                    <img src='/messi.jpg' alt="hello"/>
                    <div className="main__greeting">
                        <h1>Hello NOOB coders</h1>
                        <p>Welcom to your Admin dashboard</p>
                    </div>
            </div>
            
            <div className="main__cards">
                <div className="card">
                    <i ><FaBlackTie/></i>
                    <div className="card_inner">
                        <p className="text_primary-p">Number Of Users</p>
                        <span className="font-bold text-title">{userNumber}</span>
                </div>
                </div>

                <div className="card">
                    <i><FaCode/></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Number Of Source Code</p>
                        <span className="font-bold text-title">{sourceCodeNumber}</span>
                    </div>
                </div>

                <div className="card">
                    <i><FaAppStore/></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Number Of Questions</p>
                        <span className="font-bold text-title">{questionNumbers}</span>
                    </div>
                </div>

                <div className="card">
                    <i ><HiThumbUp/></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Number Of Recommendations</p>
                        <span className="font-bold text-title">{recommendationsNumber}</span>
                    </div>
                </div>

                <div className="card">
                    <i ><HiThumbUp/></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Number Of Blogs</p>
                        <span className="font-bold text-title">5</span>
                    </div>
                </div>


            </div>

            <div className="charts">
                <div className="charts__left">
                    <div className="charts__left__title">
                        <div>
                            <h1>Daily Reports</h1>
                            <p>Cupertino, California, USA</p>
                        </div>
                        <i className="fa fa-usd"><FaHandHoldingUsd/></i>
                    </div>
                   <UsersDetailsCard/> 
                </div>

                <div className="charts__right">
                    <div className="charts__right__title">
                        <div>
                            <h1>Stats</h1>
                            <p>Cupertino, California, USA</p>
                        </div>
                        <i className="fa fa-usd"><FaHandHoldingUsd/></i>
                    </div>

                    <div className="charts__right__cards">
                        <div className="card1">
                            <h1>Income</h1>
                           <p>$75,300</p>
                        </div>

                        <div className="card2">
                            <h1>Sales</h1>
                           <p>300</p>
                        </div>

                        <div className="card3">
                            <h1>Users</h1>
                           <p>75</p>
                        </div>

                        <div className="card4">
                            <h1>Orders</h1>
                           <p>750</p>
                        </div>
                    </div>
                   
                </div>



            </div>

            </div>
            
        </main>
        <style jsx>
            {`
            main{
                background: #f3f4f6;
                grid-area: main;
                overflow-y: auto;
            }
            
            .main__container{
                padding: 20px 35px;
            
            }
            
            .main__title{
                display: flex;
                align-items: center;
            }
            
            .main__title> img{
            max-height: 100px;
            object-fit: contain;
            margin-right: 20px;
            }
            
            .main__greeting >h1 {
                font-size: 24px;
                color: #2e4a66;
                margin-bottom: 5px;
            }
            
            .main__greeting > p{
                font-size: 14px;
                font-weight: 700;
                color: #a5aaad;
            
            }
            
            .main__cards{
                display: grid;
                grid-template-columns: 1fr 1fr ;
                gap: 30px;
                margin: 20px 0;
            }
            
            .card{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                height: 70px;
                padding: 25px;
                border-radius: 5px;
                background: #ffffff;
                box-shadow: 5px 5px 13px #ededed , -5px -5px 13px #ffffff;
            }
            
            .card_inner{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            
            .card_inner>span {
                    font-size: 25px;
            
            }
            
            .charts{
                display: grid;
                grid-template-columns: 1fr 1fr ;
                gap: 30px;
                margin-top: 50px;
            }
            
            .charts__left{
                padding: 25px;
            border-radius: 5px;
            background: #ffffff;
            box-shadow: 5px 5px 13px #ededed , -5px -5px 13px #ffffff;
            }
            
            .charts__left__title{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            
            .charts__left__title>div >h1{
                font-size: 24px;
                color: #2e4a66;
                margin-bottom: 5px;
            }
            
            .charts__left__title>div >p{
                font-size: 14px;
                font-weight: 700;
                color: #a5aaad;
            }
            
            .charts__left__title> i {
                color: #ffffff;
                font-size: 20px;
                background: #ffc100;
                border-radius: 200px 0px 200px 200px;
                -moz-border-radius:200px 0px 200px 200px;
                -webkit-border-radius:200px 0px 200px 200px;
                border: 0px solid #000000;
                padding: 15px;
            }
            
            .charts__right{
                padding: 25px;
                border-radius: 5px;
                background: #ffffff;
                box-shadow: 5px 5px 13px #ededed , -5px -5px 13px #ffffff;
            }
            
            .charts__right__title{
            display: flex;
                align-items: center;
                justify-content: space-between;
            }
            
            
            .charts__right__title>div >h1{
                font-size: 24px;
                color: #2e4a66;
                margin-bottom: 5px;
            }
            
            .charts__right__title>div >p{
                font-size: 14px;
                font-weight: 700;
                color: #a5aaad;
            }
            
            .charts__right__title> i {
                color: #ffffff;
                font-size: 20px;
                background: #39447a;
                border-radius: 200px 0px 200px 200px;
                border: 0px solid #000000;
                padding: 15px;
            }
            
            .charts__right__cards{
                display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-top: 30px;
            }
            
            .card1{
                background: #d1ecf1;
                color: #35a4ba;
                text-align: center;
                padding: 25px;
                border-radius: 5px;
                font-size: 14px;
            }
            
            .card2{
                background: #d2f9ee;
                color: #38e1b0;
                text-align: center;
                padding: 25px;
                border-radius: 5px;
                font-size: 14px;
            }
            
            .card3{
                background: #d6d8d9;
                color: #3a3e41;
                text-align: center;
                padding: 25px;
                border-radius: 5px;
                font-size: 14px;
            }
            
            .card4{
                background: #fddcdf;
                color: #f65a6f;
                text-align: center;
                padding: 25px;
                border-radius: 5px;
                font-size: 14px;
            }
            
            @media only screen and (max-width:978px){
                .main__cards{
                    grid-template-columns: 1fr;
                    gap: 10px;
                    margin-bottom: 0;
                }
            
                .charts{
                    grid-template-columns: 1fr;
                    margin-top: 30px;
                }
                
            }
            `}
        </style>
        </>
    )
}

export default Main;
