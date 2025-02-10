
import Capa from "../../assets/Tela Login/imagem tela de login.png"
import Logo from "../../assets/Tela Login/logo-ws.png"
import styles from "./Login.module.scss" // importando o componente de estilização do Login


function Login(){
    return(
    <main>
        <section className={styles.containerFoto}>
            <img src={Capa} alt="Foto de uma navio cargueiro"/>
        </section>

        <section className={styles.formWapper}>
            <div className={styles.boxLogo}>
            <img src={Logo} alt="logo da wilson sons"/>

            <h1>Boas Vindas ao Novo Portal SISPAR</h1>

            <p>Sistema de Emissão de Boletos e Parcelamento</p>
            </div>
            

           <form>
             <input type="email" name="email" id="email" placeholder="Email" />

             <input type="password" name="password" id="password"  placeholder="Senha"/>

             <p className={styles.forgotPassword} >Esqueci minha senha</p>

             <div className= {styles.boxButton}>
               <button className={styles.buttonPrimary} >Entrar</button>
               <button className={styles.buttonSecondary} >Criar Conta</button>
             </div>
           
           </form>
        </section>
   </main>

        
    );
}
export default Login;