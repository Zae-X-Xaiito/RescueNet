import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Map as MapIcon, ShieldAlert, Settings, Activity } from 'lucide-react';
import clsx from 'clsx';
import styles from './Sidebar.module.css';

const NAV_ITEMS = [
    { icon: LayoutDashboard, label: 'Dispatch', path: '/' },
    { icon: MapIcon, label: 'Live Map', path: '/map' },
    { icon: Activity, label: 'Monitoring', path: '/admin' },
    { icon: ShieldAlert, label: 'Incidents', path: '/incidents' },
    { icon: Settings, label: 'Settings', path: '/settings' },
];

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <ShieldAlert className="text-critical" size={32} />
                <span className={styles.brand}>RescueNet</span>
            </div>

            <nav className={styles.nav}>
                {NAV_ITEMS.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            clsx(styles.link, isActive && styles.active)
                        }
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className={styles.footer}>
                <div className={styles.statusIndicator}>
                    <span className={styles.dot} />
                    System Online
                </div>
            </div>
        </aside>
    );
};
