app.factory('travelFilmDataFactory', function () {

  const travelFilmData = [
    {
      scenic: [
        {
          title: "El Diente to Mount Wilson Traverse",
          videoID: "Dv7nMV6GTfw",
        },
        {
          title: "Maroon Bells - South Maroon Peak",
          videoID: "96qus7toQfo",
        },
        {
          title: "Missouri Mountain - 14,075'",
          videoID: "Kr4LwaiOTsg",
        },
        {
          title: "S. Arapaho Peak - 13,501'",
          videoID: "is4WWDBTNAo",
        },
        {
          title: "Castle to Conundrum Peak Traverse",
          videoID: "gWzcoN_PQH8",
        },
        {
          title: "South Maroon Peak - VMR Promo1",
          videoID: "veIB3OugZJ8",
        },
      ],
      active: [
        {
          title: "Device Ignitor Middle - V5",
          videoID: "RZI6mzwZIlo",
        },
        {
          title: "Circus Trick - V2",
          videoID: "w93kIvw-aAg",
        },
        {
          title: "Cocaine Corner - V2",
          videoID: "4AsI17y7qlA",
        },
        {
          title: "Right of Gypsy Devil - V4",
          videoID: "R8Ua2If2KcI",
        },
        {
          title: "Black Box Boulder - V2",
          videoID: "wkUElFy70UI",
        },
        {
          title: "Pregnancy Arete - V2+",
          videoID: "vrqQ5w4kMTU",
        },
        {
          title: "Mr. Trujillo's Big Day - V2+",
          videoID: "7N17GbBOolQ",
        },
      ],
    }
  ];
  return {
    travelFilmData: function() {
      return travelFilmData;
    },
    // srcScenic: function () {
    //   var urlScenicArray = [];
    //   for (var i = 0; i < travelFilmData[0].scenic.length; i++) {
    //     urlScenicArray.push(travelFilmData[0].scenic[i].videoID);
    //   }
    //   console.log(urlScenicArray);
    //   return urlScenicArray;
    // },
    // srcActive: function () {
    //   var urlActiveArray = [];
    //   for (var i = 0; i < travelFilmData[0].active.length; i++) {
    //     urlActiveArray.push(travelFilmData[0].active[i].videoID);
    //   }
    //   console.log(urlActiveArray);
    //   return urlActiveArray;
    // },
  }
})
