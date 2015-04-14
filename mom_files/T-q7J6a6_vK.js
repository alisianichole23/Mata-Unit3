/*!CK:500446652!*//*1427208082,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["\/NrUp"]); }

__d("ChatSidebarDropdown.react",["Arbiter","AsyncRequest","ChatVisibility","ChatConfig","ChatOptions","ChatSidebarDropdownConstants","ChatTabActions","ContextualDialogArrow","ContextualLayerAutoFlip","Link.react","LogHistory","MenuSeparator.react","PopoverMenu.react","PresenceState","React","ReactXUIMenu","TrackingNodes","URI","cx","emptyFunction","fbt","ge","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca){b.__markCompiled&&b.__markCompiled();'use strict';var da=v.Item,ea=v.SelectableItem,fa=v.SelectableMenu,ga=u,ha=ga.PropTypes,ia=q.getInstance('blackbird'),ja=u.createClass({displayName:"ChatSidebarDropdown",propTypes:{className:ha.string,isNormalSidebar:ha.bool,onClickPause:ha.func.isRequired,onHide:ha.func,onShow:ha.func,onToggleSidebar:ha.func.isRequired},getDefaultProps:function(){return {className:'',isNormalSidebar:true,onHide:z,onShow:z};},getInitialState:function(){return {pendingChange:false};},_logVisibilityChange:function(ka,la){var ma=la?'sidebar_dropdown_visibility_error':'sidebar_dropdown_set_visibility';ia.debug(ma,{action:ka});},_changeSound:function(ka,la){if(this.state.pendingChange)return;this.setState({pendingChange:true});var ma={};ma[ka]=!la;k.setSetting(ka,!la,'mini_sidebar_menu');new h('/ajax/chat/settings.php').setHandler(t.doSync).setErrorHandler(function(){return k.setSetting(ka,la,'mini_sidebar_menu_error');}).setFinallyHandler(function(){return this.setState({pendingChange:false});}.bind(this)).setData(ma).setAllowCrossPageTransition(true).send();},_onClickOption:function(ka,la){var ma=true;switch(ka){case l.SOUND:this._changeSound(ka,la);break;case l.ADVANCED_SETTINGS:case l.TURN_OFF_DIALOG:g.inform('chat/advanced-settings-dialog-opened');this._logVisibilityChange(ka,false);break;case l.CLOSE_ALL_TABS:m.closeAllTabs();this._logVisibilityChange(ka,false);break;case l.SIDEBAR:this.props.onToggleSidebar();ma=false;break;case l.ONLINE:!i.isOnline()?i.goOnline():this._logVisibilityChange(ka,true);break;case l.PAUSE:this.props.onClickPause(!la);break;case l.SHOW_APPS:case l.HIDE_APPS:case l.SHOW_TICKER:case l.HIDE_TICKER:break;}if(ma&&this.refs.menu)this.refs.menu.hidePopover();},_onItemClick:function(ka,la){var ma=la.item.getValue(),na=la.item.isSelected&&la.item.isSelected();this._onClickOption(ma,!!na);},_renderChatSoundOption:function(){return (u.createElement(ea,{value:l.SOUND,selected:k.getSetting(l.SOUND)},aa._("Chat Sounds")));},_renderAdvancedSettingsOption:function(){return (u.createElement(da,{href:new x('/ajax/chat/privacy/settings_dialog.php'),rel:"dialog",value:l.ADVANCED_SETTINGS},aa._("Advanced Settings...")));},_renderCloseAllOption:function(){return (u.createElement(da,{value:l.CLOSE_ALL_TABS},aa._("Close All Chat Tabs")));},_renderHideSidebarOption:function(){return (u.createElement(da,{className:"_2xvi",value:l.SIDEBAR},aa._("Hide Sidebar")));},_renderOnlineOption:function(){var ka=i.isOnline(),la=ka?new x('/ajax/chat/privacy/turn_off_dialog.php'):'#',ma=ka?aa._("Turn Off Chat"):aa._("Turn On Chat"),na=ka?l.TURN_OFF_DIALOG:l.ONLINE;return (u.createElement(da,{href:la,rel:ka?'dialog':'',value:na},ma));},_renderAppsOption:function(){if(!j.get('has_apps_option')||!this.props.isNormalSidebar)return null;var ka=j.get('has_games_slider'),la=ka?aa._("Hide Games"):aa._("Show Games"),ma=ka?l.HIDE_APPS:l.SHOW_APPS;return (u.createElement(ea,{value:ma},la));},_renderPauseOption:function(){if(!j.get('has_pause_render_option'))return null;return (u.createElement(ea,{value:l.PAUSE},"Pause Rendering"));},_renderTickerToggleOption:function(){if(!j.get('has_ticker_toggle_option')||!this.props.isNormalSidebar)return null;var ka=ba('pagelet_ticker'),la=ka&&ka.offsetHeight!==0,ma=la?aa._("Hide Ticker"):aa._("Show Ticker"),na=la?l.HIDE_TICKER:l.SHOW_TICKER;return (u.createElement(ea,{value:na},ma));},_renderConditionalSeparator:function(ka){if(!ka)return null;return u.createElement(r,null);},_renderMenu:function(){var ka=!!j.get('has_pause_render_option')||!!j.get('has_ticker_toggle_option');return (u.createElement(fa,{className:'fbChatSidebarDropdown/PopoverMenu',multiple:true,onItemClick:this._onItemClick},this._renderChatSoundOption(),this._renderAdvancedSettingsOption(),this._renderConditionalSeparator(true),this._renderCloseAllOption(),this._renderHideSidebarOption(),this._renderOnlineOption(),this._renderConditionalSeparator(!!j.get('has_apps_option')&&this.props.isNormalSidebar),this._renderAppsOption(),this._renderConditionalSeparator(ka&&this.props.isNormalSidebar),this._renderPauseOption(),this._renderTickerToggleOption()));},render:function(){var ka=aa._("Options"),la=ca(this.props.className,(("_5qth")+(' '+"_5vm9")+(!i.isOnline()?' '+"_5vma":''))),ma=w.getTrackingInfo(w.types.DROPDOWN_BUTTON);return (u.createElement(s,{alignh:"right",alignv:"top",className:la,layerBehaviors:[o,n],menu:this._renderMenu(),onHide:this.props.onHide,onShow:this.props.onShow,ref:"menu"},u.createElement(p,{"aria-label":ka,className:"_5vmb button","data-ft":ma,"data-hover":"tooltip",href:"#"})));}});e.exports=ja;},null);