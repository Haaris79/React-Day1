export const Day2 = () => { 
    const day2="this page day2 of learning react classes"
  return (
    <>
    {/* this is inside the curly braces of react */}
    <h1>{day2}</h1>
    <card>
        <p>this is comes to child component</p>
        <button>click me</button>

    </card>
    </>
  );
}
const card=({children})=>{
    return(<>
    <div className="border-2 bg-blue-400 p-2 m-2 h-2 ">
        <h1>card component method</h1>
        {children}
    </div>
    </>)
}
export default Day2
