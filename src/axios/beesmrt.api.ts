import axios from "axios";
import { setupInterceptors } from "./interceptor";

export const beesmartApi = axios.create({
	baseURL: String(import.meta.env.VITE_BEESMRT_API),
});

setupInterceptors(beesmartApi);
