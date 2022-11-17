import MainColumn from "./MainColumn"
import SideBar from "./SideBar"


export default function Corpo() {
    return (
        <div className="Corpo">
            <div className="main">
                <MainColumn />
                <SideBar />
            </div>
        </div>
    )
}