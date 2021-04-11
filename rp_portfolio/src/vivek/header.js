import profileimage from "./Vivek.jpg"

const styles = {

    header: {
       display: 'flex',
       flexDirection: 'row', 
       justifyContent: "space-between",
       backgroundColor: "grey",
       padding: 10
    },
    load: {
        display: 'flex',
        flexDirection : "row",
        justifyContent : "space-between"
    },
    land: {
        marginLeft : 10, 
        marginRight : 10,
        fontSize : 15
    }
}
export default function Header(vivek) 
{
    console.log(vivek)
    const links = ["Project1","Project2","Project3"]
    return (
        <div style={styles.header}>
            <div style = {{fontSize : 15}}> 
                Welcome!
            </div>
        <div style={styles.load}>
            {
                links.map(link=> 
                <div style = {styles.land}>
                    {
                        link
                    }
                </div>)
            }
        </div>
        </div>
    )
}

