function connector(){
    graph.addVertex('0', {
        '1': weight(data.features[0].geometry["coordinates"], data.features[1].geometry["coordinates"]),
        '2': weight(data.features[0].geometry["coordinates"], data.features[2].geometry["coordinates"]),
        '7': weight(data.features[0].geometry["coordinates"], data.features[7].geometry["coordinates"]),
        '8': weight(data.features[0].geometry["coordinates"], data.features[8].geometry["coordinates"]),
        '5': weight(data.features[0].geometry["coordinates"], data.features[5].geometry["coordinates"])
    });
    graph.addVertex('1',{
      '0': weight(data.features[1].geometry["coordinates"], data.features[0].geometry["coordinates"]),
        '21': weight(data.features[1].geometry["coordinates"], data.features[21].geometry["coordinates"]),
        '22': weight(data.features[1].geometry["coordinates"], data.features[22].geometry["coordinates"]),
        '23': weight(data.features[1].geometry["coordinates"], data.features[23].geometry["coordinates"]),
        '17': weight(data.features[1].geometry["coordinates"], data.features[17].geometry["coordinates"]),
        '8': weight(data.features[1].geometry["coordinates"], data.features[8].geometry["coordinates"]),
       '7': weight(data.features[1].geometry["coordinates"], data.features[7].geometry["coordinates"]),
        '12': weight(data.features[1].geometry["coordinates"], data.features[12].geometry["coordinates"]),
        '15': weight(data.features[1].geometry["coordinates"], data.features[15].geometry["coordinates"]),
          '14': weight(data.features[1].geometry["coordinates"], data.features[14].geometry["coordinates"])
       
    });
    graph.addVertex('2', {
        '4': weight(data.features[2].geometry["coordinates"], data.features[4].geometry["coordinates"]),
        '0': weight(data.features[2].geometry["coordinates"], data.features[0].geometry["coordinates"]),
        '7': weight(data.features[2].geometry["coordinates"], data.features[7].geometry["coordinates"]),
        '5': weight(data.features[2].geometry["coordinates"], data.features[5].geometry["coordinates"])
    });
    graph.addVertex('3', {
        '4': weight(data.features[3].geometry["coordinates"], data.features[4].geometry["coordinates"]),
        '11': weight(data.features[3].geometry["coordinates"], data.features[11].geometry["coordinates"]),
        '12': weight(data.features[3].geometry["coordinates"], data.features[12].geometry["coordinates"])
    });
    graph.addVertex('4', {
        '8': weight(data.features[4].geometry["coordinates"], data.features[8].geometry["coordinates"]),
        '3': weight(data.features[3].geometry["coordinates"], data.features[3].geometry["coordinates"]),
        '2': weight(data.features[3].geometry["coordinates"], data.features[2].geometry["coordinates"]),
        '0': weight(data.features[3].geometry["coordinates"], data.features[0].geometry["coordinates"]),
        '12': weight(data.features[3].geometry["coordinates"], data.features[12].geometry["coordinates"])
    });
     graph.addVertex('5', {
        '7': weight(data.features[5].geometry["coordinates"], data.features[7].geometry["coordinates"]),
        '6': weight(data.features[5].geometry["coordinates"], data.features[6].geometry["coordinates"]),
         '2': weight(data.features[5].geometry["coordinates"], data.features[2].geometry["coordinates"]),
          '0': weight(data.features[5].geometry["coordinates"], data.features[0].geometry["coordinates"])
    });
  
    graph.addVertex('6', {
        '7': weight(data.features[6].geometry["coordinates"], data.features[7].geometry["coordinates"]),
         '21': weight(data.features[6].geometry["coordinates"], data.features[21].geometry["coordinates"]),
          '5': weight(data.features[6].geometry["coordinates"], data.features[5].geometry["coordinates"])
    });
    graph.addVertex('7', {
        '1': weight(data.features[7].geometry["coordinates"], data.features[1].geometry["coordinates"]),
        '21': weight(data.features[7].geometry["coordinates"], data.features[21].geometry["coordinates"]),
         '6': weight(data.features[7].geometry["coordinates"], data.features[6].geometry["coordinates"]),
          '5': weight(data.features[7].geometry["coordinates"], data.features[5].geometry["coordinates"]),
           '0': weight(data.features[7].geometry["coordinates"], data.features[0].geometry["coordinates"])
    });
    graph.addVertex('8', {
        '12': weight(data.features[8].geometry["coordinates"], data.features[12].geometry["coordinates"]),
        '1': weight(data.features[8].geometry["coordinates"], data.features[1].geometry["coordinates"]),
         '0': weight(data.features[8].geometry["coordinates"], data.features[0].geometry["coordinates"]),
        '4': weight(data.features[8].geometry["coordinates"], data.features[4].geometry["coordinates"]),
         '3': weight(data.features[8].geometry["coordinates"], data.features[3].geometry["coordinates"]),
         '14': weight(data.features[8].geometry["coordinates"], data.features[14].geometry["coordinates"]),
          '2': weight(data.features[8].geometry["coordinates"], data.features[2].geometry["coordinates"])
    });

    graph.addVertex('10', {
        '12': weight(data.features[10].geometry["coordinates"], data.features[12].geometry["coordinates"]),
         '13': weight(data.features[10].geometry["coordinates"], data.features[13].geometry["coordinates"]),
          '11': weight(data.features[10].geometry["coordinates"], data.features[11].geometry["coordinates"]),
          '20': weight(data.features[10].geometry["coordinates"], data.features[20].geometry["coordinates"])
    });
    graph.addVertex('11', {
        '10': weight(data.features[11].geometry["coordinates"], data.features[10].geometry["coordinates"]),
        '12': weight(data.features[11].geometry["coordinates"], data.features[12].geometry["coordinates"]),
        '13': weight(data.features[11].geometry["coordinates"], data.features[13].geometry["coordinates"]),
         '3': weight(data.features[11].geometry["coordinates"], data.features[3].geometry["coordinates"]),
          '20': weight(data.features[11].geometry["coordinates"], data.features[20].geometry["coordinates"])
    });
 
    graph.addVertex('12', {
        '13': weight(data.features[12].geometry["coordinates"], data.features[13].geometry["coordinates"]),
         '11': weight(data.features[12].geometry["coordinates"], data.features[11].geometry["coordinates"]),
         '3': weight(data.features[12].geometry["coordinates"], data.features[3].geometry["coordinates"]),
       '4': weight(data.features[12].geometry["coordinates"], data.features[4].geometry["coordinates"]),
       '8': weight(data.features[12].geometry["coordinates"], data.features[8].geometry["coordinates"])
    });
    graph.addVertex('13', {
        '14': weight(data.features[13].geometry["coordinates"], data.features[14].geometry["coordinates"]),
         '12': weight(data.features[13].geometry["coordinates"], data.features[12].geometry["coordinates"]),
          '11': weight(data.features[13].geometry["coordinates"], data.features[11].geometry["coordinates"]),
           '10': weight(data.features[13].geometry["coordinates"], data.features[10].geometry["coordinates"]),
        '20': weight(data.features[13].geometry["coordinates"], data.features[20].geometry["coordinates"])
    });
     graph.addVertex('14', {
        '15': weight(data.features[14].geometry["coordinates"], data.features[15].geometry["coordinates"]),
        '13': weight(data.features[14].geometry["coordinates"], data.features[13].geometry["coordinates"]),
        '0': weight(data.features[14].geometry["coordinates"], data.features[0].geometry["coordinates"]),
        '8': weight(data.features[14].geometry["coordinates"], data.features[8].geometry["coordinates"]),
        '20': weight(data.features[14].geometry["coordinates"], data.features[20].geometry["coordinates"]),
         '1': weight(data.features[14].geometry["coordinates"], data.features[1].geometry["coordinates"])

    });
    graph.addVertex('15', {
        '16': weight(data.features[15].geometry["coordinates"], data.features[16].geometry["coordinates"]),
        '14': weight(data.features[15].geometry["coordinates"], data.features[14].geometry["coordinates"]),
        '17': weight(data.features[15].geometry["coordinates"], data.features[17].geometry["coordinates"]),
        '18': weight(data.features[15].geometry["coordinates"], data.features[18].geometry["coordinates"]),
        '20': weight(data.features[15].geometry["coordinates"], data.features[20].geometry["coordinates"]),
        '1': weight(data.features[15].geometry["coordinates"], data.features[1].geometry["coordinates"])
    });
    graph.addVertex('16', {
        '17': weight(data.features[16].geometry["coordinates"], data.features[17].geometry["coordinates"]),
         '15': weight(data.features[16].geometry["coordinates"], data.features[15].geometry["coordinates"]),
          '20': weight(data.features[16].geometry["coordinates"], data.features[20].geometry["coordinates"]),
          '18': weight(data.features[16].geometry["coordinates"], data.features[18].geometry["coordinates"])
    });
    graph.addVertex('17', {
        '1': weight(data.features[17].geometry["coordinates"], data.features[1].geometry["coordinates"]),
         '15': weight(data.features[17].geometry["coordinates"], data.features[15].geometry["coordinates"]),
          '16': weight(data.features[17].geometry["coordinates"], data.features[16].geometry["coordinates"]),
         '23': weight(data.features[17].geometry["coordinates"], data.features[23].geometry["coordinates"]),
         '7': weight(data.features[17].geometry["coordinates"], data.features[7].geometry["coordinates"]),
    });
    graph.addVertex('18', {
        '19': weight(data.features[18].geometry["coordinates"], data.features[19].geometry["coordinates"]),
        '16': weight(data.features[18].geometry["coordinates"], data.features[16].geometry["coordinates"]),
        '15': weight(data.features[18].geometry["coordinates"], data.features[15].geometry["coordinates"]),
        '13': weight(data.features[18].geometry["coordinates"], data.features[13].geometry["coordinates"]),
         '20': weight(data.features[18].geometry["coordinates"], data.features[20].geometry["coordinates"])
    });
    graph.addVertex('19', {
        '20': weight(data.features[19].geometry["coordinates"], data.features[20].geometry["coordinates"]),
         '18': weight(data.features[19].geometry["coordinates"], data.features[18].geometry["coordinates"])
    });

    graph.addVertex('20',{
       '19': weight(data.features[20].geometry["coordinates"], data.features[19].geometry["coordinates"]),
       '18': weight(data.features[20].geometry["coordinates"], data.features[18].geometry["coordinates"]),
        '16': weight(data.features[20].geometry["coordinates"], data.features[16].geometry["coordinates"]),
         '10': weight(data.features[20].geometry["coordinates"], data.features[10].geometry["coordinates"]),
          '13': weight(data.features[20].geometry["coordinates"], data.features[13].geometry["coordinates"]),
           '14': weight(data.features[20].geometry["coordinates"], data.features[14].geometry["coordinates"]),
            '15': weight(data.features[20].geometry["coordinates"], data.features[15].geometry["coordinates"])
    });
     graph.addVertex('21', {
        '22': weight(data.features[21].geometry["coordinates"], data.features[22].geometry["coordinates"]),
          '1': weight(data.features[21].geometry["coordinates"], data.features[1].geometry["coordinates"]),
          '7': weight(data.features[21].geometry["coordinates"], data.features[7].geometry["coordinates"]),
          '6': weight(data.features[21].geometry["coordinates"], data.features[6].geometry["coordinates"])
    });
    graph.addVertex('22', {
        '23': weight(data.features[22].geometry["coordinates"], data.features[23].geometry["coordinates"]),
        '1': weight(data.features[22].geometry["coordinates"], data.features[1].geometry["coordinates"]),
         '21': weight(data.features[22].geometry["coordinates"], data.features[21].geometry["coordinates"]),
          '7': weight(data.features[22].geometry["coordinates"], data.features[7].geometry["coordinates"])
    });
    graph.addVertex('23', {
        '1': weight(data.features[23].geometry["coordinates"], data.features[1].geometry["coordinates"]),
        '17': weight(data.features[23].geometry["coordinates"], data.features[17].geometry["coordinates"]),
        '16': weight(data.features[23].geometry["coordinates"], data.features[16].geometry["coordinates"]),
        '7': weight(data.features[23].geometry["coordinates"], data.features[7].geometry["coordinates"])
    });
}