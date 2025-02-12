import styles from"./Reembolsos.module.scss"
import Home from "../../assets/Dashboard/Vector (1).png"
import Seta from "../../assets/Dashboard/Vector.png"
import Analises from "../../assets/Dashboard/Análises.png"
import Numero Analises from "../../assets/Dashboard/N-Análises.png"
import Numero Aprovados from "../../assets/Dashboard/N-Aprovados.png"
import Numero Rejeitados from "../../assets/Dashboard/N-Rejeitados.png"
import Numero Solicitados from "../../assets/Dashboard/N-Solicitados.png"
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png"
import Solicitar Historico from "../../assets/Dashboard/Solicitar - Histórico.png"
import Solicitar Reembolso from "../../assets/Dashboard/Solicitar - Reembolso.png"

function Reembolsos(){
    return(
    <div>
        <header>
                <img src="" alt="Casinha da Header" />
                <img src="" alt="setinha da Header" />

                <p>Reembolso</p>s
        </header>
        
    <main>
        <h1>Sistema de Reembolsos</h1>
            <p>Solicite novos pedidos de reembolsos, visualize soliciações em análise e todo o histórico.</p>

    <section className {styles.ContainerCards}>
        <article className={styles.Card1}>
            <img src={Analises} alt="" />
            <p> Solicitar Reembolsos</p>
        </article>

        <article className={styles.Card2}>
            <img src={} alt="" />
            <p> Verificar Análise</p>
        </article>
        <article className={styles.Card3}>
            <img src={Solicitar Historico} alt="" />
            <p> Historico</p>
        </article>



    </section>

    </main>
    </div>
    );
}
export default Reembolsos;