import AdminEventCard from "../components/AdminEventCard";
import UserNavBar from "../components/UserNavBar";

function AdminPanelEventPage(){
    return(
        <div>

            <UserNavBar isAdmin/>

            <AdminEventCard name={"name"} description={"description"} location={"location"} type={"type"} datetime={"datetime"}/>
        </div>
    )
}
export default AdminPanelEventPage;