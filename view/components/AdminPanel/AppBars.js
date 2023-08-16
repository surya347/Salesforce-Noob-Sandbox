import Navbar from "../Navbar";
import Tabs from "./Tabs";


const AppBars = (props) => {
    const dbData = props.data;

  return (
    <>
    <Navbar/>
    <Tabs data={dbData}/>

    </>
  )
}

export default AppBars