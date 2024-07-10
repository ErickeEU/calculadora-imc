import { useState, useEffect } from 'react'
import styles from './main.module.css'

const func = ({imc}) => {

    const array = ['Menor que 18,5:	Baixo peso', 'De 18,5 a 24,9:	Peso normal', 'De 25 a 29,9:	Sobrepeso', 'De 30 a 34,9:	Obesidade grau I', 'De 35 a 39.9:	Obesidade grau II', 'Igual ou maior que 40:	Obesidade grau III']
    const [classes, setClasses] = useState(['item', 'item', 'item', 'item', 'item', 'item'])

    // const [cla, setCla] = useState('none')

    function setArrayClass(num) {
        let newarray = classes.map((item,) =>{
            item = 'item'
            return item
        })

        setClasses(() => {
            newarray[num] = 'highlight'
            return newarray
        })
        console.log(classes)
    }

    function changeColor(imc) {
        switch (true) {
            case (imc<18.5) :
                // setCla('under')
                setArrayClass(0)
                break
            case (imc > 18.4 && imc < 25) :
                // setCla('normal')
                setArrayClass(1)
                break
            case (imc > 24.9 && imc < 30) :
                // setCla('overweight')
                setArrayClass(2)
                break
            case (imc > 29.9 && imc < 35): 
                // setCla('obesity1')
                setArrayClass(3)
                break
            case (imc > 34.9 && imc < 40): 
                // setCla('obesity2')
                setArrayClass(4)
                break
            case (imc >= 40): 
                // setCla('obesity3')
                setArrayClass(5)
                break
            default :
                // setCla('none')
                setArrayClass(NaN)
    }
}

    useEffect(()=>{
        changeColor(imc)
    }, [imc])

    return (
        <>
        {/* <table cellSpacing={0} className={styles.table}>
            <thead className={styles.thead}>
                <tr>
                    <th>IMC (kg/m²)</th>
                    <th>Classificação</th>
                </tr>
            </thead>
            <tbody className={styles[cla]}>
                <tr className={styles.und}>
                    <td>Menor que 18,5</td>
                    <td>Baixo peso</td>
                </tr>
                <tr className={styles.norm}>
                    <td>De 18,5 a 24,9</td>
                    <td>Peso normal</td>
                </tr>
                <tr className={styles.ovr}>
                    <td>De 25 a 29,9</td>
                    <td>Sobrepeso</td>
                </tr>
                <tr className={styles.obs1}>
                    <td>De 30 a 34,9</td>
                    <td>Obesidade grau I</td>
                </tr>
                <tr className={styles.obs2}>
                    <td>De 35 a 39.9</td>
                    <td>Obesidade grau II</td>
                </tr>
                <tr className={styles.obs3}>
                    <td>Igual ou maior que 40</td>
                    <td>Obesidade grau III</td>
                </tr>
            </tbody>
        </table> */}
        <div className={styles.table}>
            <ul className={styles.listhead}>
                <li>
                    <p>IMC (kg/m²) Classificação</p>
                </li>
            </ul>
            <ul>
                {array.map((item, index) => (
                    <>
                    <li className={styles[classes[index]]}>
                        <p>{item}</p>
                    </li>
                    </>
                ))}
            </ul>
        </div>
        </>
    )
}

export default func