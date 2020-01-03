
    let people = document.querySelectorAll('.counter-block-input')[0],
        days = document.querySelectorAll('.counter-block-input')[1],
        sum = document.getElementById('total'),
        place = document.getElementById('select'),
        peopleSum = 0,
        daysSum = 0,
        totalSum = 0;

    sum.innerHTML = 0;

    people.addEventListener("change", function() {
        peopleSum = +this.value;
        totalSum = peopleSum + daysSum;

        if (days.value == '' || people.value == '') {
            sum.innerHTML = 0;  
        } else {
            sum.innerHTML = totalSum;
        }
    });

    days.addEventListener("change", function() {
        daysSum = +this.value;
        totalSum = peopleSum + daysSum;

        if (days.value == '' || people.value == ''){
            sum.innerHTML = 0;  
        } else {
            sum.innerHTML = totalSum;
        }
    });
    
    place.addEventListener('change', function(){
        if (days.value == '' || people.value == '') {
            sum.innerHTML = 0;  
        } else {
          sum.innerHTML = totalSum * this.options[this.selectedIndex].value;  
        }        
    });