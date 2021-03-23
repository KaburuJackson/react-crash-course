import PropTypes from 'prop-types'
import Button from './Button'



const Header = ({title,  onAdd}) => {
     return (
        <header className = 'header'>
            <h1 >{title}</h1>
        <Button color = 'blue'
         text = 'Add'
         onClick={onAdd}      // BUTTON DOES NOT TOGGLE THE INPUT FORM
         />
       
        </header>
       
    )
}
Header.defaultProps = {
    title:'TASK TRACKER'
}
Header.propTypes = {
    title:PropTypes.string.isRequired

}
// const headingStyle = {
//     color:'yellow',
//     backgroundColor:'black'
// }
export default Header
