function Employee(props){
    return(
        <>
        <h1>Employee {props.name}</h1>
        <p>{props.role ? props.role : 'no role'}</p>
        </>
    )
}
export default Employee;