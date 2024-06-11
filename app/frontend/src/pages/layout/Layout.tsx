import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";
import { BriefcaseMedicalFilled } from "@fluentui/react-icons";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <BriefcaseMedicalFilled fontSize={"50px"} primaryFill={"rgba(9, 9, 9, 0.8)"} aria-hidden="true" aria-label="Chat logo" />
                        <h2 className={styles.headerTitle}>Caddie Healthcare</h2>
                    </Link>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
