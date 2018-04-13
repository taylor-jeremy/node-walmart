function getNameSearch() {
   var searchTxt = $("#searchText").val();
   console.log("You are searching for: " + searchTxt); 
   document.getElementById('searchText').value = ' ';

      // https://forums.asp.net/t/1934215.aspx?Using+jQuery+ajax+to+call+asmx+webservice+methods
      $.ajax({
         url: "//api.walmartlabs.com/v1/search?format=json",
         data: {apikey: 'gz84agu8t2bvg5whfc48zbtk', i: 'tt3896198',  s: searchTxt},
         dataType: "json",
         success: function(data){
            console.log("Back from server with the following results:")
         console.log("Status: " + status);
         console.log(data);


            updateResultList(data);
         }
      });
}

   function updateResultList(data) {
   if (data.Search && data.Search.length > 0) {
      var resultList = $("#ulResults");
      resultList.empty();

      for (var i = 0; i < data.Search.length; i++) {
         var id = data.Search[i].itemId;
         var name  = data.Search[i].name;
         var regularPrice = data.Search[i].msrp;
         var salePrice = data.Search[i].salePrice;
         resultList.append('<li> \
         <p>' + id + '</p> \
         <p>' + name + '"</p> \
         <p>' + regularPrice + '"</p> \
         <p>' + salePrice + '"> </p></li>');
      }  //https://stackoverflow.com/questions/9643311/pass-string-parameter-in-an-onclick-function
   }     //At this current state, add will be considered as an identifier like variables or function calls. You should escape the value like this
         //        '<input type="button" onClick="gotoNode(\'' + result.name + '\')" />'

}



function getDetail(id) {
   console.log("You in getDeails for #1 : " + id); 
   //document.getElementById('searchText').value = ' ';
   // https://forums.asp.net/t/1934215.aspx?Using+jQuery+ajax+to+call+asmx+webservice+methods
   $.ajax({
      url: "//api.walmartlabs.com/v1/search?format=json",
      data: {apikey: 'gz84agu8t2bvg5whfc48zbtk', i: id},
      dataType: "json",
      success: function(data){
         console.log("Back from server with the following results:")
         console.log("Status getDetail: " + status);
         console.log(data);


         updateResultList2(data);
      }
   });


   }

   function updateResultList2(data) {
      console.log('inside getDetail Results');
      
         var resultList = $("#ulResults");
         resultList.empty();
         console.log(data);
         console.log('inside if ');

      
            var id = data.itemId;
            var name  = data.name;
            var regularPrice = data.msrp;
            var salePrice = data.salePrice;
            resultList.append('<li> \
            <p>id: ' + id + '</p> \
            <p>name:  ' + name + '"</p> \
            <p>Regular Price:  '+ regularPrice +'</p> \
            <p>Sale Price:  '+ salePrice +'</p></li>');
     
}

/*   var connection = {i:"tt3896198", apikey: "887fde4e", s: searchTxt}
     
// Use jQuery to make the get request
$.get("http://www.omdbapi.com/", connection, function(data, status){
   // For debugging purposes, make a note that we're back
   console.log("Back from server with the following results:")
   console.log("Status: " + status);
    console.log(data);

    updateResultList(data)
});
&apikey=887fde4e
*/

//if (!isset(IDdbim)){
//   IDdbim = '';
//}


/*   var connection = {i:"tt3896198", apikey: "887fde4e", s: searchTxt}
     
// Use jQuery to make the get request
$.get("http://www.omdbapi.com/", connection, function(data, status){
   // For debugging purposes, make a note that we're back
   console.log("Back from server with the following results:")
   console.log("Status: " + status);
    console.log(data);

    updateResultList(data)
});
&apikey=887fde4e
*/

//if (!isset(IDdbim)){
//   IDdbim = '';
//}