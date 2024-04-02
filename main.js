/*
  // Objeto
  const participant = {
    name: 'João Guilherme',
    email: 'joaoguilherme2411@gmail.com',
    subscriptionDate: new Date(2024, 3, 2, 11, 53),
    checkInDate: new Date(2024, 3, 10, 17, 14)
  }
*/

// Array | Lista
let participants = [
  {
    name: 'João Guilherme',
    email: 'joaoguilherme2411@gmail.com',
    subscriptionDate: new Date(2022, 7, 12, 11, 53),
    checkInDate: new Date(2024, 3, 10, 17, 14)
  },
  {
    name: 'Maria Silva',
    email: 'mariasilva@example.com',
    subscriptionDate: new Date(2024, 2, 15, 9, 30),
    checkInDate: new Date(2024, 1, 2, 16, 45)
  },
  {
    name: 'Pedro Santos',
    email: 'pedrosantos@example.com',
    subscriptionDate: new Date(2024, 2, 20, 14, 10),
    checkInDate: new Date(2024, 4, 3, 22, 20)
  },
  {
    name: 'Ana Oliveira',
    email: 'anaoliveira@example.com',
    subscriptionDate: new Date(2024, 2, 25, 10, 20),
    checkInDate: new Date(2024, 3, 10, 17, 55)
  },
  {
    name: 'Lucas Almeida',
    email: 'lucasalmeida@example.com',
    subscriptionDate: new Date(2024, 3, 1, 13, 45),
    checkInDate: new Date(2024, 3, 10, 19, 30)
  },
  {
    name: 'Carla Costa',
    email: 'carlacosta@example.com',
    subscriptionDate: new Date(2024, 3, 5, 16, 30),
    checkInDate: new Date(2024, 3, 10, 20, 15)
  },
  {
    name: 'Rafael Lima',
    email: 'rafaellima@example.com',
    subscriptionDate: new Date(2024, 3, 7, 11, 10),
    checkInDate: new Date(2024, 3, 10, 21, 0)
  },
  {
    name: 'Fernanda Sousa',
    email: 'fernandasousa@example.com',
    subscriptionDate: new Date(2024, 3, 9, 10, 20),
    checkInDate: new Date(2024, 3, 10, 22, 30)
  },
  {
    name: 'Marcelo Castro',
    email: 'marcelocastro@example.com',
    subscriptionDate: new Date(2024, 3, 10, 8, 45),
    checkInDate: new Date(2024, 3, 10, 23, 15)
  },
  {
    name: 'Patrícia Rocha',
    email: 'patriciarocha@example.com',
    subscriptionDate: new Date(2024, 3, 11, 9, 15),
    checkInDate: new Date(2024, 3, 11, 10, 30)
  }
]

const createNewParticipant = participants => {
  const subscriptionDate = dayjs(Date.now()).to(participants.subscriptionDate)
  const checkInDate = dayjs(Date.now()).to(participants.checkInDate)

  return `
    <tr>
      <td>
        <strong>${participants.name}</strong>
        <br />
        <small>${participants.email}</small>
      </td>

      <td>${subscriptionDate}</td>
      <td>${checkInDate}</td>
    </tr>
  `
}

const updateList = participants => {
  let output = ''

  // Estrutura de repetição
  participants.forEach(participant => {
    output += createNewParticipant(participant)
  })

  document.querySelector('tbody').innerHTML = output
}

updateList(participants)
