import Head from 'next/head'
import { config } from '../../config'

const Header = () => (<>Header</>)
const Sidebar = () => (<>Sidebar</>)

const MainLayout = ({ children }) => (<>
    
    <div className="main-container">
        <Header />

        <div className="content-wrapper">
            <Sidebar />
            <div className="content">
                {children}
            </div>
        </div>

        <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
    `}</style>
    </div>
</>
);

export default MainLayout;