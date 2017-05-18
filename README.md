# RPGツクールMV プラグイン

# 目次

1. [ステータス](#ステータス)
1. [変数_スイッチ](#変数_スイッチ)
1. [ウィンドウ](#ウィンドウ)
1. [メッセージ](#メッセージ)
1. [アイテム_スキル仕様拡張](#アイテム_スキル仕様拡張)
1. [スキル](#スキル)
1. [アイテム](#アイテム)
1. [デバッグ](#デバッグ)
1. [その他備忘録](#その他備忘録)
1. [試作品置き場](#試作品置き場)

# ステータス

| プラグイン | マニュアル | ダウンロード | 更新日 |  説明 |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_AddOriginalParameters](FTKR_AddOriginalParameters.js) | [あり](FTKR_AddOriginalParameters.ja.md) | [v1.1.4](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_AddOriginalParameters.js) | 2017/04/30 |オリジナルパラメータを追加する |
| [FTKR_SearchPartyParam](FTKR_SearchPartyParam.js) | [あり](FTKR_SearchPartyParam.ja.md) | [v1.0.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SearchPartyParam.js) | 2017/04/14 | パーティー内のパラメータに関するスクリプトを実装する |
| [FTKR_ExSvMotion](FTKR_ExSvMotion.js) | [仮版](FTKR_ExSvMotion.ja.md) | [v1.2.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExSvMotion.js) | 2017/05/11 | SVキャラのモーションを拡張する |
| [FTKR_ExMetaData](ExMetaData.js) | [あり](FTKR_ExMetaData.ja.md) | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExMetaData.js) | 2017/05/05 | 敵グループとイベントのメタデータを拡張する |
| [FTKR_FacialImageDifference](FTKR_FacialImageDifference.js) | [仮版](FTKR_FacialImageDifference.ja.md) | [v1.0.3](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_FacialImageDifference.js) | 2017/05/18 | アクターの状態によって顔画像を変える |

## ステータス表示の変更

| プラグイン | マニュアル | ダウンロード | 更新日 |  説明 |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js) | [あり](FTKR_CustomSimpleActorStatus.ja.md) | [v1.5.3](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_CustomSimpleActorStatus.js) | 2017/05/13 | メニュー画面のステータス表示を変更する |
| [FTKR_CSS_BattleStatus](CSS_BattleStatus.js) | [あり](FTKR_CSS_BattleStatus.ja.md) | [v1.1.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_CSS_BattleStatus.js) | 2017/05/11 | バトル画面のステータス表示を変更する <br> ＜以下のプラグインが必要＞ <br> [FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js) |
| [FTKR_CSS_DetailedStatus](CSS_DetailedStatus.js) | [あり](FTKR_CSS_DetailedStatus.ja.md) | [v1.0.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_CSS_DetailedStatus.js) | 2017/05/13 | ステータス画面のステータス表示を変更する <br> ＜以下のプラグインが必要＞ <br> [FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js) |
| [FTKR_CSS_SkillStatus](CSS_SkillStatus.js) | [あり](FTKR_CSS_SkillStatus.ja.md) | [v1.0.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_CSS_SkillStatus.js) | 2017/05/08 | スキル画面のステータス表示を変更する <br> ＜以下のプラグインが必要＞ <br> [FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js) |
| [FTKR_CSS_EquipStatus](CSS_EquipStatus.js) | [仮版](FTKR_CSS_EquipStatus.ja.md) | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_CSS_EquipStatus.js) | 2017/05/13 | 装備画面のステータス表示を変更する <br> ＜以下のプラグインが必要＞ <br> [FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js) |

[目次に戻る](#目次)

# 変数_スイッチ

| プラグイン | マニュアル | ダウンロード | 更新日 |  説明 |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_ItemSelfVariables](FTKR_ItemSelfVariables.js) | [あり](FTKR_ItemSelfVariables.ja.md) | [v1.1.3](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ItemSelfVariables.js) | 2017/05/03 | アイテム、スキル、アクター、エネミーにセルフ変数を追加する |
| [FTKR_ExVariablesChange](FTKR_ExVariablesChange.js) | [仮版](FTKR_ExVariablesChange.ja.md) | [v1.1.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExVariablesChange.js) | 2017/05/11 | 変数の操作を拡張するプラグイン |
| [FTKR_EventSelfSwOperation](FTKR_EventSelfSwOperation.js) | なし | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_EventSelfSwOperation.js) | 2017/04/25 | イベントのセルフスイッチを操作するプラグイン |

[目次に戻る](#目次)

# ウィンドウ

| プラグイン | マニュアル | ダウンロード | 更新日 |  説明 |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_DisplayCommandFrame](FTKR_DisplayCommandFrame.js) | [仮版](FTKR_DisplayCommandFrame.ja.md) | [v1.1.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_DisplayCommandFrame.js) | 2017/04/21 | コマンドに枠を付ける |

[目次に戻る](#目次)

# メッセージ

| プラグイン | マニュアル | ダウンロード | 更新日 |  説明 |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_ExEscapeCharacters](FTKR_ExEscapeCharacters.js) | [仮版](FTKR_ExEscapeCharacters.ja.md) | [v1.0.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExEscapeCharacters.js) | 2017/03/28 | 制御文字を追加する |
| [FTKR_ExMessageWindow](FTKR_ExMessageWindow.js) | [仮版](FTKR_ExMessageWindow.ja.md) | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExMessageWindow.js) | 2017/03/28 | 制御文字を使って、一度に複数のメッセージウィンドウを表示する |
| [FTKR_ExMessageWindow2](FTKR_ExMessageWindow2.js) | [仮版](FTKR_ExMessageWindow2.ja.md) | [v2.0.13](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExMessageWindow2.js) | 2017/05/14 | 文章の表示コマンドを使って、一度に複数のメッセージウィンドウを表示する <br> FTKR_ExMessageWindowと組み合わせて使用できません |

[目次に戻る](#目次)

# アイテム_スキル仕様拡張

| プラグイン | マニュアル | ダウンロード | 更新日 |  説明 |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_ExItemConfig_ItemBasic](FTKR_ExItemConfig_ItemBasic.js) | [仮版](FTKR_ExItemConifg_ItemBasic.ja.md) | [v1.1.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExItemConfig_ItemBasic.js) | 2017/04/29 | アイテムとスキルの基本設定を拡張する |
| [FTKR_ExItemConfig_IB_SkillCost](FTKR_ExItemConfig_IB_SkillCost.js) | [仮版](FTKR_ExItemConfig_IB_SkillCost.ja.md) | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExItemConfig_IB_SkillCost.js) | 2017/04/30 | スキルの消費コストを拡張する <br> ＜以下のプラグインが必要＞<br>[FTKR_ExItemConfig_ItemBasic](FTKR_ExItemConfig_ItemBasic.js) |
| [FTKR_ExItemConfig_Damage](FTKR_ExItemConfig_Damage.js) | [仮版](FTKR_ExItemConfig_Damage.ja.md) | [v1.0.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExItemConfig_Damage.js) | 2017/04/29 | アイテムとスキルのダメージ処理を拡張する |
| [FTKR_ExItemConfig_Effect](FTKR_ExItemConfig_Effect.js) | [仮版](FTKR_ExItemConfig_Effect.ja.md) | [v1.1.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExItemConfig_Effect.js) | 2017/05/11 | アイテムとスキルの使用効果を拡張する |
| [FTKR_ExItemConfig_Activate](FTKR_ExItemConfig_Activate.js) | [仮版](FTKR_ExItemConfig_Activate.ja.md) | [v1.0.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExItemConfig_Activate.js) | 2017/05/11 | アイテムとスキルの発動設定を拡張する |
| [FTKR_ExItemConfig_Required](FTKR_ExItemConfig_Required.js) | [仮版](FTKR_ExItemConfig_Required.ja.md) | [v1.0.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExItemConfig_Required.js) | 2017/04/29 | アイテムとスキルの使用条件を拡張する |

注意）FTKR_ExItemConfig_* と FTKR_SkillExpansion は組み合わせて使用できません。

[目次に戻る](#目次)

# スキル

| プラグイン | マニュアル | ダウンロード | 更新日 |  説明 |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_SkillCounter](FTKR_SkillCounter.js) | [あり](FTKR_SkillCounter.ja.md) | [v1.0.5](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SkillCounter.js) | 2017/04/29 | 相手のスキルに対抗して効果を変える |
| [FTKR_SkillSubCommand](FTKR_SkillSubCommand.js) | [仮版](FTKR_SkillSubCommand.ja.md) | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SkillSubCommand.js) | 2017/04/15 | スキル画面にサブコマンドを追加する <br> FTKR_SEP_ShowSkillStatusと組み合わせて使用できません |
| [FTKR_AutoInvokeSkill](FTKR_AutoInvokeSkill.js) | なし | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_AutoInvokeSkill.js) | 2017/05/03 | 特定条件で自動でスキルを発動させる |

## スキル強化システム

| プラグイン | マニュアル | ダウンロード | 更新日 |  説明 |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_SkillExpansion](FTKR_SkillExpansion.js) | [仮版](FTKR_SkillExpansion.ja.md) | [v1.3.3](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SkillExpansion.js) | 2017/04/09 | スキルの仕様を拡張する |
| [FTKR_SEP_ShowSkillStatus](FTKR_SEP_ShowSkillStatus.js) | 作成中 | [v1.4.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SEP_ShowSkillStatus.js) | 2017/04/04 | スキル画面の表示を拡張する <br> ＜以下のプラグインが必要＞ <br> [FTKR_SkillExpansion](FTKR_SkillExpansion.js) |
| [FTKR_SkillUpgradeSystem_Core](FTKR_SkillUpgradeSystem_Core.js) | [ツクマテ](http://tm.lucky-duet.com/viewtopic.php?f=5&t=3076) | [v1.4.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SkillUpgradeSystem_Core.js) | 2017/03/16 | スキル強化システム <br> ＜以下のプラグインが必要＞ <br>[FTKR_SkillExpansion](FTKR_SkillExpansion.js) |
| [FTKR_SkillUpgradeSystem_Window](FTKR_SkillUpgradeSystem_Window.js) | 作成中 | [v1.4.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SkillUpgradeSystem_Window.js) | 2017/03/16 | スキル強化システムの専用画面を実装する <br> ＜以下のプラグインが必要＞ <br>[FTKR_SkillExpansion](FTKR_SkillExpansion.js) <br>[FTKR_SEP_ShowSkillStatus](FTKR_SEP_ShowSkillStatus.js) <br> [FTKR_SkillUpgradeSystem_Core](FTKR_SkillUpgradeSystem_Core.js)|

## スキルツリーシステム

| プラグイン | マニュアル | ダウンロード | 更新日 |  説明 |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_SkillTreeSystem](FTKR_SkillTreeSystem.js) | [あり](FTKR_SkillTreeSystem.ja.md) | [v1.7.3](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SkillTreeSystem.js) | 2017/05/18 | ツリー型のスキル習得システム |
| [FTKR_STS_CustomWindow](FTKR_STS_CustomWindow.js) | [仮版](FTKR_STS_CustomWindow.ja.md) | [v1.1.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_STS_CustomWindow.js) | 2017/04/22 | スキルツリー習得画面のレイアウトを変更する <br> ＜以下のプラグインが必要＞ <br> [FTKR_SkillTreeSystem](FTKR_SkillTreeSystem.js) |

