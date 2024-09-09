import styles from "./statusBadge.module.css"

export default function StatusBadge(props) {

    function getBadgeStyle(status) {
        switch (props.status) {
            case "active":
                return {
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    margin: '20px',
                    display: 'inline-block',
                };
            case 'inactive':
                return {
                    backgroundColor: 'gray',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    margin: '20px',
                    display: 'inline-block',
                };
            case 'pending':
                return {
                    backgroundColor: 'orange',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    margin: '20px',
                    display: 'inline-block',
                };
            default:
                return {
                    padding: '5px 10px',
                    borderRadius: '5px',
                    margin: '20px',
                    display: 'inline-block',
                };
        }
    }

    const statusText = props.status ? props.status.charAt(0).toUpperCase() + props.status.slice(1) : 'Desconhecido';

    return (
        <div className={styles.statusBadgeComponents}>
            <div style={getBadgeStyle(props.status)}>
                {statusText}
            </div>
        </div>
    )
}