import './App.css';

import { useState } from 'react';
import { Button, Box, Text } from '@chakra-ui/react';

import Btns from './Components/Btns';
import CountBtns from './Components/CountBtns';
import InputCalc from './Components/InputCalc';

function App() {

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


  return (
    <div className="App">

      <Box className='bodyCalculator' display="flex" h="100vh" alignItems="center" justifyContent="center">

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

      </Box>

    </div>
  );
}



export default App;
