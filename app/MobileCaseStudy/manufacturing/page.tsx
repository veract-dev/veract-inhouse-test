'use client';
import Footer from "../../components/footer";
import Health from "../../components/health";
import Manufacturing from "../../components/manufacturing";
import Tab from "../../components/tab";
import TopnavBar from "../../components/topnavbar";

const Page = () => {
    return <div>
        <TopnavBar/>
        {/* <div className="pt-14">
            <Tab />
        </div> */}
        <div className="pt-0">
            <Manufacturing />
        </div>
    </div>
};



export default Page;