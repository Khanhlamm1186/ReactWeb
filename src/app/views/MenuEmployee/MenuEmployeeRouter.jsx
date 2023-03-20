import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const MenuEmployee = EgretLoadable({
  loader: () => import("./MenuEmployee")
});
const ViewComponent = withTranslation()(MenuEmployee);
const MenuEmployeeRoutes = [
  {
    path: ConstantList.ROOT_PATH + "list_nv/menu_employee",
    exact: true,
    component: ViewComponent
  }
];

export default MenuEmployeeRoutes;
