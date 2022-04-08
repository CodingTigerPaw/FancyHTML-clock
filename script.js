
        let hrs = document.querySelector("#hrs")
        let mn = document.querySelector("#mn")
        let sc = document.querySelector("#sc")

       
        setInterval(()=>{
        
            let day = new Date();

            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * 6;
            let ss = day.getSeconds() * 6;

            hrs.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`
            
           sc.style.transform = `rotateZ(${ss}deg)`
        })

        //digital clock

        let hours = document.getElementById('hours')

        let minutes = document.getElementById('minutes')
        let seconds = document.getElementById('seconds')
        let ampm = document.getElementById('ampm')