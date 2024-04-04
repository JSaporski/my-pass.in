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
    checkInDate: null
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
    checkInDate: null
  },
  {
    name: 'Rafael Lima',
    email: 'rafaellima@example.com',
    subscriptionDate: new Date(2024, 3, 7, 11, 10),
    checkInDate: null
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
    checkInDate: null
  }
]

const confirmCheckIn = event => {
  const result = confirm('Tem certeza que deseja realizar o check-in?')

  if (result) {
    const participant = participants.find(
      p => p.email === event.target.dataset.email
    )

    participant.checkInDate = new Date()

    updateList(participants)
  }
}

const addParticipant = event => {
  event.preventDefault()

  const formData = new FormData(event.target) // Retorna um objeto contendo dados dos campos do form

  const formDataName = formData.get('name')
  const formDataEmail = formData.get('email')

  const participant = {
    name: formDataName,
    email: formDataEmail,
    subscriptionDate: new Date(),
    checkInDate: null
  }

  const participantExists = participants.find(
    p => p.email === participant.email
  )

  if (participantExists) {
    event.target.querySelectorAll('input').forEach(input => {
      input.value = ''
    })

    return alert(`Esse participante já existe, por favor cadastre outro!`)
  }

  participants = [participant, ...participants]
  updateList(participants)

  event.target.querySelectorAll('input').forEach(input => {
    input.value = ''
  })
}

const createNewParticipant = participant => {
  const subscriptionDate = dayjs(Date.now()).to(participant.subscriptionDate)
  let checkInDate = dayjs(Date.now()).to(participant.checkInDate)

  if (participant.checkInDate === null) {
    checkInDate = `
      <button 
        data-email="${participant.email}"
        onclick="confirmCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }

  return `
    <tr>
      <td>
        <strong>${participant.name}</strong>
        <br />
        <small>${participant.email}</small>
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
