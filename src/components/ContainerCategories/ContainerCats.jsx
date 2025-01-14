import Categories from "../Categories/Categories";
import styles from "./ContainerCats.module.css";

function ContainerCats() {
    return (
        <section className={styles.container}>
            <Categories />
        </section>
    );
}

export default ContainerCats;