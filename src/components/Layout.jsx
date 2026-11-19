import {Outlet} from 'react-router';
import Sidebar from './Sidebar';

export default function Layout() {
    return(
        <div className="d-flex min-vh-100 bg-light">
        <Sidebar />
            <main className="flex-grow-1">
        <Outlet />
        </main>
        </div>
    );
}