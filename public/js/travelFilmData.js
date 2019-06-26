app.factory('travelFilmDataFactory', function () {

  const travelFilmData = [
    {
      scenic: [
        {
          title: "El Diente to Mount Wilson Traverse",
          src: "https://www.youtube-nocookie.com/embed/Dv7nMV6GTfw?rel=0",
        },
        {
          title: "Maroon Bells - South Maroon Peak",
          src: "https://www.youtube-nocookie.com/embed/96qus7toQfo?rel=0",
        },
        {
          title: "Missouri Mountain - 14,075'",
          src: "https://www.youtube-nocookie.com/embed/Kr4LwaiOTsg?rel=0",
        },
        {
          title: "S. Arapaho Peak - 13,501'",
          src: "https://www.youtube-nocookie.com/embed/is4WWDBTNAo?rel=0",
        },
        {
          title: "Castle to Conundrum Peak Traverse",
          src: "https://www.youtube-nocookie.com/embed/gWzcoN_PQH8?rel=0",
        },
        {
          title: "South Maroon Peak - VMR Promo1",
          src: "https://www.youtube-nocookie.com/embed/veIB3OugZJ8?rel=0",
        },
      ],
      active: [
        {
          title: "South Maroon Peak - VMR Promo1",
          src: "https://www.youtube-nocookie.com/embed/veIB3OugZJ8?rel=0",
        },
      ],
    }
  ];
  return {
    travelFilmData: function() {
      return travelFilmData;
    },
  }
})
