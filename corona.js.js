function UpdateMap() {

    fetch("/CoronaData.json")
        .then(response => response.json())
        .then(data => {
            console.log(data.CoronaData)
            data.CoronaData.forEach(element => {

                latitude = element.latitude;
                longitude = element.longitude;
                
                cases = element.infected;
                dead = element.dead;
                recovered = element.recovered;
                  if (cases>1000){
                    color = "rgb(0, 0, 255)";
                }
                else if (dead>1){
                    color = "rgb(255, 0, 0)";
                }
                else if (recovered>1){
                    color = "rgb(0, 255, 0)";
                }
                else{
                    color = 'rgb(${cases},0, 0)';
                }

            //Crona V Map

                new mapboxgl.Marker({
                    draggable: false,
                    color: color,
                })
                    .setLngLat([longitude, latitude,])
                    .addTo(map);


                })
        })



}

UpdateMap();