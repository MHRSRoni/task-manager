import PropTypes from "prop-types"
import { Button } from "rsuite"
const BlockButton = ({onClick, color, title}) => {

  return (
    <div>
      <Button type="submit" onClick={()=>onClick()} style={{backgroundColor : color}} appearance="primary" block>{title}</Button>
    </div>
  )
}

BlockButton.propTypes ={
    color : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
}

export default BlockButton
