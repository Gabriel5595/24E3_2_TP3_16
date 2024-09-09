import StatusBadge from "../../components/StatusBadge"
import styles from "./home.module.css"

export default function Home() {
    return (
        <div>
            <StatusBadge status="active"/>
            <StatusBadge status="inactive"/>
            <StatusBadge status="pending"/>
            <StatusBadge />
        </div>
    )
}