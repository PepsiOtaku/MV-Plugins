//=============================================================================
// Menu Background Image Plugin by PepsiOtaku
// PO_MenuBackgroundImage.js
// Version: 1.01
//=============================================================================

var PO = PO || {};
PO.Bg = PO.Bg || {};

/*:
 * @plugindesc Background images in menus. The parameters for individual 
 * backgrounds override the global background parameter.
 * @author PepsiOtaku
 * 
 * @param ---Global Background---
 * @default
 *
 * @param Global
 * @desc background bitmap file in img/parallaxes.
 * @default 
 * 
  * @param ---Individual Backgrounds---
 * @default
 *
 * @param Main Menu
 * @desc background bitmap file in img/parallaxes.
 * @default 
 * 
 * @param Item
 * @desc background bitmap file in img/parallaxes.
 * @default 
 * 
 * @param Skill
 * @desc background bitmap file in img/parallaxes.
 * @default 
 * 
 * @param Equip
 * @desc background bitmap file in img/parallaxes.
 * @default 
 * 
 * @param Status
 * @desc background bitmap file in img/parallaxes.
 * @default 
 * 
 * @param Options
 * @desc background bitmap file in img/parallaxes.
 * @default 
 * 
 * @param File
 * @desc background bitmap file in img/parallaxes.
 * @default 
 * 
 * @param End Game
 * @desc background bitmap file in img/parallaxes.
 * @default 
 * 
 * @param Key Config
 * @desc background bitmap file in img/parallaxes.
 * Requires: KeyboardConfig.js (prioritize before this one)
 * @default 
 * 
 * @param Gamepad Config
 * @desc background bitmap file in img/parallaxes.
 * Requires: GamepadConfig.js (prioritize before this one)
 * @default 
 *
 * @help 
 * ============================================================================
 * Instructions
 * ============================================================================
 * Allows for the use of a background image in the menus. This can be added
 * either as a global background, affecting all menus, or individually,
 * defining different backgrounds for different menus.
 * 
 * The parameters for individual backgrounds override the global background
 * parameter.
 * 
 * Additional plugins supported: 
 *   - KeyboardConfig.js 
 *   - GamepadConfig.js
 *
 * If you find any more plugins that contain menus that this does not work 
 * with, please contact me on RMN or RPGMakerWeb, and I'll add it.
 *
 * This plugin does not provide plugin commands.
 */
//=============================================================================
 
 
//=============================================================================
// Parameter Variables
//=============================================================================
PO.Parameters = PluginManager.parameters('PO_MenuBackgroundImage');
PO.Bg.Global = String(PO.Parameters['Global']);
PO.Bg.Main = String(PO.Parameters['Main Menu']);
PO.Bg.Item = String(PO.Parameters['Item']);
PO.Bg.Skill = String(PO.Parameters['Skill']);
PO.Bg.Equip = String(PO.Parameters['Equip']);
PO.Bg.Status = String(PO.Parameters['Status']);
PO.Bg.Options = String(PO.Parameters['Options']);
PO.Bg.File = String(PO.Parameters['File']);
PO.Bg.GameEnd = String(PO.Parameters['End Game']);
PO.Bg.KeyConfig = String(PO.Parameters['Key Config']);
PO.Bg.GamepadConfig = String(PO.Parameters['Gamepad Config']);

// load bitmap that set in plugin parameter
_Scene_Menu_createBackground = Scene_Menu.prototype.createBackground;
Scene_Menu.prototype.createBackground = function(){
	if(PO.Bg.Global || PO.Bg.Main){
		this._backgroundSprite = new Sprite();
		if (PO.Bg.Main) this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.Main);
		else this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.Global);
		this.addChild(this._backgroundSprite);
		return;
	}
	// if background file is invalid, it does original process.
	_Scene_Menu_createBackground.call(this);
};

_Scene_Item_createBackground = Scene_Item.prototype.createBackground;
Scene_Item.prototype.createBackground = function(){
	if(PO.Bg.Global || PO.Bg.Item){
		this._backgroundSprite = new Sprite();
		if (PO.Bg.Item) this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.Item);
		else this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.Global);
		this.addChild(this._backgroundSprite);
		return;
	}
	// if background file is invalid, it does original process.
	_Scene_Item_createBackground.call(this);
};

