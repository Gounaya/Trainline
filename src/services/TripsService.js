export async function serviceStations(origin, dest){
    let response = await fetch(`https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=${query}`)
        .catch((e) => alert(e));
    if(!response){
        return;
    }
    let jsonresponse = await response.json()
        .catch((error) => {console.log(error)});

    return jsonresponse.records.map((gare) => {
        return gare.fields.gare_ut_libelle
    })
    
}