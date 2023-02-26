import { Button, Box } from "@chakra-ui/react"

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
        <Box display="flex" justifyContent="start" flexWrap="wrap" w="158px" gap="6px">{numbers}
        </Box>
    )
    
}

export default Btns