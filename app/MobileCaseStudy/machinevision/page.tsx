'use client';
import Footer from "../../components/footer";
import Health from "../../components/health";
import MachineVision from "../../components/machineVision";
import Tab from "../../components/tab";
import TopnavBar from "../../components/topnavbar";

const Page = () => {
    return <div>
        <TopnavBar/>
        {/* <div className="pt-14">
            <Tab />
        </div> */}
        <div className="pt-0">
            <MachineVision />
        </div>
    </div>
};



export default Page;