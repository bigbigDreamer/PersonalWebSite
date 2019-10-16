import Mock from "mockjs"
import songs from "../_data/song"

const songList = songs;

Mock.mock(/http:\/\/com\.cn\/song\/getAll/,"get", _ => songList);