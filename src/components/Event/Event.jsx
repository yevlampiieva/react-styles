import PropTypes from "prop-types";
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
// import { formatEventStart } from "helpers/formatEventStart ";
// import { formatEventDuration } from "helpers/formatEventDuration";
import { formatEventStart, formatEventDuration } from "helpers";
import { iconSize } from "constants";
import { Card, EventName, Info, Chip } from "./Event.styled";

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.sm} />
        {formattedStart}
      </Info>
      <Info>
        <FaClock size={iconSize.sm} />
        {duration}
      </Info>
      <Chip $eventType={type}>{type}</Chip>
      {/* <span className={`${css.chip} ${css[type]}`}>{type}</span> */}
    </Card>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
