import { Checkbox } from "rsuite"
import PropTypes from "prop-types"

const Check = (props) => {

  return (
    <div>
      <Checkbox style={{...props.style,color : "black", fontWeight : "bold"}} ref={props.Ref}>{props.text}</Checkbox>
    </div>
  )
}

Check.propTypes = {
  text : PropTypes.string,
  style : PropTypes.object,
}

export default Check
