
export async function serviceStations(query:any){
    let response = await fetch(`https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=${query}`)
        .catch((e) => alert(e));
    if(!response){
        return;
    }
    let jsonresponse = await response.json()
        .catch((error:any) => {console.log(error)});

    return jsonresponse.records.map((gare:any) => {
        return {id:gare.recordid, libelle: gare.fields.gare_alias_libelle_noncontraint}
    })
    
}
