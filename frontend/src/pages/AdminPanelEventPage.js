import AdminNavBar from "../components/AdminNavBar";
import AdminEventCard from "../components/AdminEventCard";

function AdminPanelEventPage(){
    return(
        <div>

            <AdminNavBar/>

            <AdminEventCard name={"name"} description={"description"} location={"location"} type={"type"} datetime={"datetime"}/>
        </div>
    )
}
export default AdminPanelEventPage;