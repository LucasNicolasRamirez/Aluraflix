import Categories from "../Categories/Categories";
import styles from "./ContainerCats.module.css";

function ContainerCats() {
    return (
        <section className={styles.container}>
                <div>
                    <Categories />
                </div>

        </section>
    );
}

export default ContainerCats;