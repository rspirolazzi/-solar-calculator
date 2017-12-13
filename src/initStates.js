const initState = {
    /*geographic: {
        parameters: [
            {angle:'0°' , jan:'7,01', feb:'6,06', mar:'4,86', apr:'3,61', may:'2,70', jun:'2,20', jul:'2,43', aug:'3,22', sept:'4,49', oct:'5,22', nov:'6,41', dec:'6,92'},
            {angle:'19°', jan:'6,84', feb:'6,17', mar:'5,30', apr:'4,28', may:'3,49', jun:'2,96', jul:'3,21', aug:'3,95', sept:'5,07', oct:'5,44', nov:'6,32', dec:'6,68'},
            {angle:'34°', jan:'6,31', feb:'5,91', mar:'5,34', apr:'4,56', may:'3,90', jun:'3,38', jul:'3,64', aug:'4,29', sept:'5,22', oct:'5,31', nov:'5,89', dec:'6,12'},
            {angle:'49°', jan:'5,48', feb:'5,36', mar:'5,11', apr:'4,60', may:'4,10', jun:'2,73', jul:'3,86', aug:'4,40', sept:'5,11', oct:'4,92', nov:'5,19', dec:'5,27'},
            {angle:'90°', jan:'2,55', feb:'2,88', mar:'3,26', apr:'3,50', may:'3,48', jun:'3,23', jul:'3,37', aug:'3,50', sept:'3,51', oct:'2,79', nov:'2,54', dec:'2,43'},
            {angle:'OPT', jan:'7,02', feb:'6,19', mar:'5,36', apr:'4,62', may:'4,11', jun:'3,67', jul:'3,89', aug:'4,40', sept:'5,23', oct:'5,44', nov:'6,43', dec:'6,92'},
        ]
    },*/
    consume:{
        items: [
            {name: 'Luz',qty: 5,watt: 10,winterHs: 7,summerHs: 5,totalWt: 50,totalWpt: 50	,totalWinterWhDay: 350,totalSummerWhDay: 250,},
            {name: 'TV',qty: 1,watt: 75,winterHs: 4,summerHs: 3,totalWt: 75,totalWpt: 75	,totalWinterWhDay: 300,totalSummerWhDay: 225,},
            {name: 'Decodificador',qty: 1,watt: 30,winterHs: 4,summerHs: 3,totalWt: 30,totalWpt: 30	,totalWinterWhDay: 120,totalSummerWhDay: 90,},
            {name: 'Refrigerador',qty: 1,watt: 80,winterHs: 8,summerHs: 8,totalWt: 80,totalWpt: 640	,totalWinterWhDay: 640,totalSummerWhDay: 640,},
            {name: 'PC',qty: 1,watt: 40,winterHs: 4,summerHs: 3,totalWt: 40,totalWpt: 40	,totalWinterWhDay: 160,totalSummerWhDay: 120,},
        ],
        totals: {
            power: 1570,
            power_p: 1570,
            winter: 1570,
            summer: 1570,
            ofYear: 1570
        },
        power_factor: 0.7,
        energy: {
            security_factor: 110,
            system_efficiency: 60,
            cloudy_days: 3,
            cloudy_frequent: 15,
            power_to_generate: 2878,
            extra_power_to_generate: 575,
            total_extra_power_to_generate: 3454,
        }
    }
}
export default initState 