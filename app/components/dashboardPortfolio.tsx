import '../styles/styles.css';
import '../styles/mediaQuery.css';

export default function DashboardDetails(){
    return(
        <div className='dashboard'>
            <div className='pt-24 '><img src="veractLogo.jpg " className='w-40'/></div>
            <div className='menuDetails'>
                <div className='menuRowDetails'>
                    <div>icon</div>
                    <div>Manufacturing</div>
                </div>
                <div className='menuRowDetails'>
                    <div>icon</div>
                    <div>Wellness</div>
                </div>
                <div className='menuRowDetails'>
                    <div>icon</div>
                    <div>Sales</div>
                </div>
                <div className='menuRowDetails'>
                    <div>icon</div>
                    <div>Agri tech</div>
                </div>
                <div className='menuRowDetails'>
                    <div>icon</div>
                    <div>Hr tech</div>
                </div>
                <div className='menuRowDetails'>
                    <div>icon</div>
                    <div>Fin tech</div>
                </div>
            </div>
        </div>
    )
}