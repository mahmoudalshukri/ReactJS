function Hello(props) {
    return (
      <div>
        Hello {props.firstName} {" " +props.lastName +" "} From Function Component
        <span>{" "+props.children}</span>
      </div>
    );
  }
  
export default Hello;