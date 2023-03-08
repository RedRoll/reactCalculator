import { useState, useEffect } from "react";
import { Input, Text, Box} from "@chakra-ui/react"; 

function InputCalc(props) {
    const [result, setResult] = useState('') // новое отдельное состояние для данного компонента(поля input)(не путать с предыдущим состоянием в другом компонененте. Так же не путать данные названия переменных для состояния с другим компонентом - данные имена переменных хоть и одинаковы, но отоносятся только к данному компоненту (т.е. данной функции))

    const [countInput, setCountInput] = useState('') // состояния для input

    useEffect(() => {
        document.querySelector('input').focus()
    },[])

    // Функция useEffect (hook react`a) выполняет побочные еффекты в функциональных компонентах. Побочные эффекты - это операции, влияющие на что-то выходящее за рамки компонента, например за изменение модели DOM. 
    // Hook useEffect принимает два аргумента - 1 это функция содеражащая побочный эффект 2 это необязаткльный массив зависимостей, определяющих, когда побочный эффект будет выполнен. Эсли массив зависимостей не указан, побочный эффект будет выполнен каждого рендера, если же он будет указан, то побочный эффект выполниться если одна из зависимостей измениться после рендеринга компонента.



    function updateResult (event) {

        const validNumbers = /[0-9]/
        // далее проверка последнего знака в input (в сountBtn похожая)
        const lastNumber = event.target.value[event.target.value.length - 2]
        // свойство value может устанавливать или возвращать значение атрибута, в данном случае возвращает значение input


        if (!validNumbers.test(lastNumber) && !validNumbers.test(event.nativeEvent.data) && event.nativeEvent.data != null ) return 
        // условие if использующее оператор "&&" выполниться только в том случае, если все условия будут выдавать true. Если хоть одно условие выдает false, то все выражение будет оцениваться как false и в свою очередь данное условие выполняться не будет.

        // (null в event = backspace)

        // свойство .nativeEvent обьекта event обеспечивает прямой доступ у собственному событию браузера (к event). Это свойство - 'nativeEvent' используется, когда нужно получить доступ к свойствам или методам, не допустимым для синтетического события (event = это синтетическое событие)

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

// console.log(Input.value)

// Событие onInput срабатывает когда элемент получает пользовательський ввод (при изменении значения элемента)

// Тоесть событие отрабатывает имеено в момент изменения(в момент нажатия кнопки/попытки ввода символа!!!)



export default InputCalc