import styled from "styled-components";
import dayjs from "dayjs";

import { useEffect, useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import { TimeInput } from "@mantine/dates";
import { IconCalendar, IconClock } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { rentalDateAndTimeFunction } from "../Redux/search/action";
import { useNavigate } from "react-router-dom";
import { getData } from "../Redux/search/action";
import { findingDfferenceFunction } from "../Redux/search/action";
import { useSelector } from "react-redux";

function SearchForm(props) {
  const isDark = useSelector(state => state.themeReducer.dark);
  const [pickupDate, setPickupDate] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [pickupTime, setPickupTime] = useState(null);
  const [dropoffTime, setDropoffTime] = useState(null);
  const dispatch = useDispatch();
  const nav = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const pickDate = pickupDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
      dayFirst: true,
    });
    console.log(pickDate);

    const dropDate = dropoffDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
      dayFirst: true,
    });
    console.log(dropDate);
    // console.log(pickupTime)
    // console.log(dropoffTime)
    // const pickupTime = "21:30";

    // Split the string into hours and minutes
    const [hours, minutes] = pickupTime.split(":");

    // Create a new date object with the current date and the extracted hours and minutes
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);

    // Use the Intl.DateTimeFormat object to format the time as "9:30 pm"
    const formattedTime = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);

    console.log(formattedTime); // "9:30 PM"

    const [hrs, mins] = dropoffTime.split(":");

    // Create a new date object with the current date and the extracted hours and minutes
    const dropdate = new Date();
    dropdate.setHours(hrs);
    dropdate.setMinutes(mins);

    // Use the Intl.DateTimeFormat object to format the time as "9:30 pm"
    const dropFormattedTime = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(dropdate);

    console.log(dropFormattedTime);
    dispatch(rentalDateAndTimeFunction({
      pickupDate: pickDate,
      pickupTime: formattedTime,
      dropoffDate: dropDate,
      dropoffTime: dropFormattedTime
    }))
    dispatch(findingDfferenceFunction({
      pickupDate: pickDate,
      pickupTime: formattedTime,
      dropoffDate: dropDate,
      dropoffTime: dropFormattedTime
    }));
    nav('/search')
  };

  //<<<<<<< updated codes >>>>>>>>>>>>>>>>>>>>
  useEffect(()=>{
    dispatch(getData())
  },[])

  //>>>>>>>>>>>>>>>Updated ends>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <Container isDark={isDark}>
      <h1>Search your next ride</h1>
      <form onSubmit={handleSubmit}>
        <DateTime>
          <p>Pickup</p>
          <div>
            <DatePickerInput
              minDate={new Date()}
              maxDate={dayjs(new Date()).add(1, "month").toDate()}
              placeholder="Date"
              maw={400}
              miw={"45%"}
              mx="auto"
              value={pickupDate}
              onChange={setPickupDate}
              icon={<IconCalendar size="1.1rem" stroke={1.5}
              // color={isDark ? "white" : "#2C3333"}
              // style={{ color: isDark ? "white" : "#2C3333" }}
              />}
            />
            <input style={{ color: isDark ? "white" : "#2C3333", backgroundColor: isDark ? "#2C3333" : "white" }}
              value={pickupTime}
              onChange={(e) => {
                setPickupTime(e.target.value);
              }}
              className="timeSelector"
              type={"time"}
            />
          </div>
        </DateTime>
        <DateTime>
          <p>Dropoff</p>
          <div>
            <DatePickerInput
              minDate={new Date()}
              maxDate={dayjs(new Date()).add(1, "month").toDate()}
              placeholder="Date"
              maw={400}
              miw={"45%"}
              mx="auto"
              value={dropoffDate}
              onChange={setDropoffDate}
              icon={<IconCalendar size="1.1rem" stroke={1.5} />}
            />
            <input style={{ color: isDark ? "white" : "#2C3333", backgroundColor: isDark ? "#2C3333" : "white" }}
              value={dropoffTime}
              onChange={(e) => {
                setDropoffTime(e.target.value);
              }}
              className="timeSelector"
              type={"time"}
            />
            {/* <TimeInput
                        placeholder="Time"
                        miw={"45%"}
                        maw={400}
                        mx="auto" 
                        icon={<IconClock size="1rem" stroke={1.5} />}
                        value={dropoffTime}
                        onChange={setDropoffTime}
                     /> */}
          </div>
        </DateTime>
        <button className="submit" type="submit">
          Search
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${props => props.isDark ? '#2C3333' : 'white'};
  width: fit-content;
  min-width: 400px;
  height: fit-content;
  padding: 20px;
  border-radius: 5px;
  color: ${props => props.isDark ? "white" : "#2C3333"};

  .timeSelector {
    width: 100%;
    /* background-color: olive; */
    border: 1px solid rgb(206, 212, 218);
    border-radius: 5px;
    padding-left: 5px;
  }

  @media (max-width: 600px) {
    width: 100%;
    min-width: 0px;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .submit {
    background-color: #fed250;
    color: black;
    padding: 5px 10px;
    width: 100%;
    border-radius: 5px;
    font-weight: 600;
  }
`;

const DateTime = styled.div`
  margin-bottom: 20px;

  & > p {
    font-size: 1.1rem;
    margin-bottom: 5px;
    font-weight: 700;
  }

  & > div {
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }
`;

export default SearchForm;
