import "./burger-menu.scss";

const BurgerMenu = ({ isOpen }) => {

    const menuClassName = isOpen ? "burger-menu--open" : "burger-menu";
    return (
        <div className={menuClassName}>
            <div className="line"></div>
            <ul className="list">

                <li className="list__item-language">
                    <span>Укр</span>
                    <span>Рус</span>
                </li>

                <li className="list__item">ГЛАВНАЯ</li>
                <li className="list__item">ПРОЕКТЫ</li>
                <li className="list__item">УСЛУГИ</li>
                <li className="list__item">О НАС</li>
                <li className="list__item">НОВОСТИ</li>
                <li className="list__item">FAQ</li>
                <li className="list__item">КОНТАКТЫ</li>
            </ul>
        </div>
    );
};

export default BurgerMenu;
