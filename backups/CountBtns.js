import { Button } from "@chakra-ui/react"

function CountBtns (props) {
    const expressions = /\*|\+|\/|\-| /

    const lastNumber = props.data[props.data.length - 1]
   

    function checkExpression () {
        if(expressions.test(lastNumber) || props.data === '0') 
        return 
        // если условие if выдает true(тоесть, последний символ совпадает с тем символом который прописан в регулярном выражении, то происходит остановка функции! ПУСТОЙ RETURN ПРЕКРАЩАЕТ РАБОТУ ФУНКЦИИ!!!!)
        else props.onClick(props.data + props.expression)
    }

    // || - оператор " или "
    
    return (
        <Button onClick={() => {
            checkExpression()
        }}>{props.expression}</Button>
    )
}

export default CountBtns