import { ajax } from "../helpers/ajax.js";
import api from "../helpers/api.js";
import {news} from "../index.js";

const d = document;

export default async function(){
    await news.getAll()
    news.drawTitles()
}


