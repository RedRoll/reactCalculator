import { Button } from "@chakra-ui/react"

function CountBtns (props) {
    const expressions = /\*|\+|\/|\-| /

    const lastNumber = props.data[props.data.length - 1]
   

    function checkExpression () {
        if(expressions.test(lastNumber) || props.data === '0')   
        return 
        props.onClick(props.data + props.expression)
    }

    // || - оператор " или "
    
    return (
        <Button onClick={() => {
            console.log("последний символ соответствует expressions ?")
            console.log(/\*|\+|\/|\-| /.test(lastNumber))
            console.log("data = 0 ?")
            console.log(props.data === '0')
            checkExpression()
        }}>{props.expression}</Button>
    )
}

export default CountBtns