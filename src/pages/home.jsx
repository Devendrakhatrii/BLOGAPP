const Home = ({data}) => {
    return (
        <>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age:</th>
        </tr>
    </thead>
    <tbody>
        {data.length > 0 ? (
            data.map((user,index) => {
                return (
                    <tr key = {index}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                </tr>
                );

            })
        ):(
            <tr>
                <td colSpan = {2} style = {{textAlign:"center"}}>
                    No Data
                    </td>
            </tr>
        ) }

    </tbody>
</table>
        </>
    )

    
}
export default Home;

