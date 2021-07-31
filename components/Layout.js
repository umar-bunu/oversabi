import NavigationBar from "./NavigationBar"
import Footer from "./Footer"
const Layout = ({ children }) => {
    return (
        <div>
           
            { children }
            <Footer />
            <NavigationBar />
        </div>
    );
}
 
export default Layout;