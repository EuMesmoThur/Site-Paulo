import Alunos from "./componentes/alunos"
import Texto from "./componentes/texto"
import Footer from "./componentes/footer"

function App(){
    return (
        <div class="container">
            <Texto/>
            <Alunos codigo="01" name="Renato Geografia" tel="1799832-0971" end="Rua Muito Irada, 123" curso="Magia Muito Dahora"/>
            <Alunos codigo="02" name="Bryan Belarmino" tel="16 99145-9567" end="Rua do Bryan, 777" curso="Alquimía/Poções"/>
            <div class="confira">Confira nossos outros cursos</div>

            <Footer/>
        </div>
    )
}

export default App