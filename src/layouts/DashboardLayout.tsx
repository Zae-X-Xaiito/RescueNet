import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import styles from './DashboardLayout.module.css';

export const DashboardLayout = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};
