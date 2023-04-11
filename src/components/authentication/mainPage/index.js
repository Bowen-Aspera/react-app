

const MainPage =()=>{
    return(
        <> 
            <div style={mainStyle}>
                <div id='title'>
                    <h1>Insert Title Here</h1>
                </div>

                <div style={loginStyle}>     
                    <div id='input'>
                        <input placeholder="Email or Username"/>
                        <br/>
                        <input placeholder="Password" type='password'/>
                    </div>
                    <button onClick={()=> alert("Log in")}>Log in</button>
                    <br/>
                    <button onClick={()=> alert("Forgot Password!")}>Forgot Password</button>
                    <br/>
                    <button onClick={()=> {
                        alert("Register!")
                    }}>Register</button>
                </div>
            </div>
        </>
      
    );
}



const mainStyle = {
    backgroundColor: 'gray',
    textAlign: 'center',
}

const loginStyle={
    backgroundColor:'blue',
    padding: 10,

}
export default MainPage;