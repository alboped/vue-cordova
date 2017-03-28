import { md5 } from 'vux';

import http from 'service/http';
import urls from 'service/urls';

/**
 * 用户登录
 */
export const userLogin = (loginNo, loginPwd) => {
	return http.jsonp(urls.USER_LOGIN, {
		loginNo,
		loginPwd: md5('suixingpay' + loginPwd)
	});
}