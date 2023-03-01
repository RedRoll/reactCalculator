import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

import ClickCalc from "./ClickCalc";
import InputCalc from "./InputCalc";

function Calculator () {
    const[calcType, setCalcType] = useState('ClickCalc')
    // состояние для типа калькулятора

    let calculator
    // переменная калькулятор будет хранить в себе компонент с нужным режимом калькулятора (input либо обычный, на button)
    
    switch (calcType) {
        case 'ClickCalc': calculator = <ClickCalc />
        break
        case 'InputCalc': calculator = <InputCalc />
        break
        default:
            calculator = 'ClickCalc'
    }
    // switch - это управляющая структура, которая позволяет выполнять различные блоки кода в зависимости от значения выражения (в данном случае рендерить различные компоненты в зависимости от текущего значения). Даллее cоздается кнопка Button, которая меняет состояние компонента Calculator (например на Input), это видет switch и с помощью своих инструкций, сопосталяя значение calcType рендерит соответствующий компонет.
    function calcTypeChange () {
        calcType === 'ClickCalc' ? setCalcType ('InputCalc') : setCalcType ('ClickCalc')
    }
    // функция изменения состояния UseState компонента calculator


    return(
        <Box display='flex' flexDirection='column' justifyContent='center' p='10px' gap='10px'>
            <Button onClick={calcTypeChange}>CHANGE MODE</Button>
            <Box>
            {calculator}
            </Box>
        </Box>
    )
    
}


export default Calculator