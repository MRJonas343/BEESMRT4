import type { AxiosInstance } from "axios";

/**
 * Setup axios interceptors for automatic credential handling
 * @param axiosInstance - The axios instance to configure
 */
export const setupInterceptors = (beesmartApi: AxiosInstance) => {
	beesmartApi.interceptors.request.use((config) => {
		config.withCredentials = true;
		return config;
	});
};
