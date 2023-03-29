

function convert() {
    var amtobj = document.getElementById('amtid')
    //   alert(amtobj)   
    amt = amtobj.value
    // alert(amt)
    var frmobj = document.getElementById('frmid');
    frm = frmobj.value

    // alert(frm)
    var toobj = document.getElementById('toid');
    to = toobj.value
    // alert(to)
    //    var h1obj = document.getElementById("one");

    // x = h1obj.innerHTML;
    // alert(x)
    // re =  "Currency Converter";
    var rid = document.getElementById('result');
    //  resobj.innerHTML = result;

    apilink = "https://api.exchangerate-api.com/v4/latest/" + frm;
    // document.write(apilink)

    //    var res = fetch(apilink);
    //    document.write(res)
    //    console.log(res)

    fetch(apilink).then(
        function (res) {
            // console.log(res.json())
            return res.json();

        } ).then(
            function (json) {
                // console.log(json)
                // console.log(json.rates)
                dict = json.rates;
                // console.log(dict['BHD'])
                cr = dict[to]
                // console.log(cr)
                res=cr*amt
                // alert(res)
                rid.innerHTML = res
                rid.innerHTML =`${amt} ${frm} = ${res} ${to}`
               
            }
        ).catch(() => {  // if user is offline or any other error occured while fetching data then catch function will run
           rid.innerHTML = 'Something Went Wrong ! Plzz Check Your Connection.'
           
             
        })
        

}

