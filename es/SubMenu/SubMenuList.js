import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children"];
import * as React from 'react';
import classNames from 'classnames';
import { MenuContext } from '../context/MenuContext';

var InternalSubMenuList = function InternalSubMenuList(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _React$useContext = React.useContext(MenuContext),
      prefixCls = _React$useContext.prefixCls,
      mode = _React$useContext.mode;

  return /*#__PURE__*/React.createElement("ul", _extends({
    className: classNames(prefixCls, "".concat(prefixCls, "-sub"), "".concat(prefixCls, "-").concat(mode === 'inline' ? 'inline' : 'vertical'), className)
  }, restProps, {
    "data-menu-list": true,
    ref: ref
  }), children);
};

var SubMenuList = /*#__PURE__*/React.forwardRef(InternalSubMenuList);
SubMenuList.displayName = 'SubMenuList';
export default SubMenuList;