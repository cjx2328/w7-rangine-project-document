<?php

/**
 * WeEngine Document System
 *
 * (c) We7Team 2019 <https://www.w7.cc>
 *
 * This is not a free software
 * Using it under the license terms
 * visited https://www.w7.cc for more details
 */

namespace W7\App\Model\Entity;

class Setting extends BaseModel
{
	public $timestamps = false;
	protected $table = 'setting';
	protected $primaryKey = 'key';

	const ERROR_NO_POWER = 446;//没权限
	const ERROR_NO_FIND = 445;//文件不存在
	const ERROR_NO_LOGIN = 444;//没登陆
	const ERROR_CHANGE_USER = 447;//是否切换用户

	public function getSettingAttribute()
	{
		if (empty($this->value)) {
			return [];
		}
		return json_decode($this->value, true);
	}
}
