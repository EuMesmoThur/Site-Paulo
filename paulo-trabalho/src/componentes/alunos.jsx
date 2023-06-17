function Alunos(props) {
    return (
        <div className="alunos">
            <section>
                <p>
                    Código {props.codigo}
                </p>
                <p>
                    Nome {props.name}
                </p>
                <p>
                    Telefone {props.tel}
                </p>
                <p>
                    Endereço {props.end}
                </p>
                <p>
                    Curso {props.curso}
                </p>
            </section>
        </div>
    )
}

export default Alunos