_Scene_Skill_createBackground = Scene_Skill.prototype.createBackground;
Scene_Skill.prototype.createBackground = function(){
	if(PO.Bg.Global || PO.Bg.Skill){
		this._backgroundSprite = new Sprite();
		if (PO.Bg.Skill) this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.Skill);
		else this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.Global);
		this.addChild(this._backgroundSprite);
		return;
	}
	// if background file is invalid, it does original process.
	_Scene_Skill_createBackground.call(this);
};

_Scene_Equip_createBackground = Scene_Equip.prototype.createBackground;
Scene_Equip.prototype.createBackground = function(){
	if(PO.Bg.Global || PO.Bg.Equip){
		this._backgroundSprite = new Sprite();
		if (PO.Bg.Equip) this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.Equip);
		else this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.Global);
		this.addChild(this._backgroundSprite);
		return;
	}
	// if background file is invalid, it does original process.
	_Scene_Equip_createBackground.call(this);
};

_Scene_Status_createBackground = Scene_Status.prototype.createBackground;
Scene_Status.prototype.createBackground = function(){
	if(PO.Bg.Global || PO.Bg.Status){
		this._backgroundSprite = new Sprite();
		if (PO.Bg.Status) this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.Status);
		else this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.Global);
		this.addChild(this._backgroundSprite);
		return;
	}
	// if background file is invalid, it does original process.
	_Scene_Status_createBackground.call(this);
};

_Scene_Options_createBackground = Scene_Options.prototype.createBackground;
Scene_Options.prototype.createBackground = function(){
	if(PO.Bg.Global || PO.Bg.Options){
		this._backgroundSprite = new Sprite();
		if (PO.Bg.Options) this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.Options);
		else this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.Global);
		this.addChild(this._backgroundSprite);
		return;
	}
	// if background file is invalid, it does original process.
	_Scene_Options_createBackground.call(this);
};

_Scene_File_createBackground = Scene_File.prototype.createBackground;
Scene_File.prototype.createBackground = function(){
	if(PO.Bg.Global || PO.Bg.File){
		this._backgroundSprite = new Sprite();
		if (PO.Bg.File) this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.File);
		else this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.Global);
		this.addChild(this._backgroundSprite);
		return;
	}
	// if background file is invalid, it does original process.
	_Scene_File_createBackground.call(this);
};

_Scene_GameEnd_createBackground = Scene_GameEnd.prototype.createBackground;
Scene_GameEnd.prototype.createBackground = function(){
	if(PO.Bg.Global || PO.Bg.GameEnd){
		this._backgroundSprite = new Sprite();
		if (PO.Bg.GameEnd) this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.GameEnd);
		else this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.Global);
		this.addChild(this._backgroundSprite);
		return;
	}
	// if background file is invalid, it does original process.
	_Scene_GameEnd_createBackground.call(this);
};

_Scene_KeyConfig_createBackground = Scene_KeyConfig.prototype.createBackground;
Scene_KeyConfig.prototype.createBackground = function(){
	if(PO.Bg.Global || PO.Bg.KeyConfig){
		this._backgroundSprite = new Sprite();
		if (PO.Bg.KeyConfig) this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.KeyConfig);
		else this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.Global);
		this.addChild(this._backgroundSprite);
		return;
	}
	// if background file is invalid, it does original process.
	_Scene_KeyConfig_createBackground.call(this);
};

_Scene_GamepadConfig_createBackground = Scene_GamepadConfig.prototype.createBackground;
Scene_GamepadConfig.prototype.createBackground = function(){
	if(PO.Bg.Global || PO.Bg.GamepadConfig){
		this._backgroundSprite = new Sprite();
		if (PO.Bg.GamepadConfig) this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.GamepadConfig);
		else this._backgroundSprite.bitmap = ImageManager.loadParallax(PO.Bg.Global);
		this.addChild(this._backgroundSprite);
		return;
	}
	// if background file is invalid, it does original process.
	_Scene_GamepadConfig_createBackground.call(this);
};
