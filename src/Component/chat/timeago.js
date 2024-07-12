// timeago.js
import { formatDistanceToNow } from 'date-fns';

const timeago = (timestamp) => {
  // Convert timestamp to Date object if it's not already
  const date = timestamp instanceof Date ? timestamp : timestamp.toDate();
  return formatDistanceToNow(date, { addSuffix: true });
};

export default timeago;
