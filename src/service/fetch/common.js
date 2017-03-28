import md5 from 'md5';

import http from 'service/http';
import urls from 'service/urls';

/**
 * 获取首页轮播图列表
 */
export const getActivityList = () => {
	return http.jsonp(urls.GET_ADVERT_IMG, {});
}