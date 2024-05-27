import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { Button, Card, Headline } from 'react-native-paper'
import { formatearFecha, formatearFechaHora } from '../helpers'
import { AuthContext } from '../context/AuthContext'

const DetalleCita = ({item}) => {
const {apellidoDoctor,apellidoPaciente,emailPaciente, nombreDoctor,end,nombrePaciente,start }=item
const {infoUsuariObtenida} = useContext(AuthContext)
const {isDoctor,isPaciente}=infoUsuariObtenida

  return (
     <Card mode='contained'>
    <Card.Title title="Información de la cita" />
    <Card.Content>
     <Text>{`Fecha: ${formatearFecha(start)}`}</Text>
     <Text>{`Hora: ${formatearFechaHora(start)}`}</Text>
     <Text>Lugar: detrás del Estadio del Aucas, Apuela S28-180 Y, Quito 170606</Text>
     {isPaciente &&(<Text>{`Doctor: ${nombreDoctor} ${apellidoDoctor}`}</Text>)}
     {isDoctor &&(<Text>{`Paciente: ${nombrePaciente} ${apellidoPaciente}`}</Text>)}
     {isDoctor &&(<Text>{`Correo electrónico: ${emailPaciente}`}</Text>)}      
    </Card.Content>
    <Card.Actions>
      <Button>Cancelar Cita</Button>
    </Card.Actions>
  </Card>
  )
}

export default DetalleCita