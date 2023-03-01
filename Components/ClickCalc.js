import { Text, Box, Button } from "@chakra-ui/react"
import { useState } from "react"

function ClickCalk () {

    const [counts, setCounts] = useState('0')
    const [result, setResult] = useState('')
  
    function applyExpression (countedSymbols) {
      setCounts(countedSymbols)
      setResult(eval(counts))
    }
    function clear () {
      setCounts('0')
      setResult('')
    }

    function Btns (props) {

        const numbers = Array.from(Array(10).keys()).map(
            number => {
    
                return <Button onClick={ event => {
                    if(props.data !== '0') props.onClick(props.data + event.target.innerHTML)
                    else props.onClick(event.target.innerHTML)
                } } key={number} h="40px" w="43px">{number}</Button>
                
            }
        )
        
    
        return (
            <Box display="flex" justifyContent="start" flexWrap="wrap" w="158px" gap="6px">
                {numbers}
            </Box>
        )
        
    }

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

    return (
        

        // <Box className='bodyCalculator' display="flex" h="100vh" alignItems="center" justifyContent="center">
  
          <Box className='calculator' borderRadius="5px" border="1px" borderColor="orange.200" display="flex" flexDirection="column" alignItems="center" gap="10px" px="7px" py="10px" >
  
            
  
            <Box className='resultLine' display="flex" w="200px" border="1px" borderColor="orange" justifyContent="space-between" marginTop="5px" borderRadius="6px" bgColor="red.200">
              <Text className='countInfo' px="3px">{counts}</Text>
              <Text className='result' textColor="white" px="3px">{result}</Text>
            </Box>
  
            <Box className='btnsInside' display="flex" alignItems="start" flexDirection="row">
  
            <Box>
              <Btns data={counts} onClick={setCounts} />
              <Button display="flex" justifyContent="start" marginTop="6px" onClick={clear} bgColor="green.100">clear</Button>
            </Box>
  
            <Box className='countBtns' display="flex" flexDirection="column-reverse" gap="6px">
              <CountBtns id="bt" data={counts} expression={'*'} onClick={applyExpression} />
              <CountBtns data={counts} expression={'/'} onClick={applyExpression} />
              <CountBtns data={counts} expression={'+'} onClick={applyExpression} />
              <CountBtns data={counts} expression={'-'} onClick={applyExpression} />
  
              <Button onClick = {() => {setResult(eval(counts))}} bgColor="tomato">=</Button>
            </Box>
  
            </Box>
  
          </Box>
  
        // </Box>
  
      
    )

}

export default ClickCalk