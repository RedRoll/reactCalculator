import { useState } from "react";
import { Input, Text, Box} from "@chakra-ui/react"; 

function InputCalc(props) {
    const [result, setResult] = useState('') // новое отдельное состояние для данного компонента(поля input)(не путать с предыдущим состоянием в другом компонененте. Так же не путать данные названия переменных для состояния с другим компонентом - данные имена переменных хоть и одинаковы, но отоносятся только к данному компоненту (т.е. данной функции))

    function updateResult (event) {
        const validSymbols = /[0-9]|\)|/
        // далее проверка последнего знака в input (в сountBtn похожая)
        const lastSymbol = event.target.value[event.target.value.length -1]
        // свойство value может устанавливать или возвращать значение атрибута, в данном случае возвращает значение input

        if (!validSymbols.test(lastSymbol)) return // если возвратит true - остановка функции (return). В данном случае функция остановиться, если не найдет совпадения с регуляркой написанной выше(! - оператор "нет").

        else setResult(eval(event.target.value))
    }

    return (
        <Box>
            <Input onInput={ event => {updateResult(event)}} />  
            <Text>{result}</Text>
        </Box>
    )
}

// Событие onInput срабатывает когда элемент получает пользовательський ввод (при изменении значения элемента)


// updateCounts будет написана... не боись

export default InputCalc