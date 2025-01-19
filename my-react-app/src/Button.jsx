

function Button(){

    //inline css styling
    const styles = {

        backGroundColor: "hsl(180, 63.50%, 38.60%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",

    }

    return(<button style={styles}>Click me</button>)
}

export default Button