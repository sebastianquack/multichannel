import React, { Component } from 'react';
import styled from 'styled-components'

import { t } from '../helpers'

class LocaleToggle extends Component {
  render () {
    const localeOptions = ["en", "no"].map((l)=>
      <LocaleOption active={l == this.props.locale} onClick={()=>this.props.setLocale(l)}>{l}</LocaleOption>
    )
    return (
      <div>
        <p>{t(this.props.translations, "language_prompt", this.props.locale)}</p>
        <ul>
          {localeOptions}        
        </ul>
      </div>
    )
  }
}

class Menu extends Component {

  constructor(props) {
    super(props);

    let menuSections = [];
    this.props.translations.forEach((t)=>{
      let myRegexp = /(menu_)(\d+)(_title)/g;
      let match = myRegexp.exec(t.key);
      if(match) {
        if(match.length == 4) {
          menuSections.push({
            open: false,
            titleKey: t.key,
            contentKey: "menu_" + match[2] + "_content",
          });  
        }  
      }
    });
    this.state = { menuSections }
  }

  toggleSection = (index)=>{
    let menuSections = this.state.menuSections;
    menuSections[index].open = !menuSections[index].open;
    this.setState({ menuSections });
  }
  
  render () {

    const menuItems = this.state.menuSections.map((s, index)=>
      <div>
        <MenuSectionTitle 
          onClick={()=>{this.toggleSection(index)}}
        >
          {t(this.props.translations, s.titleKey, this.props.locale)}
        </MenuSectionTitle>
        {s.open && 
          <p>{t(this.props.translations, s.contentKey, this.props.locale)}</p>
        }
      </div>
    )

    return (
      <MenuContainer>
        <ExitButton onClick={this.props.close}>❎</ExitButton>
        <LocaleToggle 
          locale={this.props.locale} 
          setLocale={this.props.setLocale}
          translations={this.props.translations}
        />
        <h1>{t(this.props.translations, "main_title", this.props.locale)}</h1>
        {menuItems}

      </MenuContainer>
    )
  }
}

export default Menu;

const LocaleOption = styled.li`
  text-decoration: ${props=>props.active ? "none" : "underline"};
  :hover {cursor: ${props=>props.active ? "default" : "pointer"}};
`

const MenuSectionTitle = styled.h3`
 :hover {cursor: pointer}; 
`

const ExitButton = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  :hover {cursor: pointer};
`

const MenuContainer = styled.div`
  position: absolute;
  z-index: 50;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: white;
`