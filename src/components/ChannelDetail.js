import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import ChannelCard from "./ChannelCard";
import Video from "./Video";

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [VideosData, setVideosData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideosData(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
            zIndex: 10,
            height: "360px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box p="2" display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Video videos={VideosData} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
