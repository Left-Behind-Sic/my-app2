import css from './header.module.css'


const Header = () => {
    return (
        <header className={css.header}>
            <h1 className={css.h1}>
                Logo
            </h1>
        </header>
    );
}

export default Header;