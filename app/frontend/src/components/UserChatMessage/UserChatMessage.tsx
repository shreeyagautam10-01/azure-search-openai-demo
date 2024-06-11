import styles from "./UserChatMessage.module.css";

interface Props {
    message: string;
}

export const UserChatMessage = ({ message }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.message}>{message.replace(/[\u2070-\u2079]+/g, "")}</div>
        </div>
    );
};
