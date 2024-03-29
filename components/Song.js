import useSpotify from "../hooks/useSpotify";
import { useState } from "react";
import { millisToMinutesAndSeconds } from "../lib/time";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import CustomModal from './Modal';

function Song({ track, order }) {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [sPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const playSong = async () => {
    setCurrentTrackId(track.track.id);
    setIsPlaying(true);
    spotifyApi.play({
      uris: [track.track.uri],
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <CustomModal isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />

    <div
      className="grid grid-cols-2 py-4 px-5 text-gray-500 rounded-lg hover:bg-gray-900 cursor-pointer text-sm md:text-base"
      onClick={showModal}
    >

      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track.album.images[0].url}
          alt=""
        />
        <div>
          <p className="w-36 lg:w-64 text-white truncate">{track.track.name}</p>
          <p className="w-40">{track.track.artists[0].name}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="w-40 hidden md:inline-grid">{track.track.album.name}</p>

        <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
      </div>
    </div>
    </div>
  );
}

export default Song;
