function getOnLoad() {
   $.ajax({
        url: "//api.walmartlabs.com/v1/trends?format=json",
        data: {apikey: 'gz84agu8t2bvg5whfc48zbtk'},
        dataType: "json",
        headers: {  'Access-Control-Allow-Origin': 'htt://site allowed to access' },
        success: function(data){
           console.log("Back from server with the following results:")
           console.log("Status: " + status);
           console.log(data);
           updateResultList(data);
        }
     });
}
    
    function updateResultList(data) {
        var resultList = $("#ulResults");
      resultList.empty();
        var name = data[0].name;
        resultList.append('<li> \
         <p>' + title + '</p></li>');
    }
    
    function getDetail(id) {
   console.log("You in getDeails for #1 : " + id); 
   //document.getElementById('searchText').value = ' ';
   // https://forums.asp.net/t/1934215.aspx?Using+jQuery+ajax+to+call+asmx+webservice+methods
   $.ajax({
      url: "//api.walmartlabs.com/v1/trends?format=json",
      data: {apikey: 'gz84agu8t2bvg5whfc48zbtk', i: id},
      dataType: "json",
      headers: {  'Access-Control-Allow-Origin': 'htt://site allowed to access' },
      success: function(data){
         console.log("Back from server with the following results:")
         console.log("Status getDetail: " + status);
         console.log(data);

         updateResultList2(parsedData);
      }
   });


   }
    
    function updateResultList2(data) {
      console.log('inside getDetail Results');
      
         var resultList = $("#ulResults");
         resultList.empty();
         console.log(data);
         console.log('inside if ');

            for (var i = 0; i < (data.length-1); i++){
            var name = data.name;
            resultList.append('<li> \
            <p>Title: ' + name + '</p> \
            </li>');
     
}
};