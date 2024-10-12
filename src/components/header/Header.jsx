import styled from "styled-components";
import { HeaderMainWrapper, SiteBrandWrapper } from "../../styles/header";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/images";

import { CgMenuGridR } from 'react-icons/cg'
import { Link } from "react-router-dom";

import { breakpoints, defaultTheme } from "../../styles/themes/default";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/slices/sidebarSlice";
import DropdownCategory from "./DropdownCategory";
import LanguageSelector from "../../translations/LanguageSelector";

import { useTranslation} from "react-i18next";
const NavigationAndSearchWrapper = styled.div`
  column-gap: 20px;
  .search-form {
    @media (max-width: ${breakpoints.lg}) {
      width: 100%;
      max-width: 500px;
    }
    @media (max-width: ${breakpoints.sm}) {
      display: none;
    }
  }

  .input-group {
    min-width: 320px;

    .input-control {
      @media (max-width: ${breakpoints.sm}) {
        display: none;
      }
    }

    @media (max-width: ${breakpoints.xl}) {
      min-width: 160px;
    }

    @media (max-width: ${breakpoints.sm}) {
      min-width: auto;
      grid-template-columns: 100%;
    }
  }

  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
    justify-content: flex-end;
  }
`;

const NavigationMenuWrapper = styled.nav`
  .nav-menu-list {
    margin-left: 20px;
       padding-top: 15px;
  
    

    @media (max-width: ${breakpoints.lg}) {
      flex-direction: column;
    }
  }

  .nav-menu-item {
    margin-right: 20px;
    margin-left: 20px;
   

    @media (max-width: ${breakpoints.xl}) {
      margin-left: 16px;
      margin-right: 16px;
    }
  }

  .nav-menu-link {
    &.active {
      color: ${defaultTheme.color_outerspace};
      font-weight: 700;
     
    }

    &:hover {
      color: ${defaultTheme.color_outerspace};
    }
  }

  @media (max-width: ${breakpoints.lg}) {
    position: absolute;
    top: 0;
    right: 0;
    width: 260px;
    background: ${defaultTheme.color_white};
    height: 100%;
    z-index: 999;
    display: none;
  }
`;

const Header = () => {

  const { t } = useTranslation();

//const[ home,categories,courses,about,login]= t("header")

  const dispatch = useDispatch();

/*   const navMenuData = [

    {
      id: "nav-menu-1",
      menuLink: "/",
      menuText: "Home"
    },
    {
      id: "nav-menu-2",
      menuLink: "/course",
      menuText: "Courses",
    },

    {
      id: "nav-menu-4",
      menuLink: "/pages",
      menuText: "About Us",
    },

  ];
 */


  const navMenuData = [
    {
      id: "nav-menu-1",
      menuLink: "/",
      menuText: t('header.home')
    },
    {
      id: "nav-menu-2",
      menuLink: "/course",
      menuText: t('header.courses')
    },
    {
      id: "nav-menu-4",
      menuLink: "/pages",
      menuText: t('header.about')
    },
  ];

  return (
    <HeaderMainWrapper className="header flex items-center">
      <Container className="container">
        <div className="header-wrap flex items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              className="sidebar-toggler"
              onClick={() => dispatch(toggleSidebar())}
            >
              <i className="bi bi-list"></i>
            </button>
            <SiteBrandWrapper to="/" className="inline-flex">
              <div className="brand-img-wrap flex items-center justify-center">
                <img
                  className="site-brand-img"
                  src={staticImages.logo}
                  alt="site logo"
                />
              </div>
              <span className="site-brand-text text-outerspace">PAL E-LEARN</span>
            </SiteBrandWrapper>
          </div>




          <NavigationAndSearchWrapper className="flex items-center">


            <NavigationMenuWrapper>
              <ul className="nav-menu-list flex items-center">
                <div className="category-menu category-menu-responsive d-none d-md-block">
                  <div className="Category-click">
                    <figure className="cattext">
                      <CgMenuGridR className="catIcon" />
                      <span id="catSpan">{t('header.categories')}</span>
                    </figure>
                    <DropdownCategory />
                  </div>
                </div>

                {navMenuData?.map((menu) => {
                  return (
                    <li className="nav-menu-item" key={menu.id}>
                      <Link
                        to={menu.menuLink}
                        className="nav-menu-link text-base font-medium text-gray "
                      >
                        {menu.menuText}
                      </Link>
                    </li>
                  );
                })}

              </ul>


            </NavigationMenuWrapper>

           {/*  <form className="search-form">
              <InputGroupWrapper className="input-group">
                <span className="input-icon flex items-center justify-center text-xl text-gray">
                  <i className="bi bi-search"></i>
                </span>
                <Input
                  type="text"
                  className="input-control w-full"
                  placeholder="Search"
                />
              </InputGroupWrapper>
            </form> */}
          </NavigationAndSearchWrapper>



          <LanguageSelector />

        </div>
      </Container>
    </HeaderMainWrapper>
  );
};

export default Header;
