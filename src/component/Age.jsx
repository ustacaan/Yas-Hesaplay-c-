import { useState, useEffect } from "react";

export default function Age() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');


  useEffect(() => {
    if (day && month && year) {
      const now = new Date();
      const birthDate = new Date(year, month - 1, day);
      const years = now.getFullYear() - birthDate.getFullYear();
      const months = now.getMonth() - birthDate.getMonth();
      const days = birthDate.getDate() - now.getDate();
      
      setAge(`${Math.abs(years)} yıl, ${Math.abs(months)} ay, ${Math.abs(days)} gün`);


      setBackgroundColor('#151515');
    }
  }, [day, month, year]);

  return (
    <div className="age">
      <form>
        
        <ul className="text">
          <h3>GÜN</h3>
          <h3>AY</h3>
          <h3>YIL</h3>
        </ul>
        
        <input type="number" name="day" placeholder="DD" value={day} onChange={(e) => setDay(e.target.value)} />
        <input type="number" name="month" placeholder="MM" value={month} onChange={(e) => setMonth(e.target.value)} />
        <input type="number" name="year" placeholder="YYYY" value={year} onChange={(e) => setYear(e.target.value)} />

        <h6 style={{ backgroundColor }}>
          <img src="icon3.svg" alt="" />
          <img src="icon.svg" alt="" />
          <img src="icon2.svg" alt="" />
        </h6>

        <h5></h5>
      </form>
      
        {age && (
          <>
            <p><span>{age.split(',')[0].substring(0, 3)}</span>{age.split(',')[0].substring(3)}</p>
            <p><span>{age.split(',')[1].substring(0, 3)}</span>{age.split(',')[1].substring(3)}</p>
            <p><span>{age.split(',')[2].substring(0, 3)}</span>{age.split(',')[2].substring(3)}</p>
          </>
        )}

        {!age && (
          <>
          <h4>
            <span class="first">- </span>
            <span class="second">- </span>years
          </h4>
          <h4>
            <span class="first">- </span>
            <span class="second">- </span>months
          </h4>
          <h4>
            <span class="first">- </span>
            <span class="second">- </span>days
          </h4>
          </>
        )}
    </div>
  );
}





 


