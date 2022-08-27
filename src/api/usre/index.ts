/*
 * @Description: your description
 * @Author: lkxian
 * @@@Email: lkxian888@163.com
 * @Date: 2022-08-27 14:40:06
 * @LastEditTime: 2022-08-27 18:02:26
 */
import request from '@/utils/request';

// api枚举
enum Api {
  Login = '/login'
}

// 用户信息
interface UserInfo {
  userName: string;
}

/**
 * 登录
 */
export const accountLogin = () => {
  return request<UserInfo>({
    url: Api.Login,
    method: 'get'
  });
};
