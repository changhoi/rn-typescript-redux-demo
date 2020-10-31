import { BASE } from "@/constants/endpoints";
import Axios from "axios";

export const receipeApi = () => Axios.create({ baseURL: BASE });
