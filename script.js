
function calculateAge()
{
    let day = parseInt(document.getElementById('day').value, 10)
    let month = parseInt(document.getElementById('month').value,10)-1;// JavaScript months are 0-indexed
    let year = parseInt(document.getElementById('year').value, 10);
    console.log(day,month,year)
    let valid = true;
    if(isNaN(day))
    {
        // alert('wrong')
        let dayInput = document.getElementById('day');
        dayInput.style.borderColor = '#E74C3C'; 
        dayInput.nextElementSibling.style.display = 'block';
        document.getElementsByClassName('heading day')[0].style.color='#E74C3C';
        valid=false;
    }
    if(isNaN(month))
    {
        let monthInput = document.getElementById('month');
        monthInput.style.borderColor = '#E74C3C'; 
        monthInput.nextElementSibling.style.display = 'block';
        document.getElementsByClassName('heading month')[0].style.color='#E74C3C';
        valid=false;
    }

    if(isNaN(year))
    {
        let yearInput = document.getElementById('year');
        yearInput.style.borderColor = '#E74C3C'; 
        yearInput.nextElementSibling.style.display = 'block';
        document.getElementsByClassName('heading year')[0].style.color='#E74C3C';
        valid=false;
    }
    
    if(valid===true)
    {
    if (!isValidDate(year, month , day)) {
        return;
      }
        
        const birthDate = new Date(year, month, day);
        const today = new Date();

       
        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDifference = today.getMonth() - birthDate.getMonth();
        let dayDifference = today.getDate() - birthDate.getDate();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (dayDifference < 0) {
            monthDifference--;
            const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // get days in previous month
            dayDifference += daysInLastMonth;
        }

        if (monthDifference < 0) {
            monthDifference += 12;
        }

        // Display age
        document.getElementsByClassName('yearRes')[0].textContent = `${age}`;
        document.getElementsByClassName('monthRes')[0].textContent = `${monthDifference}`;
        document.getElementsByClassName('dayRes')[0].textContent = `${dayDifference}`;
    }
    
}




function isValidDate(year, month, day) {
  // Create a date object
//   console.log(year, month, day)
  const date = new Date(year, month, day);
console.log(date)
  // Check if the day, month, and year match the input
  let valid=true;
  if(date.getFullYear() !== year)
  {
    document.getElementsByClassName('error-message valid year')[0].style.display='block';valid=false;
  }
  if(date.getMonth() !== month)
  {
    document.getElementsByClassName('error-message valid month')[0].style.display='block';valid=false;
  }
  if(date.getDate() !== day)
  {
    document.getElementsByClassName('error-message valid day')[0].style.display='block';valid=false;
  }
  if(valid===false)return;
  return date.getFullYear() === year && 
         date.getMonth() === month && 
         date.getDate() === day;
}
