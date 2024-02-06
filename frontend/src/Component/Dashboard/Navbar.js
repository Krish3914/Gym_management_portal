import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

export const Navbar = () => {
  const userName = useSelector((state) => state.user.userData.name);
  const role = useSelector((state) => state?.user?.userData?.role);
  const noOfUsers = useSelector((state) => state.client.client);
  const expiredUserCount = useSelector((state)=>state.client.expiredUserCount)
  return (
    <div className="">
      <table className=" flex flex-col gap-10">
        <tr className="flex gap-10">
          <td className="w-8/12 bg-white rounded-lg ">
            {" "}
            <div className="bg-white rounded-xl p-2">
              <div className="flex">
                <div className="flex mx-auto flex-col gap-4 mt-2">
                  <span className="text-purple-400 font-medium text-xl">
                    WelCome <span className="text-xl ">{role?role:userName}🎉</span>
                  </span>
                  <span className="opacity-65">
                    You have done
                    <span className="font-semibold leading-3"> 0% </span> more
                    sales today. Check your new badge in your profile.
                  </span>
                  <span className="w-3/12 p-1 border-2 border-purple-300 text-purple-400  hover:bg-purple-600 text-center hover:text-white rounded-md duration-500 ">
                    {" "}
                    View Badges
                  </span>
                </div>
                <img
                  src={require("../../images/illustrations/man-with-laptop-light.png")}
                  className="w-4/12"
                />
              </div>
            </div>
          </td>
          <td className="w-2/12 bg-white rounded-lg p-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
              <img
                src={require("../../images/icons/unicons/chart-success.png")}
                className="w-10"
              />
              <BsThreeDotsVertical/>
              </div>
              <Link to={"/dashboard/tables"}>
                <h2 className="text-lg">Members</h2>
              </Link>
              <span className="text-2xl font-medium opacity-65">{noOfUsers?.length}</span>
              <span className="text-green-400 ">0%</span>
            </div>
          </td>
          <td className="w-2/12 bg-white rounded-lg p-2">
            <div className="flex flex-col gap-2">
             <div className="flex justify-between items-center">
             <img
                src={require("../../images/icons/unicons/cc-primary.png")}
                className="w-10"
              />
               <BsThreeDotsVertical />
             </div>
              <Link to={"/dashboard/salescard"}>
                <h2 className="text-lg">Sales</h2>
               
              </Link>
              <span className="text-2xl font-medium opacity-65">0</span>
              <span className="text-green-400 ">0%</span>
            </div>
          </td>
        </tr>
        <tr className="flex gap-10">
          <td className="bg-white w-8/12"></td>
          <td className="w-2/12 bg-white rounded-lg p-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
              <img
                src={require("../../images/icons/unicons/cc-success.png")}
                className="w-10"
              />
              <BsThreeDotsVertical/>
              </div>
              <Link to={"/dashboard/notifications"}>
                <h2 className="text-lg text-shadow-md">Notifications</h2>
              </Link>
              <span className="text-2xl font-medium opacity-65">{expiredUserCount}</span>
              <span className="text-green-400 ">0%</span>
            </div>
          </td>
          <td className="w-2/12 bg-white rounded-lg p-2">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
              <img
                src={require("../../images/icons/unicons/paypal.png")}
                className="w-10"
              />
              <BsThreeDotsVertical/>
              </div>
              <Link to={"/dashboard/transactioncard"}>
                <h2 className="text-lg">New Members</h2>
              </Link>
              <span className="text-2xl font-medium opacity-65">0</span>
              <span className="text-red-400 ">0%</span>
            </div>
          </td>
        </tr>
        <tr className="flex gap-10 justify-center">
        <td className="bg-white w-8/12"></td>
          <td className="flex flex-col w-4/12 gap-4 bg-white p-4">
            <div className="flex gap-4">
              <img
                src={require("../../images/icons/unicons/paypal.png")}
                className="w-10 h-9 "
              />
              <div className="flex flex-col text-xs">
                <span>Paypal</span>
                <span className="text-sm">Send money</span>
              </div>
              <div>82Usd</div>
            </div>
            <div className="flex gap-4">
              <img
                src={require("../../images/icons/unicons/wallet.png")}
                className="w-10 h-9 "
              />
              <div className="flex flex-col text-xs">
                <span>Send Wallet</span>
                <span className="text-sm">Mac'D</span>
              </div>
              <div>812Usd</div>
            </div>
            <div className="flex gap-4">
              <img
                src={require("../../images/icons/unicons/cc-primary.png")}
                className="w-10 h-9 "
              />
              <div className="flex flex-col text-xs">
                <span>Transfer</span>
                <span className="text-sm">Refund</span>
              </div>
              <div>82Usd</div>
            </div>
            <div className="flex gap-4">
              <img
                src={require("../../images/icons/unicons/cc-success.png")}
                className="w-10 h-9 "
              />
              <div className="flex flex-col text-xs">
                <span>Credit Card</span>
                <span className="text-sm">Orderd books</span>
              </div>
              <div>82Usd</div>
            </div>
            <div className="flex gap-4">
              <img
                src={require("../../images/icons/unicons/chart-success.png")}
                className="w-10 h-9 "
              />
              <div className="flex flex-col text-xs">
                <span>Wallet</span>
                <span className="text-sm">Star Bucks</span>
              </div>
              <div>82Usd</div>
            </div>
            <div className="flex gap-4">
              <img
                src={require("../../images/icons/unicons/wallet-info.png")}
                className="w-10 h-9 "
              />
              <div className="flex flex-col text-xs">
                <span>Master card</span>
                <span className="text-sm">Ordered Food</span>
              </div>
              <div>82Usd</div>
            </div>
          </td>
        </tr>
      </table>
      {/* <ul class="menu-inner py-1">
            <li class="menu-item active">
              <a href="index.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Dashboard</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-layout"></i>
                <div data-i18n="Layouts">Layouts</div>
              </a>

              <ul class="menu-sub">
                <li class="menu-item">
                  <a href="layouts-without-menu.html" class="menu-link">
                    <div data-i18n="Without menu">Without menu</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="layouts-without-navbar.html" class="menu-link">
                    <div data-i18n="Without navbar">Without navbar</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="layouts-container.html" class="menu-link">
                    <div data-i18n="Container">Container</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="layouts-fluid.html" class="menu-link">
                    <div data-i18n="Fluid">Fluid</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="layouts-blank.html" class="menu-link">
                    <div data-i18n="Blank">Blank</div>
                  </a>
                </li>
              </ul>
            </li>

            <li class="menu-header small text-uppercase">
              <span class="menu-header-text">Pages</span>
            </li>
            <li class="menu-item">
              <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-dock-top"></i>
                <div data-i18n="Account Settings">Account Settings</div>
              </a>
              <ul class="menu-sub">
                <li class="menu-item">
                  <a href="pages-account-settings-account.html" class="menu-link">
                    <div data-i18n="Account">Account</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="pages-account-settings-notifications.html" class="menu-link">
                    <div data-i18n="Notifications">Notifications</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="pages-account-settings-connections.html" class="menu-link">
                    <div data-i18n="Connections">Connections</div>
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-item">
              <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-lock-open-alt"></i>
                <div data-i18n="Authentications">Authentications</div>
              </a>
              <ul class="menu-sub">
                <li class="menu-item">
                  <a href="auth-login-basic.html" class="menu-link" target="_blank">
                    <div data-i18n="Basic">Login</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="auth-register-basic.html" class="menu-link" target="_blank">
                    <div data-i18n="Basic">Register</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="auth-forgot-password-basic.html" class="menu-link" target="_blank">
                    <div data-i18n="Basic">Forgot Password</div>
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-item">
              <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-cube-alt"></i>
                <div data-i18n="Misc">Misc</div>
              </a>
              <ul class="menu-sub">
                <li class="menu-item">
                  <a href="pages-misc-error.html" class="menu-link">
                    <div data-i18n="Error">Error</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="pages-misc-under-maintenance.html" class="menu-link">
                    <div data-i18n="Under Maintenance">Under Maintenance</div>
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-header small text-uppercase"><span class="menu-header-text">Components</span></li>
    
            <li class="menu-item">
              <a href="cards-basic.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-collection"></i>
                <div data-i18n="Basic">Cards</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="javascript:void(0)" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-box"></i>
                <div data-i18n="User interface">User interface</div>
              </a>
              <ul class="menu-sub">
                <li class="menu-item">
                  <a href="ui-accordion.html" class="menu-link">
                    <div data-i18n="Accordion">Accordion</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-alerts.html" class="menu-link">
                    <div data-i18n="Alerts">Alerts</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-badges.html" class="menu-link">
                    <div data-i18n="Badges">Badges</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-buttons.html" class="menu-link">
                    <div data-i18n="Buttons">Buttons</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-carousel.html" class="menu-link">
                    <div data-i18n="Carousel">Carousel</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-collapse.html" class="menu-link">
                    <div data-i18n="Collapse">Collapse</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-dropdowns.html" class="menu-link">
                    <div data-i18n="Dropdowns">Dropdowns</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-footer.html" class="menu-link">
                    <div data-i18n="Footer">Footer</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-list-groups.html" class="menu-link">
                    <div data-i18n="List Groups">List groups</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-modals.html" class="menu-link">
                    <div data-i18n="Modals">Modals</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-navbar.html" class="menu-link">
                    <div data-i18n="Navbar">Navbar</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-offcanvas.html" class="menu-link">
                    <div data-i18n="Offcanvas">Offcanvas</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-pagination-breadcrumbs.html" class="menu-link">
                    <div data-i18n="Pagination &amp; Breadcrumbs">Pagination &amp; Breadcrumbs</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-progress.html" class="menu-link">
                    <div data-i18n="Progress">Progress</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-spinners.html" class="menu-link">
                    <div data-i18n="Spinners">Spinners</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-tabs-pills.html" class="menu-link">
                    <div data-i18n="Tabs &amp; Pills">Tabs &amp; Pills</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-toasts.html" class="menu-link">
                    <div data-i18n="Toasts">Toasts</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-tooltips-popovers.html" class="menu-link">
                    <div data-i18n="Tooltips & Popovers">Tooltips &amp; popovers</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="ui-typography.html" class="menu-link">
                    <div data-i18n="Typography">Typography</div>
                  </a>
                </li>
              </ul>
            </li>

            <li class="menu-item">
              <a href="javascript:void(0)" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-copy"></i>
                <div data-i18n="Extended UI">Extended UI</div>
              </a>
              <ul class="menu-sub">
                <li class="menu-item">
                  <a href="extended-ui-perfect-scrollbar.html" class="menu-link">
                    <div data-i18n="Perfect Scrollbar">Perfect scrollbar</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="extended-ui-text-divider.html" class="menu-link">
                    <div data-i18n="Text Divider">Text Divider</div>
                  </a>
                </li>
              </ul>
            </li>

            <li class="menu-item">
              <a href="icons-boxicons.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-crown"></i>
                <div data-i18n="Boxicons">Boxicons</div>
              </a>
            </li>

            <li class="menu-header small text-uppercase"><span class="menu-header-text">Forms &amp; Tables</span></li>
    
            <li class="menu-item">
              <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-detail"></i>
                <div data-i18n="Form Elements">Form Elements</div>
              </a>
              <ul class="menu-sub">
                <li class="menu-item">
                  <a href="forms-basic-inputs.html" class="menu-link">
                    <div data-i18n="Basic Inputs">Basic Inputs</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="forms-input-groups.html" class="menu-link">
                    <div data-i18n="Input groups">Input groups</div>
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-item">
              <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-detail"></i>
                <div data-i18n="Form Layouts">Form Layouts</div>
              </a>
              <ul class="menu-sub">
                <li class="menu-item">
                  <a href="form-layouts-vertical.html" class="menu-link">
                    <div data-i18n="Vertical Form">Vertical Form</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="form-layouts-horizontal.html" class="menu-link">
                    <div data-i18n="Horizontal Form">Horizontal Form</div>
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-item">
              <a href="tables-basic.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-table"></i>
                <div data-i18n="Tables">Tables</div>
              </a>
            </li>
            <li class="menu-header small text-uppercase"><span class="menu-header-text">Misc</span></li>
            <li class="menu-item">
              <a
                href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                target="_blank"
                class="menu-link"
              >
                <i class="menu-icon tf-icons bx bx-support"></i>
                <div data-i18n="Support">Support</div>
              </a>
            </li>
            <li class="menu-item">
              <a
                href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                target="_blank"
                class="menu-link"
              >
                <i class="menu-icon tf-icons bx bx-file"></i>
                <div data-i18n="Documentation">Documentation</div>
              </a>
            </li>
          </ul> */}
      <footer class="content-footer footer bg-footer-theme">
              <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <div class="mb-2 mb-md-0">
                  ©
                    {new Date().getFullYear()}
                  , made with ❤️ by
                  <a href="https://maskottchen.tech/" target="_blank" class="footer-link fw-bolder">Maskottchen Technology</a>
                </div>
              </div>
            </footer>
    </div>
  );
};
