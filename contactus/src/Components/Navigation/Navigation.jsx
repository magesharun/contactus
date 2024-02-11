import styles from '../Navigation/Navigation.module.css'

const Navigation =()=>{
    console.log(styles);
    return (
       <nav className={'${styles.navigation}container '}>
        <div className="logo">
            <img src="src/assets/images/logo.png" alt="logo"></img>
        </div>
        <ul>
            <li href="#">Home</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
           
        </ul>
       </nav>
    )
}
export default Navigation;