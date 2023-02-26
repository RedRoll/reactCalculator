import { useState } from "react";
import { Input, Text, Box} from "@chakra-ui/react"; 

function InputCalc(props) {
    const [result, setResult] = useState('') // новое отдельное состояние для данного компонента(поля input)(не путать с предыдущим состоянием в другом компонененте. Так же не путать данные названия переменных для состояния с другим компонентом - данные имена переменных хоть и одинаковы, но отоносятся только к данному компоненту (т.е. данной функции))

    const [countInput, setCountInput] = useState('') // состояния для input

    function updateResult (event) {

        const validNumbers = /[0-9]/
        // далее проверка последнего знака в input (в сountBtn похожая)
        const lastNumber = event.target.value[event.target.value.length - 2]
        // свойство value может устанавливать или возвращать значение атрибута, в данном случае возвращает значение input


        if (!validNumbers.test(lastNumber) && !validNumbers.test(event.nativeEvent.data) && event.nativeEvent.data != null ) return 
        // условие if использующее оператор "&&" выполниться только в том случае, если все условия будут выдавать true. Если хоть одно условие выдает false, то все выражение будет оцениваться как false и в свою очередь данное условие выполняться не будет.

        // null - значение отсутствия обьекта или отсутствие значения для которго внутри обьекта определен ключ. В данном случае условие event.nativeEvent.data != null  нужно для того, чтобы можно было стереть оставшиеся два символа с input (чтобы функция не останавливалась при двух первых условиях, которые будут выдавать true и соответственно прекращать работу функции)

        if (validNumbers.test(event.nativeEvent.data))  setResult(eval(event.target.value))
        setCountInput(event.target.value)



        
        // console.log(!validNumbers.test(lastNumber), !validNumbers.test(event.nativeEvent.data), event.nativeEvent.data != null)
       
        // console.log(event.target.value[event.target.value.length - 3])
    }

    

    return (
        <Box>
            <Input value={countInput} onInput={ event => {updateResult(event)}} />  
            <Text>{result}</Text>
        </Box>
    )
}

console.log(Input.value)

// Событие onInput срабатывает когда элемент получает пользовательський ввод (при изменении значения элемента)

// Тоесть событие отрабатывает имеено в момент изменения(в момент нажатия кнопки/попытки ввода символа!!!)



export default InputCalc