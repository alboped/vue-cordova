import fetchJsonp from 'fetch-jsonp';

import { Toast } from 'mint-ui';

import urls from './urls';

import v from 'config/version';

export default {
	jsonp: (url, param) => {
		let _url = `${url}?appVer=${v.version}`;

		Object.keys(param).forEach(key => { 
			_url += `&${key}=${param[key]}` 
		});

		return fetchJsonp(urls.ROOT + _url).then(
			data => data.json(), 
			err => {
				Toast('请求失败！');
				throw new Error('9999');
			}
		).then(
			data => {
				if (data.retCode != "0000") {
					Toast(data.errMsg);
					throw new Error(data.retCode);
				}
				return data;
			}
		);
	}
}