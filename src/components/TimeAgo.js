/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import useTimeAgo from "@rooks/use-time-ago";


const TimeAgo = () => {
    const [date, setDate] = useState(new Date());
    const timeAgo = useTimeAgo(date.getTime() - 1000 * 12);
    return (
      <>
        {timeAgo}
      </>
    );
}

export default TimeAgo;