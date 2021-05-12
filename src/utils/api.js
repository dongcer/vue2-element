
import { GET, POST } from "../utils/http";

let url = 'http://pmyh.sxcoal.com' // uat地址
// 收银台url
export const pay_url = "https://open-cashier.lejian.com/cashier/pc/?order_no=";
// 页面访问URL
export const access_URL = "https://exam.tujia.lejian.com/#/";
// 聊天url
export const chart_URL = "wss://chat.api.lejian.com?auth=";

//登录1
export const login = param => {
  return GET(`${url}/login`, param);
};
// -------------------------------首页-----------------------------------


export const belongPackageBrand = (packageId) => {
  return GET(`${url}/product/examPackage/belongPackageBrand?packageId=${packageId}`);
};


// 体检报告列表10
export const reportList = (id) => {
  return GET(`${url}/appointment/report/list?relationship=${id}`);
};
// 获取用户信息
export const getUserMsg = () => {
  return GET(`${url}/appointment/users/msg`);
};
// 获取卡段信息
export const getCardBatch = param => {
  return GET(`${url}/appointment/card/cardBatch?projectId=${param.projectId}&serviceId=${1}`);
};
// 获取齿科卡段信息
export const getCardBatchTeeth = param => {
  return GET(`${url}/appointment/card/cardBatch?projectId=${param.projectId}&serviceId=${2}`);
};

// 查看本人信息
export const selectOne = () => {
  return GET(`${url}/appointment/contacts/one`);
};


// ------------------------------体检填写界面----------------------------

//获取体检人列表3
export const getPhysical = () => {
  return GET(`${url}/appointment/contacts/list`);
};
//城市列表13
export const cityList = batch => {
  return POST(`${url}/appointment/area/list?batchId=${batch}`);
};
//机构列表14
export const brandList = brandIDs => {
  return POST(`${url}/appointment/brand/select`, brandIDs);
};
















