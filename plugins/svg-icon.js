import Vue from "vue";
import SvgIcon from "@/components/SvgIcon";
// 註冊組件
Vue.component("svg-icon", SvgIcon);
//預請求svg組件(通過之前的svg-sprite-loader加載)
const req = require.context("@/assets/icons/svg", false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);
