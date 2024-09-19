import Link from "next/link";

export default function Rodape() {
    return (
        <footer>
            <p>Desenvolvido por <Link href="https://github.com/jenniesuzuki">Jennifer</Link></p>
        </footer>
    )
}

// Navegação interna deve ser realizada através de componentes <Link href="#">TARGET</Link> do pacote next/link.
// Caso haja links externos utilize a tag <a>.