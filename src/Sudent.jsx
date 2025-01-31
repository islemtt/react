import propsTypes from 'prop-types';
function Student(props){
    return(
        <div className="student">
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Student:{props.isStudent ? "Yes" : "NO"}</p>
        </div>
    );
    
}
Student.propsTypes={
    name:propsTypes.string,
    age:propsTypes.number,
    isStudent:propsTypes.bool
}
export default Student;