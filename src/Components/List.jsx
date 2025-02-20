function List (){
    const fruits=[{Name:"apple",colories:95},
        {Name:"banana",colories:105},
        {Name:"cherry",colories:50},
        {Name:"dates",colories:277},
        {Name:"elderberry",colories:73},];
    fruits.sort((a,b)=>a.Name.localeCompare(b.Name));//sort by name alphabetically ken nhbou l3aks just ne9lbou a w b
    fruits.sort((a,b)=>a.colories-b.colories);//sort by colories
    fruits.sort((a,b)=>b.colories-a.colories);//sort by colories descending
const lowCalFruits=fruits.filter((fruit)=>fruit.colories<100);//filter by colories
//const highCalFruits=fruits.filter((fruit)=>fruit.colories>100);//filter by colories

    const ListItems=lowCalFruits.map((fruit)=> <li key={fruit.Name}> {fruit.Name}:{fruit.colories}</li>);//7atina key bch mayjiblnech warning fl console bch kol fruit yabda aandha key unique mch ki sahbetha najmou nzidou id bahdha name wl colories w n7otha w n7ot id f blast name louta win lkey

    return <ul>{ListItems}</ul>;//<ol>ken nhebha numerote
}
export default List;