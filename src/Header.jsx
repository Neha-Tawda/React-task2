const outerStyle = {display:"flex", justifyContent:'space-between', margin:'10px 100px', height:'30px'}
export default function Header(){
    return(
        <div style={outerStyle} id="outer">
            <h1>
                My App
            </h1>
            <button className="btn btn-outline-primary btn-sm">New</button>
        </div>
    )
}