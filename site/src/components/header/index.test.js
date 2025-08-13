const React = require("react");
const { render, screen } = require("@testing-library/react");

jest.mock("../../utils/env", () => ({
  getIsSimpleMode: () => false,
  getSiteLogo: () => process.env.REACT_APP_SITE_LOGO,
}));
jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => false,
}));
jest.mock("react-router", () => ({
  useLocation: () => ({ pathname: "/" }),
}));

jest.mock("@osn/common", () => ({
  useWindowSize: () => ({ width: 1024 }),
}));
jest.mock("@osn/constants", () => ({ MOBILE_SIZE: 600 }));
jest.mock("../../utils/chain", () => ({
  getChainModules: () => ({}),
  hasBusiness: () => false,
  getFilteredMenus: () => [],
}));
jest.mock("../../utils/constants", () => ({
  menusAssetsAndUniques: [],
  menusBlockchain: [],
  menusBlockchainSimpleMode: [],
}));
jest.mock("../nodeSwitch", () => () => <div>NodeSwitch</div>);
jest.mock("./mobileNodeSwitch", () => () => <div>MobileNodeSwitch</div>);
jest.mock("./navi", () => () => <div>Navi</div>);
jest.mock("./chainSwitch", () => () => <div>ChainSwitch</div>);
jest.mock("../../components/home/explore/input", () => () => <div>ExploreInput</div>);
jest.mock("./mobile/button", () => (props) => <button {...props}>MobileButton</button>);
jest.mock("./subMenu", () => () => <div>SubMenu</div>);
jest.mock("../styled/flex", () => ({
  Flex: ({ children, ...props }) => <div {...props}>{children}</div>,
  FlexBetween: ({ children, ...props }) => <div {...props}>{children}</div>,
}));
jest.mock("../styled/responsive", () => ({
  Mobile: ({ children }) => <div>{children}</div>,
  PC: ({ children }) => <div>{children}</div>,
}));
jest.mock("../styled/link", () => (props) => <a {...props}>{props.children}</a>);
jest.mock("./styled", () => ({ HeaderMenuItem: ({ children }) => <div>{children}</div> }));
jest.mock("../../store/reducers/mobileMenuSlice", () => ({
  mobileMenuFoldedSelector: () => false,
  closeMobileMenu: () => ({ type: "close" }),
  toggle: () => ({ type: "toggle" }),
}));

describe("Header logo", () => {
  const originalLogo = process.env.REACT_APP_SITE_LOGO;

  afterEach(() => {
    process.env.REACT_APP_SITE_LOGO = originalLogo;
  });

  test("renders custom logo when REACT_APP_SITE_LOGO is set", () => {
    process.env.REACT_APP_SITE_LOGO = "custom-logo.png";
    const Header = require("./index").default;
    render(<Header />);
    const img = screen.getByTestId("custom-logo");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "custom-logo.png");
  });

  test("renders default svg logo when no custom logo is set", () => {
    delete process.env.REACT_APP_SITE_LOGO;
    const Header = require("./index").default;
    render(<Header />);
    const svg = screen.getByTestId("default-logo");
    expect(svg).toBeInTheDocument();
  });
});
