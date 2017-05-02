//=============================================================================
// ステート解除時に自動でスキルを発動させるプラグイン
// FTKR_AutoSkillInState.js
// 作成者     : フトコロ
// 作成日     : 2017/04/27
// 最終更新日 : 2017/05/02
// バージョン : v1.0.2
//=============================================================================

var Imported = Imported || {};
Imported.FTKR_ASS = true;

var FTKR = FTKR || {};
FTKR.ASS = FTKR.ASS || {};

//=============================================================================
/*:
 * @plugindesc v1.0.2 ステート解除時に自動でスキルを発動させるプラグイン
 * @author フトコロ
 *
 * @param 
 * @desc 
 * @default 
 *
 * @help 
 *-----------------------------------------------------------------------------
 * 概要
 *-----------------------------------------------------------------------------
 * 以下のタグをステートのメモ欄に追記すると、ステートを解除(*1)したターンの最後に
 * 指定したスキルを自動で発動(*2)させます。
 * 
 * <ASS_解除発動: x>
 *    :x - スキルID
 * 
 * (*1) ステートの解除条件に設定した内容に従います。
 * (*2) スキルの範囲が「敵単体」の場合は、「敵１体ランダム」になります。
 * 
 * 
 * また、以下のタグを追記すると、解除時に最後にダメージを与えた相手(*3)を
 * スキル発動のターゲットにします。
 * 
 * <ASS_リベンジターゲット>
 * 
 * (*3) ダメージ解除の場合は、ダメージを与えた相手です。
 *      解除後にダメージを与えた相手は、ターゲットにしません。
 * 
 * 
 * 解除時に誰にもダメージを与えられていない場合は、スキルの範囲設定に従い
 * スキルを発動します。
 * 
 * 
 *-----------------------------------------------------------------------------
 * 設定方法
 *-----------------------------------------------------------------------------
 * 1.「プラグインマネージャー(プラグイン管理)」に、本プラグインを追加して
 *    ください。
 * 
 * 
 *-----------------------------------------------------------------------------
 * 本プラグインのライセンスについて(License)
 *-----------------------------------------------------------------------------
 * 本プラグインはMITライセンスのもとで公開しています。
 * This plugin is released under the MIT License.
 * 
 * Copyright (c) 2017 Futokoro
 * http://opensource.org/licenses/mit-license.php
 * 
 * 
 *-----------------------------------------------------------------------------
 * 変更来歴
 *-----------------------------------------------------------------------------
 * 
 * v1.0.2 - 2017/05/02 : 例外処理を追加。
 * v1.0.1 - 2017/04/28 : ダメージを与えた相手にスキルを発動する機能追加
 * v1.0.0 - 2017/04/27 : 初版作成
 * 
 *-----------------------------------------------------------------------------
*/
//=============================================================================

//=============================================================================
// プラグイン パラメータ
//=============================================================================
FTKR.ASS.parameters = PluginManager.parameters('FTKR_AutoSkillInState');

//=============================================================================
// BattleManager
//=============================================================================

FTKR.ASS.BattleManager_update = BattleManager.update;
BattleManager.update = function() {
    if (!this.isBusy() && !this.updateEvent()) {
        switch (this._phase) {
        case 'autoSkill':
            this.updateAutoSkill();
            break;
        case 'autoSkillAction':
            this.updateAutoSkillAction();
            break;
        default:
            FTKR.ASS.BattleManager_update.call(this);
            break;
        }
    }
};

FTKR.ASS.BattleManager_startTurn = BattleManager.startTurn;
BattleManager.startTurn = function() {
    this._autoSkills = [];
    FTKR.ASS.BattleManager_startTurn.call(this);
};

FTKR.ASS.BattleManager_endTurn = BattleManager.endTurn;
BattleManager.endTurn = function() {
    FTKR.ASS.BattleManager_endTurn.call(this);
    if (this._autoSkills && this._autoSkills.length) {
        this._phase = 'autoSkill'
    }
};

BattleManager.updateAutoSkill = function() {
    $gameParty.requestMotionRefresh();
    if (!this._subject) {
        var autoSkill = this._autoSkills.shift();
    }
    if (autoSkill) {
        this.startAutoSkillAction(autoSkill);
        this._subject.removeCurrentAction();
    } else {
        this._phase = 'turnEnd';
    }
};

BattleManager.startAutoSkillAction = function(autoSkill) {
    var subject = autoSkill.subject;
    this._subject = subject;
    var action = new Game_Action(subject);
    action.setSkill(autoSkill.id);
    var targets = !!autoSkill.target ? [autoSkill.target] : action.makeTargets();
    this._phase = 'autoSkillAction';
    this._action = action;
    this._targets = targets;
    subject.useItem(action.item());
    this._action.applyGlobal();
    this.refreshStatus();
    this._logWindow.startAction(subject, action, targets);
};

BattleManager.updateAutoSkillAction = function() {
    var target = this._targets.shift();
    if (target) {
        this.invokeAction(this._subject, target);
    } else {
        this.endAutoSkill();
    }
};

BattleManager.endAutoSkill = function() {
    this._logWindow.endAction(this._subject);
    this._phase = 'autoSkill';
};

//=============================================================================
// Game_Battler
//=============================================================================

FTKR.ASS.Game_Battler_initMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function() {
    FTKR.ASS.Game_Battler_initMembers.call(this);
    this._revenge = {id:-1, opponent:false};
};

//書き換え
Game_Battler.prototype.removeStatesAuto = function(timing) {
    this.states().forEach(function(state) {
        if (this.isStateExpired(state.id) && state.autoRemovalTiming === timing) {
            this.setAssAutoSkill(state);
            this.removeState(state.id);
        }
    }, this);
};

//書き換え
Game_Battler.prototype.removeStatesByDamage = function() {
    this.states().forEach(function(state) {
        if (state.removeByDamage && Math.randomInt(100) < state.chanceByDamage) {
            this.setAssAutoSkill(state);
            this.removeState(state.id);
        }
    }, this);
};

Game_Battler.prototype.setAssAutoSkill = function(obj) {
    var skillId = Number(obj.meta['ASS_解除発動']);
    var target = obj.meta['ASS_リベンジターゲット'] ? this.revengeTarget() : null;
    if (skillId) BattleManager._autoSkills.push({id:skillId, subject:this, target:target});
};

Game_Battler.prototype.revengeTarget = function() {
    var revenge = this._revenge;
    if (!revenge || revenge.id === -1) return null;
    if (revenge.opponent) {
        return $gameTroop.members()[revenge.id];
    } else {
        return $gameParty.members()[revenge.id];
    }
};

//=============================================================================
// Game_Action
//=============================================================================

FTKR.ASS.Game_Action_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
    FTKR.ASS.Game_Action_apply.call(this, target);
    var result = target.result();
    if (result.isHit() && (result.hpDamage || result.mpDamage)) {
        this.setRevengeTarget(target);
    }
};

Game_Action.prototype.setRevengeTarget = function(target) {
    var memberId = -1;
    var subject = this.subject();
    if (subject.isEnemy()) {
        $gameTroop.members().forEach( function(member, i){
            if (member === subject) memberId = i;
        });
    } else {
        $gameParty.members().forEach( function(member, i){
            if (member === subject) memberId = i;
        });
    }
    target._revenge = {
        id : memberId,
        opponent : subject.isEnemy()
    };
};