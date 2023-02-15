import './App.css';

import { useState } from 'react'; // импорт hook`a состояния

import { Box, Text, Button } from '@chakra-ui/react'  // импорт тегов из библиотеки chakra-ui (предвадительно эту библиотеку нужно установить в проект)

// function App() {
//   return (
//     <div className="App"> 
//       <Box bg='tomato'>
//         <Text fontSize="2xl" >Tomato</Text>
//       </Box>
//     </div>
//   ); --------------пример использования тегов/стилей для них из chakra-ui
// }

// функция (елемент инфтерфейса), для отрисовки цифер


// Array.from() - функция, которая создает новый массив на основе итерируемого(set/map) либо массивоподобного(строка/обьект) обьекта. 

// метод .keys() возвращает новый итератор(итератор - это следующий элемент последовательности) массива, содержащий ключи каждого индекса в массиве

// метод .map() создает новый массив с результатом вызова указанной в нем функции для каждого элемента (перебирает каждый элемент массива с помощью функции)

function Numbers (props) {

  const nums = Array.from(Array(10).keys()).map(
    number => {
      return <Button w="40px" h="40px" margin="4px" key={number} onClick = { event => {
        if(props.data !== '0')props.onClick(props.data + event.target.innerHTML)
        else props.onClick(event.target.innerHTML)
      }   // условие для 0 (который будет показыватся по умолчанию в поле ввода). Если происходит нажатие по кнопке 0, то массив count не примет в себя еще один ноль (00), а просто заменяет значение 0 на текущую нажатую цифру (нажатый 0), либо это может быть другая цифра, например 2, тогда при начальном значении count 0 сработает второе условие и count изменит свое значение на 2.
      }>
        {number}
      </Button>
    }
  )
  // map() возвращает Button(10 кнопок), которые можно отобразить в интерфейсе сделав финишный возврат(return), того что нам нужно из компонента(функции) Numbers
  return (
    <Box display="flex" flexWrap="wrap" w="75%"> {nums} </Box>
  )
}


// функция для кнопок сложения/деления и т.д. с проверкой (чтобы не возможно было ввести два + или - или что-то в этом роде)



function CountButton (props) {
  const expressions = /\+|\-|\/|\*| / //регулярное выражение для символов которые не можно будет ввести два раза подряд
  // Регулярное выражение - это шаблон, который используется для сопоставления последовательностей символов в строках (в JS это обьект)


  
  // ОБРАТИ ВНИМАНИЕ !!!!!! 
  // Если в регулярном выражении после первого слеша "/" поставить пробел (пример: / \+|\-|/), то при проверке на совпадение с помощью метода .test()код будет работать но не правильно, с ошибкой(проверка будет проходить, но функция будет выполнятся не правильно)

  // ПЕРЕД ПОСЛЕДНИМ СЛЕШЕМ В РЕГУЛЯРКЕ НУЖНО ПОСТАВИТЬ ПРОБЕЛ ИБО РАБОТАТЬ ТОЖЕ НЕ БУДЕТ


  const lastSymbol = props.data[props.data.length - 1]

  // переменная lastSymbol будет показывать последний символ в массиве count

  function checkExpressionType () {
    if (expressions.test(lastSymbol)) return // ФУНКЦИЯ ВСЕГДА ДОЛЖНА ВОЗВРАЩАТЬ ЧТО-ТО (RETURN) ИЛИ ОНА БУДЕТ БЕЗСМЫСЛЕННА, не будет давать никакого результата
    props.onClick(props.data + props.expression)
  }

  // функция checkExpressionType предотвращает возможность ввести два ++ или два -- подряд (и другие математические операторы), два таких символа подряд сломают логику функции Eval и она ничего не вычислит. Происходит проверка переменной data(она же counts), ее последнего символа с помощью метода .test(), который выполняет поиск и сопоставляет выше написанное регулярное выражение с указанной строкой(ищет соответствия), в данном случае сравнивает с последним символом переменной data(counts). Если совпадение не булет найдено(возвратит false), то можно будет ввести, например + (если соответствие будет найдено, то возвратит true)



  return (
    <Button onClick={() => {
      checkExpressionType()
    }} >{props.expression}</Button>
  )
}

// props(пропсы) - это ВХОДНЫЕ данные react-компонета, передаваемые от родительского компонента к дочернему (пропсы предназначены только для чтения)



// Так как функция Numbers это компонент, этот компонент можно добавить в другую функцию, чтобы отрисовать его в интерфейсе. В данном случае пользователю будет видно содердимое App, а содержимое Numbers будет скрыто.

function App() {

  const [counts, setCounts] = useState('0') // состояние для подсчета (левая сторона) counts - это текущее состояния(в данном случае стартовое состояние обозначено как 0), а setCounts это функция, которая изменяет это текущеее состояние
  const [result, setResult] = useState('')  // состояния для результата подсчета (правая сторона)

  function applyExpression (countedNumber) {
    setCounts(countedNumber)
    setResult(eval(counts))
  }

 

  console.log(/\+|\-|\/|\*| /.test(counts[counts.length -1]))


  // функция eval() выполняет js-код представленный строкой (например суммирует строку из 1+1, тоесть выводит результат - 2)
  return (
    <div className='App'>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" h="100vh">

        <Box display="flex" gap="10px" flexDirection="column" alignItems="center" w="200px">

          <Box display="flex" justifyContent="between" w="100%" borderRadius="8px" border="2px" borderColor="red.100" bg="gray.50">

            <Text display="flex" justifyContent="start" alignItems="center"  w="100%" h="38px" px="3px" >
              {counts}
            </Text>

            <Text display="flex" w="fit-content" h="38px" textColor="red.400" px="3px" alignItems="center"> 
              {result} 
            </Text>

          </Box>

          <Box display="flex" flexDirection="row" justifyContent="center" gap="8px" w="100%">
            <CountButton data={counts} expression={'+'} onClick={applyExpression} />
            <CountButton data={counts} expression={'-'} onClick={applyExpression} />
            <CountButton data={counts} expression={'*'} onClick={applyExpression} />
            <CountButton data={counts} expression={'/'} onClick={applyExpression} />
            <Button bg="tomato" onClick = {() => {setResult(eval(counts))}}> = </Button>
          </Box>
          
          
          <Numbers data={counts} onClick={setCounts}/> 
          
        </Box>
      </Box>
    </div>
  )
}
// data и onClick - это пропсы(входные данные, которые будут использоваться в дочернем компоненте)

export default App

// props data в компоненте обозначает передаваемые данные для компонента(в данном случает передается текущее состояние подсчета - count)
// другой props это функция клика, которая при клике на какую нибуть кнопку вызывает изменение count(функция изменения состояния setCount в useState)
// props`ы - это вхожные данные react-компонентов передаваемые от родительського компонента дочернему компоненту


// если не работает какой-то тег из chakra, значит ты забыл его импортировать

// Чтобы выключить локальный сервер (в node terminal) нажми ctrk + c, потом y и enter