[目次に戻る](#目次)

# アイテム

| プラグイン | マニュアル | ダウンロード | 更新日 |  説明 |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_ItemNonScope](FTKR_ItemNonScope.js) | [仮版](FTKR_ItemNonScope.ja.md) | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ItemNonScope.js) | 2017/04/19 | アイテムが範囲なしの場合にパーティーの全メンバーを対象にする |

[目次に戻る](#目次)

# ステート

| プラグイン | マニュアル | ダウンロード | 更新日 |  説明 |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_TransformationState](FTKR_TransformationState.js) | なし | [v1.0.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_TransformationState.js) | 2017/05/03 | ステートが掛かっている間SV画像を変更する |
| [FTKR_AutoStateConditions](FTKR_AutoStateConditions.js) | なし | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_AutoStateConditions.js) | 2017/05/02 | ステートに自動付与条件および自動解除条件を設定する |

[目次に戻る](#目次)

# デバッグ

| プラグイン | マニュアル | ダウンロード | 更新日 |  説明 |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_IgnoreScriptError](FTKR_IgnoreScriptError.js) | なし | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_IgnoreScriptError.js) | 2017/05/03 | イベントで実行するスクリプトのエラーを無視する |

[目次に戻る](#目次)

# その他備忘録

* [コードリスト](Code_List.ja.md)

# 試作品置き場

| プラグイン | マニュアル | ダウンロード | 更新日 |  説明 |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_ItemCompositionSystem](FTKR_ItemCompositionSystem.js) | [仮版](FTKR_ItemCompositionSystem.ja.md) | [v0.9.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ItemCompositionSystem.js) | 2017/04/14 | アイテム合成システム |
| [FTKR_ActionGauge](FTKR_ActionGauge.js) | なし | [v0.7.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ActionGauge.js) | 2017/04/21 | アクションゲージ |

#

[目次に戻る](#目次)