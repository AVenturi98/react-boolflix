import Search from '../Search'
import st from './Header.module.css'

export default function Header() {

    return (
        <div className={st.navBar}>
            <h1 className={st.logo}>BOOLFLIX</h1>
            <Search className={st.navSearch} />
        </div>
    )
}