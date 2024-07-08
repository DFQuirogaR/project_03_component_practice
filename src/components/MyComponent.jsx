import PropTypes from 'prop-types'

export const MyComponent = ( {name, lastName} ) => {

    const student = {
        name: "Carolina",
        lastName: "Marino",
        mobile: "3000000",
        linkeindProfile: "https://www.linkedin.com/carolina"
    }

    console.log(student);

  return (
    <div>
        <hr />
        <h4>Este es mi primer componente</h4>
        <p>Curso de React</p>
        <p>Docente: <strong>{name} {lastName}</strong></p>
        <ul>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados - Hooks</li>
            <li>Comuncacion</li>
        </ul>
        <p>Estudiante: <strong>{student.name} {student.lastName}</strong></p>
        <ul>
            <li>Móvil: {student.mobile}</li>
            <li>Linkedin: {student.linkeindProfile}</li>
        </ul>
    </div>
  )
}

MyComponent.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string
}