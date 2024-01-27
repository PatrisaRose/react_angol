export default function KivalasztoMondat(props) {
  const szetbontottMondat = props.mondat.mondat.split("_");
  let pont = 0;
  function kovetkezoMondat(){
    props.kovMondat(pont);
  }

  function pontSzamitas(){
    if (document.getElementById("szavam").value===props.mondat.helyes){
      pont = 1;
    }
  }

  return (
    <div className="mondat">
      <p>
        {szetbontottMondat[0]}
        <select name="" id="szavam" onChange={pontSzamitas}>
          {props.mondat.valasztas.map(
            (szo, index)=> {
              return(
                <option value={szo} key={index}>{szo}</option>
              )
            }
          )}
        </select>
        {szetbontottMondat[1]}
        ({props.mondat.alap})
        <button onClick={kovetkezoMondat}>Következő mondat</button>
      </p>
    </div>
  );
}
