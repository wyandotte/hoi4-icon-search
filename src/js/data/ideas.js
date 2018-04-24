const ideas = [
  {
    "name": "combined_bomber_offensive",
    "image": "assets/images/ideas/combined_bomber_offensive.png",
    "tags": ["vanilla", "bomb", "air"],
  },

  {
    "name": "office_of_strategic_services",
    "image": "assets/images/ideas/office_of_strategic_services.png",
    "tags": ["vanilla"],
  },

  {
    "name": "FRA_matignon_agreements",
    "image": "assets/images/ideas/FRA_matignon_agreements.png",
    "tags": ["vanilla", "fist", "revolution"],
  },

  {
    "name": "FRA_factory_strikes",
    "image": "assets/images/ideas/FRA_factory_strikes.png",
    "tags": ["vanilla", "bomb", "strike"],
  },

  {
    "name": "FRA_army_of_aggression_focus",
    "image": "assets/images/ideas/FRA_army_of_aggression_focus.png",
    "tags": ["vanilla", "wolf"],
  },

  {
    "name": "FRA_national_mobilization_focus",
    "image": "assets/images/ideas/FRA_national_mobilization_focus.png",
    "tags": ["vanilla", "trumpet", "mobilization"],
  },

  {
    "name": "FRA_scw_intervention_nationalists_focus",
    "image": "assets/images/ideas/FRA_scw_intervention_nationalists_focus.png",
    "tags": ["vanilla", "sword"],
  },

  {
    "name": "FRA_scw_intervention_republicans_focus",
    "image": "assets/images/ideas/FRA_scw_intervention_republicans_focus.png",
    "tags": ["vanilla", "fist"],
  },

  {
    "name": "FRA_motorized_focus",
    "image": "assets/images/ideas/FRA_motorized_focus.png",
    "tags": ["vanilla", "motorized"],
  },

  {
    "name": "FRA_fortification_focus",
    "image": "assets/images/ideas/FRA_fortification_focus.png",
    "tags": ["vanilla", "fort", "defense"],
  },

  {
    "name": "SOV_scientist_defect",
    "image": "assets/images/ideas/SOV_scientist_defect.png",
    "tags": ["vanilla", "suitcase"],
  },

  {
    "name": "socialist_science_focus",
    "image": "assets/images/ideas/socialist_science_focus.png",
    "tags": ["vanilla", "socialist", "syndicalist", "communist", "lenin"],
  },

  {
    "name": "nkvd",
    "image": "assets/images/ideas/nkvd.png",
    "tags": ["vanilla", "syndicalist", "communist", "sword"],
  },

  {
    "name": "nkvd_2",
    "image": "assets/images/ideas/nkvd_2.png",
    "tags": ["vanilla", "syndicalist", "communist", "sword"],
  },

  {
    "name": "warrior_traditions_idea",
    "image": "assets/images/ideas/warrior_traditions_idea.png",
    "tags": ["vanilla", "japan", "sword"],
  },

  {
    "name": "imperial_glory_idea",
    "image": "assets/images/ideas/imperial_glory_idea.png",
    "tags": ["vanilla", "japan"],
  },

  {
    "name": "the_long_lance",
    "image": "assets/images/ideas/the_long_lance.png",
    "tags": ["vanilla", "torpedo", "submarine", "navy"],
  },

  {
    "name": "air_support_focus",
    "image": "assets/images/ideas/air_support_focus.png",
    "tags": ["vanilla", "air"],
  },

  {
    "name": "strategic_bombing_focus",
    "image": "assets/images/ideas/strategic_bombing_focus.png",
    "tags": ["vanilla", "bomb", "air"],
  },

  {
    "name": "air_war_plans_division_focus",
    "image": "assets/images/ideas/air_war_plans_division_focus.png",
    "tags": ["vanilla", "air", "skull"],
  },

  {
    "name": "escort_effort_focus",
    "image": "assets/images/ideas/escort_effort_focus.png",
    "tags": ["vanilla", "navy", "anchor"],
  },

  {
    "name": "liberty_ships_focus",
    "image": "assets/images/ideas/liberty_ships_focus.png",
    "tags": ["vanilla", "navy"],
  },

  {
    "name": "stiff_upper_lip",
    "image": "assets/images/ideas/brittish_stoicism.png",
    "tags": ["vanilla", "crown", "great britain", "united kingdom"],
  },

  {
    "name": "ENG_the_war_to_end_all_wars",
    "image": "assets/images/ideas/the_war_to_end_all_wars.png",
    "tags": ["vanilla", "cross"],
  },

  {
    "name": "vittoria_mutilata",
    "image": "assets/images/ideas/vittoria_mutilata.png",
    "tags": ["vanilla", "eagle"],
  },

  {
    "name": "home_of_revolution",
    "image": "assets/images/ideas/home_of_the_revolution.png",
    "tags": ["vanilla", "syndicalist", "communist"],
  },

  {
    "name": "state_shintoism",
    "image": "assets/images/ideas/state_shintoism.png",
    "tags": ["vanilla", "japan"],
  },

  {
    "name": "neutrality_idea",
    "image": "assets/images/ideas/neutrality_idea.png",
    "tags": ["vanilla", "neutral"],
  },

  {
    "name": "soviet_german_friendship",
    "image": "assets/images/ideas/soviet_german_friendship.png",
    "tags": ["vanilla"],
  },

  {
    "name": "anti_soviet_pact",
    "image": "assets/images/ideas/anti_soviet_pact.png",
    "tags": ["vanilla"],
  },

  {
    "name": "officers_purged",
    "image": "assets/images/ideas/officers_purged.png",
    "tags": ["vanilla", "syndicalist", "communist"],
  },

  {
    "name": "trotskyite_plot_purged",
    "image": "assets/images/ideas/trotskyite_plot_purged.png",
    "tags": ["vanilla", "syndicalist", "communist"],
  },

  {
    "name": "fourth_international",
    "image": "assets/images/ideas/fourth_international.png",
    "tags": ["vanilla", "syndicalist", "communist"],
  },

  {
    "name": "trotskyite_plot",
    "image": "assets/images/ideas/trotskyite_plot.png",
    "tags": ["vanilla", "syndicalist", "communist"],
  },

  {
    "name": "wilkies_new_deal",
    "image": "assets/images/ideas/wilkies_new_deal.png",
    "tags": ["vanilla"],
  },

  {
    "name": "new_deal",
    "image": "assets/images/ideas/new_deal.png",
    "tags": ["vanilla"],
  },

  {
    "name": "great_depression",
    "image": "assets/images/ideas/great_depression.png",
    "tags": ["vanilla"],
  },

  {
    "name": "triumphant_will",
    "image": "assets/images/ideas/triumphant_will.png",
    "tags": ["vanilla", "eagle"],
  },

  {
    "name": "sisu",
    "image": "assets/images/ideas/sisu.png",
    "tags": ["vanilla", "sword", "finland"],
  },

  {
    "name": "german_advisors",
    "image": "assets/images/ideas/german_advisors.png",
    "tags": ["vanilla", "germany"],
  },

  {
    "name": "generic_wall_line",
    "image": "assets/images/ideas/generic_wall_line.png",
    "tags": ["vanilla", "fort", "defense"],
  },

  {
    "name": "generic_disjointed_gov",
    "image": "assets/images/ideas/generic_disjointed_gov.png",
    "tags": ["vanilla"],
  },

  {
    "name": "generic_victors_of_ww1",
    "image": "assets/images/ideas/generic_victors_of_ww1.png",
    "tags": ["vanilla"],
  },

  {
    "name": "generic_democratic_drift_bonus",
    "image": "assets/images/ideas/generic_democratic_drift_bonus.png",
    "tags": ["vanilla", "democracy"],
  },

  {
    "name": "generic_fascism_drift_bonus",
    "image": "assets/images/ideas/generic_fascism_drift_bonus.png",
    "tags": ["vanilla", "fascist"],
  },

  {
    "name": "generic_communism_drift_bonus",
    "image": "assets/images/ideas/generic_communism_drift_bonus.png",
    "tags": ["vanilla", "syndicalist", "communist"],
  },

  {
    "name": "generic_intel_bonus",
    "image": "assets/images/ideas/generic_intel_bonus.png",
    "tags": ["vanilla", "fist"],
  },

  {
    "name": "generic_volunteer_expedition_bonus",
    "image": "assets/images/ideas/generic_volunteer_expedition_bonus.png",
    "tags": ["vanilla", "volunteer"],
  },

  {
    "name": "generic_production_bonus",
    "image": "assets/images/ideas/generic_production_bonus.png",
    "tags": ["vanilla", "production", "construction", "factory"],
  },

  {
    "name": "generic_manpower_bonus",
    "image": "assets/images/ideas/generic_manpower_bonus.png",
    "tags": ["vanilla", "manpower"],
  },

  {
    "name": "generic_research_bonus",
    "image": "assets/images/ideas/generic_research_bonus.png",
    "tags": ["vanilla", "research"],
  },

  {
    "name": "generic_pp_unity_bonus",
    "image": "assets/images/ideas/generic_pp_unity_bonus.png",
    "tags": ["vanilla", "neutral", "political power"],
  },

  {
    "name": "generic_goods_red_bonus",
    "image": "assets/images/ideas/generic_goods_red_bonus.png",
    "tags": ["vanilla", "consumer goods", "production", "factory"],
  },

  {
    "name": "generic_morale_bonus",
    "image": "assets/images/ideas/generic_morale_bonus.png",
    "tags": ["vanilla"],
  },

  {
    "name": "generic_navy_bonus",
    "image": "assets/images/ideas/generic_navy_bonus.png",
    "tags": ["vanilla", "navy"],
  },

  {
    "name": "generic_infantry_bonus",
    "image": "assets/images/ideas/generic_infantry_bonus.png",
    "tags": ["vanilla", "infantry", "soldiers"],
  },

  {
    "name": "generic_air_bonus",
    "image": "assets/images/ideas/generic_air_bonus.png",
    "tags": ["vanilla", "air"],
  },

  {
    "name": "generic_spy_intel",
    "image": "assets/images/ideas/generic_spy_intel.png",
    "tags": ["vanilla", "intelligence", "spy"],
  },

  {
    "name": "generic_spy_political",
    "image": "assets/images/ideas/generic_spy_political.png",
    "tags": ["vanilla", "intelligence", "spy"],
  },

  {
    "name": "generic_spy_coup",
    "image": "assets/images/ideas/generic_spy_coup.png",
    "tags": ["vanilla", "intelligence", "spy"],
  },

  {
		"name": "generic_degauss_ship_hulls",
    "tags": ["vanilla", "tfv", "navy"],
		"image": "assets/images/ideas/idea_generic_degauss_ship_hulls.png"
	},

	{
		"name": "generic_agrarian_society",
		"image": "assets/images/ideas/idea_generic_agrarian_society.png",
    "tags": ["vanilla", "tfv", "agrarian"],
	},

	{
		"name": "raj_all_india_forward_bloc",
		"image": "assets/images/ideas/idea_raj_all_india_forward_bloc.png",
    "tags": ["vanilla", "tfv", "india"],
	},

	{
		"name": "raj_all_india_forward_bloc_communism",
		"image": "assets/images/ideas/idea_raj_all_india_forward_bloc_communism.png",
    "tags": ["vanilla", "tfv", "india", "communist", "syndicalist"],
	},

	{
		"name": "raj_all_india_forward_bloc_fascism",
		"image": "assets/images/ideas/idea_raj_all_india_forward_bloc_fascism.png",
    "tags": ["vanilla", "tfv", "india", "fascist"],
	},

	{
		"name": "raj_marginalized_muslim_community",
		"image": "assets/images/ideas/idea_raj_marginalized_muslim_community.png",
    "tags": ["vanilla", "tfv", "muslim"],
	},

	{
		"name": "raj_marginalized_muslim_community_angry",
		"image": "assets/images/ideas/idea_raj_marginalized_muslim_community_angry.png",
    "tags": ["vanilla", "tfv", "muslim"],
	},

	{
		"name": "raj_marginalized_muslim_community_happy",
		"image": "assets/images/ideas/idea_raj_marginalized_muslim_community_happy.png",
    "tags": ["vanilla", "tfv", "muslim"],
	},

	{
	 	"name": "raj_risk_of_famine",
	 	"image": "assets/images/ideas/idea_raj_risk_of_famine.png",
    "tags": ["vanilla", "tfv", "famine"],
  },

	{
		"name": "raj_indian_gentlemen_officers",
		"image": "assets/images/ideas/idea_raj_indian_gentlemen_officers.png",
    "tags": ["vanilla", "tfv", "sword"],
	},

	{
		"name": "ast_all_in",
		"image": "assets/images/ideas/idea_ast_all_in.png",
    "tags": ["vanilla", "tfv", "production", "construction"],
	},

	{
		"name": "ast_abandon_the_westminster_system",
		"image": "assets/images/ideas/idea_ast_abandon_the_westminster_system.png",
    "tags": ["vanilla", "tfv", "crown", "fist"],
	},

	{
		"name": "ast_abandon_the_westminster_system_communism",
		"image": "assets/images/ideas/idea_ast_abandon_the_westminster_system_communism.png",
    "tags": ["vanilla", "tfv", "crown", "communist", "syndicalist"],
	},

	{
		"name": "ast_abandon_the_westminster_system_fascism",
		"image": "assets/images/ideas/idea_ast_abandon_the_westminster_system_fascism.png",
    "tags": ["vanilla", "tfv", "crown", "fascist"],
	},

	{
		"name": "ast_classify_aliens",
		"image": "assets/images/ideas/idea_ast_classify_aliens.png",
    "tags": ["vanilla", "tfv", "handcuffs"],
	},

	{
		"name": "ast_naval_auxiliary_patrol",
		"image": "assets/images/ideas/idea_ast_naval_auxiliary_patrol.png",
    "tags": ["vanilla", "tfv", "fort", "defense"],
	},

	{
		"name": "ast_volunteer_defence_corps",
		"image": "assets/images/ideas/idea_ast_volunteer_defence_corps.png",
    "tags": ["vanilla", "tfv", "infantry"],
	},

	{
		"name": "tfv_can_conscription_crisis",
		"image": "assets/images/ideas/idea_tfv_can_conscription_crisis.png",
    "tags": ["vanilla", "tfv", "soldiers"],
	},

	{
		"name": "can_defence_of_canada_regulations_communism",
		"image": "assets/images/ideas/idea_can_defence_of_canada_regulations_communism.png",
    "tags": ["vanilla", "tfv", "canada"],
	},

	{
		"name": "can_defence_of_canada_regulations_democratic",
		"image": "assets/images/ideas/idea_can_defence_of_canada_regulations_democratic.png",
    "tags": ["vanilla", "tfv", "canada", "democracy"],
	},

	{
		"name": "can_defence_of_canada_regulations_fascism",
		"image": "assets/images/ideas/idea_can_defence_of_canada_regulations_fascism.png",
    "tags": ["vanilla", "tfv", "canada", "fascist"],
	},

	{
		"name": "can_patriation",
		"image": "assets/images/ideas/idea_can_patriation.png",
    "tags": ["vanilla", "tfv", "crown"],
	},

	{
		"name": "can_send_in_the_zombies",
		"image": "assets/images/ideas/idea_can_send_in_the_zombies.png",
    "tags": ["vanilla", "tfv", "canada", "soldiers"],
	},

	{
		"name": "can_wartime_prices_and_trade_board",
		"image": "assets/images/ideas/idea_can_wartime_prices_and_trade_board.png",
    "tags": ["vanilla", "tfv", "trade"],
	},

	{
		"name": "saf_ossewabrandwag",
		"image": "assets/images/ideas/idea_saf_ossewabrandwag.png",
    "tags": ["vanilla", "tfv", "fascist"],
	},

	{
		"name": "saf_history_of_segregation",
		"image": "assets/images/ideas/idea_saf_history_of_segregation.png",
    "tags": ["vanilla", "tfv", "segregation"],
	},

	{
		"name": "saf_history_of_segregation_2",
		"image": "assets/images/ideas/idea_saf_history_of_segregation_2.png",
    "tags": ["vanilla", "tfv", "segregation"],
	},

	{
		"name": "saf_ossewabrandwag_2",
		"image": "assets/images/ideas/idea_saf_ossewabrandwag_2.png",
    "tags": ["vanilla", "tfv", "fascist"],
	},

	{
		"name": "saf_ossewabrandwag_fascism",
		"image": "assets/images/ideas/idea_saf_ossewabrandwag_fascism.png",
    "tags": ["vanilla", "tfv", "fascist"],
	},

	{
		"name": "saf_soviet_advisers",
		"image": "assets/images/ideas/idea_saf_soviet_advisers.png",
    "tags": ["vanilla", "tfv", "communist", "syndicalist"],
	},

  {
    "name": "economic_control_icon",
    "image": "assets/images/ideas/economic_control_icon.png",
    "tags": ["Kaiserreich", "KR", "fist", "production", "construction"],
  },

  {
    "name": "state_economy",
    "image": "assets/images/ideas/state_economy.png",
    "tags": ["Kaiserreich", "KR"],
  },

  {
    "name": "uncompetitive_eco",
    "image": "assets/images/ideas/FRA_matignon_agreements.png",
    "tags": ["Kaiserreich", "KR", "fist"],
  },
  {
    "name": "totalist_charta",
    "image": "assets/images/ideas/generic_volunteer_expedition_bonus.png",
    "tags": ["Kaiserreich", "KR", "fist"],
  },

  {
    "name": "country_focus_efficency",
    "image": "assets/images/ideas/generic_production_bonus.png",
    "tags": ["Kaiserreich", "KR", "production", "construction"],
  },

  {
    "name": "country_focus_political",
    "image": "assets/images/ideas/SOV_scientist_defect.png",
    "tags": ["Kaiserreich", "KR", "suitcase"],
  },

  {
    "name": "country_focus_army",
    "image": "assets/images/ideas/generic_manpower_bonus.png",
    "tags": ["Kaiserreich", "KR", "soldiers"],
  },

  {
    "name": "protesters_shot_icon",
    "image": "assets/images/ideas/protesters_shot_icon.png",
    "tags": ["Kaiserreich", "KR", "newspaper"],
  },

  {
    "name": "quenched_militarism",
    "image": "assets/images/ideas/quenched_militarism.png",
    "tags": ["Kaiserreich", "KR"],
  },

  {
    "name": "generic_army",
    "image": "assets/images/ideas/idea_generic_army.png",
    "tags": ["Kaiserreich", "KR"],
  },

  {
    "name": "generic_navy",
    "image": "assets/images/ideas/idea_generic_navy.png",
    "tags": ["Kaiserreich", "KR", "anchor", "ship", "navy"],
  },

  {
    "name": "generic_trade",
    "image": "assets/images/ideas/idea_generic_trade.png",
    "tags": ["Kaiserreich", "KR", "trade"],
  },

  {
    "name": "guns_shield",
    "image": "assets/images/ideas/idea_guns_shield.png",
    "tags": ["Kaiserreich", "KR", "guns", "shield"],
  },

  {
    "name": "advisors_italysoc",
    "image": "assets/images/ideas/idea_advisors_italysoc.png",
    "tags": ["Kaiserreich", "KR", "cap", "advisors", "italy"],
  },

  {
    "name": "advisors_natfrance",
    "image": "assets/images/ideas/idea_advisors_natfrance.png",
    "tags": ["Kaiserreich", "KR", "cap", "advisors", "france"],
  },

  {
    "name": "advisors_portugal",
    "image": "assets/images/ideas/idea_advisors_portugal.png",
    "tags": ["Kaiserreich", "KR", "cap", "advisors", "portugal"],
  },

  {
    "name": "advisors_russia",
    "image": "assets/images/ideas/idea_advisors_russia.png",
    "tags": ["Kaiserreich", "KR", "cap", "advisors", "russia"],
  },

  {
    "name": "advisors_soviet",
    "image": "assets/images/ideas/idea_advisors_soviet.png",
    "tags": ["Kaiserreich", "KR", "cap", "advisors", "soviet"],
  },

  {
    "name": "generic_airforce",
    "image": "assets/images/ideas/idea_generic_airforce.png",
    "tags": ["Kaiserreich", "KR", "air"],
  },

  {
    "name": "advisors_england",
    "image": "assets/images/ideas/idea_advisors_england.png",
    "tags": ["Kaiserreich", "KR", "cap", "advisors", "britain"],
  },

  {
    "name": "advisors_france",
    "image": "assets/images/ideas/idea_advisors_france.png",
    "tags": ["Kaiserreich", "KR", "cap", "advisors", "france"],
  },

  {
    "name": "advisors_germany",
    "image": "assets/images/ideas/idea_advisors_germany.png",
    "tags": ["Kaiserreich", "KR", "cap", "advisors", "germany"],
  },

  {
    "name": "advisors_italianfed",
    "image": "assets/images/ideas/idea_advisors_italianfed.png",
    "tags": ["Kaiserreich", "KR", "cap", "advisors", "italy"],
  },

  {
    "name": "advisors_austria",
    "image": "assets/images/ideas/idea_advisors_austria.png",
    "tags": ["Kaiserreich", "KR", "cap", "advisors", "austria"],
  },

  {
    "name": "HUN_charles_v",
    "image": "assets/images/ideas/idea_hun_charles_v_result.png",
    "tags": ["vanilla", "dod", "hungary"]
  },

  {
    "name": "HUN_dynastic_ties",
    "image": "assets/images/ideas/idea_hun_dynastic_ties_result.png",
    "tags": ["vanilla", "dod", "hungary"]
  },

  {
    "name": "HUN_hungarian_monarchy",
    "image": "assets/images/ideas/idea_hun_hungarian_monarchy_result.png",
    "tags": ["vanilla", "dod", "hungary", "crown"]
  },

  {
    "name": "HUN_hungarian_monarchy_democratic",
    "image": "assets/images/ideas/idea_hun_hungarian_monarchy_democratic_result.png",
    "tags": ["vanilla", "dod", "hungary", "crown"]
  },

  {
    "name": "HUN_hungarian_monarchy_fascism",
    "image": "assets/images/ideas/idea_hun_hungarian_monarchy_fascism_result.png",
    "tags": ["vanilla", "dod", "hungary", "crown"]
  },

  {
    "name": "HUN_hungarian_monarchy_habsburg",
    "image": "assets/images/ideas/idea_hun_hungarian_monarchy_habsburg_result.png",
    "tags": ["vanilla", "dod", "hungary", "crown"]
  },

  {
    "name": "HUN_secret_rearmament",
    "image": "assets/images/ideas/idea_hun_secret_rearmament_result.png",
    "tags": ["vanilla", "dod", "guns"]
  },

  {
    "name": "HUN_treaty_of_triannon",
    "image": "assets/images/ideas/idea_hun_treaty_of_trianon_result.png",
    "tags": ["vanilla", "dod", "treaty"]
  },

  {
    "name": "ROM_balkan_dominance",
    "image": "assets/images/ideas/idea_rom_balkan_dominance_result.png",
    "tags": ["vanilla", "dod", "fist", "balkans"]
  },

  {
    "name": "ROM_king_carol_emptied_accounts",
    "image": "assets/images/ideas/idea_rom_carol_emptied_accounts_result.png",
    "tags": ["vanilla", "dod", "romania", "bank", "money"]
  },

  {
    "name": "ROM_carol_ii_deal",
    "image": "assets/images/ideas/idea_rom_carol_ii_deal_result.png",
    "tags": ["vanilla", "dod", "romania", "carol"]
  },

  {
    "name": "ROM_carol_ii_greed",
    "image": "assets/images/ideas/idea_rom_carol_ii_greed_result.png",
    "tags": ["vanilla", "dod", "romania", "carol", "money"]
  },

  {
    "name": "ROM_king_carol_ii_hedonist",
    "image": "assets/images/ideas/idea_rom_carol_ii_hedonist_result.png",
    "tags": ["vanilla", "dod"]
  },

  {
    "name": "ROM_iron_guard",
    "image": "assets/images/ideas/idea_rom_iron_guard_result.png",
    "tags": ["vanilla", "dod", "romania"]
  },

  {
    "name": "ROM_figurehead_king_michael",
    "image": "assets/images/ideas/idea_rom_michael_figurehead_result.png",
    "tags": ["vanilla", "dod", "romania", "michael"]
  },

  {
    "name": "ROM_preserve_greater_romania",
    "image": "assets/images/ideas/idea_rom_preserve_greater_romania_result.png",
    "tags": ["vanilla", "dod", "romania"]
  },

  {
    "name": "ROM_sentinel_of_motherland",
    "image": "assets/images/ideas/idea_rom_sentinel_of_motherland_result.png",
    "tags": ["vanilla", "dod", "romania"]
  },

  {
    "name": "ROM_sentinel_of_motherland2",
    "image": "assets/images/ideas/idea_rom_sentinel_of_motherland2_result.png",
    "tags": ["vanilla", "dod", "romania"]
  },

  {
    "name": "YUG_all_yugoslavian_regiments",
    "image": "assets/images/ideas/idea_yug_all_yugoslavian_regiments_result.png",
    "tags": ["vanilla", "dod", "yugoslavia"]
  },

  {
    "name": "YUG_federal_defense_council",
    "image": "assets/images/ideas/idea_yug_federal_defense_council_result.png",
    "tags": ["vanilla", "dod", "shield"]
  },

  {
    "name": "YUG_local_militias",
    "image": "assets/images/ideas/idea_yug_local_militias_result.png",
    "tags": ["vanilla", "dod", "yugoslavia", "guns"]
  },

  {
    "name": "YUG_orthodox_church_support",
    "image": "assets/images/ideas/idea_yug_orthodox_church_support_result.png",
    "tags": ["vanilla", "dod", "orthodox", "cross"]
  },

  {
    "name": "YUG_serbian_general_staff",
    "image": "assets/images/ideas/idea_yug_serbian_general_staff_result.png",
    "tags": ["vanilla", "dod", "serbia", "yugoslavia", "cap"]
  },

  {
    "name": "YUG_yugoslavian_general_staff",
    "image": "assets/images/ideas/idea_yug_yugoslavian_general_staff_result.png",
    "tags": ["vanilla", "dod", "yugoslavia", "cap"]
  },

  {
    "name": "CZE_divided_nation",
    "image": "assets/images/ideas/idea_cze_divided_nation_result.png",
    "tags": ["vanilla", "dod", "czechoslovakia"]
  },

  {
    "name": "CZE_planning_bonus",
    "image": "assets/images/ideas/idea_cze_planning_bonus_result.png",
    "tags": ["vanilla", "dod", "plan"]
  },

  {
    "name": "CZE_skoda_works",
    "image": "assets/images/ideas/idea_cze_skoda_works_result.png",
    "tags": ["vanilla", "dod", "skoda"]
  },

  {
    "name": "generic_acquire_tanks",
    "image": "assets/images/ideas/idea_generic_acquire_tanks_result.png",
    "tags": ["vanilla", "dod", "armour", "tank"]
  },

  {
    "name": "generic_agrarian_reform",
    "image": "assets/images/ideas/idea_generic_agrarian_reform_result.png",
    "tags": ["vanilla", "dod", "government"]
  },

  {
    "name": "generic_air_payment",
    "image": "assets/images/ideas/idea_generic_air_payment_result.png",
    "tags": ["vanilla", "dod", "air", "planes"]
  },

  {
    "name": "generic_air_research",
    "image": "assets/images/ideas/idea_generic_air_research_result.png",
    "tags": ["vanilla", "dod", "air", "bomber", "plane"]
  },

  {
    "name": "generic_armor",
    "image": "assets/images/ideas/idea_generic_armor_result.png",
    "tags": ["vanilla", "dod", "armour", "tank"]
  },

  {
    "name": "generic_army_war_college",
    "image": "assets/images/ideas/idea_generic_army_war_college_result.png",
    "tags": ["vanilla", "dod", "soldiers"]
  },

  {
    "name": "generic_artillery_regiments",
    "image": "assets/images/ideas/idea_generic_artillery_regiments_result.png",
    "tags": ["vanilla", "dod", "artillery"]
  },

  {
    "name": "generic_bomber_production_diverted",
    "image": "assets/images/ideas/idea_generic_bomber_production_diverted_result.png",
    "tags": ["vanilla", "dod", "air", "plane", "bomber"]
  },

  {
    "name": "generic_central_management",
    "image": "assets/images/ideas/idea_generic_central_management_result.png",
    "tags": ["vanilla", "dod", "industry", "production"]
  },

  {
    "name": "generic_coastal_defense_ships",
    "image": "assets/images/ideas/idea_generic_coastal_defense_ships_result.png",
    "tags": ["vanilla", "dod", "navy", "ship", "battleship"]
  },

  {
    "name": "generic_coastal_defense_ships2",
    "image": "assets/images/ideas/idea_generic_coastal_defense_ships2_result.png",
    "tags": ["vanilla", "dod", "navy", "ship", "battleship"]
  },

  {
    "name": "generic_coastal_navy",
    "image": "assets/images/ideas/idea_generic_coastal_navy_result.png",
    "tags": ["vanilla", "dod", "navy", "ship", "battleship"]
  },

  {
    "name": "generic_communist_army",
    "image": "assets/images/ideas/idea_generic_communist_army_result.png",
    "tags": ["vanilla", "dod", "soldier", "communist"]
  },

  {
    "name": "generic_constitutional_guarantees",
    "image": "assets/images/ideas/idea_generic_constitutional_guarantee_result.png",
    "tags": ["vanilla", "dod", "treaty", "constitution"]
  },

  {
    "name": "generic_deal_with_the_devil",
    "image": "assets/images/ideas/idea_generic_deal_with_the_devil_result.png",
    "tags": ["vanilla", "dod", "shaking hands"]
  },

  {
    "name": "generic_deal_with_the_devil2",
    "image": "assets/images/ideas/idea_generic_deal_with_the_devil2_result.png",
    "tags": ["vanilla", "dod", "shaking hands"]
  },

  {
    "name": "generic_degauss_ship_hulls",
    "image": "assets/images/ideas/idea_generic_degauss_ship_hulls_result.png",
    "tags": ["vanilla", "dod", "ship", "navy"]
  },

  {
    "name": "generic_exploit_mines",
    "image": "assets/images/ideas/idea_generic_exploit_mines_result.png",
    "tags": ["vanilla", "dod", "mines", "production"]
  },

  {
    "name": "generic_fascism_banned",
    "image": "assets/images/ideas/idea_generic_fascism_banned_result.png",
    "tags": ["vanilla", "dod", "eagle", "fascism"]
  },

  {
    "name": "generic_fascism_drift_2",
    "image": "assets/images/ideas/idea_generic_fascism_drift_2_result.png",
    "tags": ["vanilla", "dod", "eagle", "fascism"]
  },

  {
    "name": "generic_fighter_production_diverted",
    "image": "assets/images/ideas/idea_generic_fighter_production_diverted_result.png",
    "tags": ["vanilla", "dod", "air", "fighter", "plane"]
  },

  {
    "name": "generic_flexible_foreign_policy",
    "image": "assets/images/ideas/idea_generic_flexible_foreign_policy_result.png",
    "tags": ["vanilla", "dod", "trade"]
  },

  {
    "name": "generic_flexible_foreign_policy2",
    "image": "assets/images/ideas/idea_generic_flexible_foreign_policy2_result.png",
    "tags": ["vanilla", "dod", "trade"]
  },

  {
    "name": "generic_foreign_capital",
    "image": "assets/images/ideas/idea_generic_foreign_capital_result.png",
    "tags": ["vanilla", "dod", "money"]
  },

  {
    "name": "generic_fortify_the_borders",
    "image": "assets/images/ideas/idea_generic_fortify_the_borders_result.png",
    "tags": ["vanilla", "dod", "fort", "defense"]
  },

  {
    "name": "ROM_king_carol_ii_handled",
    "image": "assets/images/ideas/idea_generic_king_handled_result.png",
    "tags": ["vanilla", "dod", "crown"]
  },

  {
    "name": "generic_license_production",
    "image": "assets/images/ideas/idea_generic_license_production_result.png",
    "tags": ["vanilla", "dod", "production", "plane", "tank", "armour"]
  },

  {
    "name": "generic_local_self_management",
    "image": "assets/images/ideas/idea_generic_local_self_management_result.png",
    "tags": ["vanilla", "dod", "production", "industry"]
  },

  {
    "name": "generic_reserve_divisions",
    "image": "assets/images/ideas/idea_generic_reserve_divisions_result.png",
    "tags": ["vanilla", "dod", "soldiers"]
  },

  {
    "name": "generic_sea_focused_navy",
    "image": "assets/images/ideas/idea_generic_sea_focused_navy_result.png",
    "tags": ["vanilla", "dod", "navy", "battleship", "ship"]
  },

  {
    "name": "generic_secret_police",
    "image": "assets/images/ideas/idea_generic_secret_police_result.png",
    "tags": ["vanilla", "dod", "pistol"]
  },

  {
    "name": "generic_war_preparation",
    "image": "assets/images/ideas/idea_generic_war_preparation_result.png",
    "tags": ["vanilla", "dod", "guns"]
  },

  {
    "name": "GFX_SIA_police_idea",
    "image": "assets/images/ideas/SIA_police_idea.png",
    "tags": ["Kaiserreich", "KR", "cap"]
  },

  {
    "name": "capital_outflow",
    "image": "assets/images/ideas/capital_outflow.png",
    "tags": ["Kaiserreich", "KR", "money"]
  },

  {
    "name": "chi_army_corruption",
    "image": "assets/images/ideas/idea_chi_army_corruption.png",
    "tags": ["vanilla", "wtt", "soldier"]
  },

  {
    "name": "chi_army_corruption2",
    "image": "assets/images/ideas/idea_chi_army_corruption2.png",
    "tags": ["vanilla", "wtt", "soldier"]
  },

  {
    "name": "chi_army_corruption3",
    "image": "assets/images/ideas/idea_chi_army_corruption3.png",
    "tags": ["vanilla", "wtt", "soldier"]
  },

  {
    "name": "chi_chinese_support",
    "image": "assets/images/ideas/idea_chi_chinese_support.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "chi_chinese_unity",
    "image": "assets/images/ideas/idea_chi_chinese_unity.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "chi_forced_conscription",
    "image": "assets/images/ideas/idea_chi_forced_conscription.png",
    "tags": ["vanilla", "wtt", "soldier"]
  },

  {
    "name": "chi_hyper_inflation",
    "image": "assets/images/ideas/idea_chi_hyper_inflation.png",
    "tags": ["vanilla", "wtt", "gold", "money"]
  },

  {
    "name": "chi_hyper_inflation2",
    "image": "assets/images/ideas/idea_chi_hyper_inflation2.png",
    "tags": ["vanilla", "wtt", "gold", "money"]
  },

  {
    "name": "chi_hyper_inflation3",
    "image": "assets/images/ideas/idea_chi_hyper_inflation3.png",
    "tags": ["vanilla", "wtt", "gold", "money"]
  },

  {
    "name": "chi_hyper_inflation4",
    "image": "assets/images/ideas/idea_chi_hyper_inflation4.png",
    "tags": ["vanilla", "wtt", "gold", "money"]
  },

  {
    "name": "chi_hyper_inflation5",
    "image": "assets/images/ideas/idea_chi_hyper_inflation5.png",
    "tags": ["vanilla", "wtt", "gold", "money"]
  },

  {
    "name": "chi_incompetent_officers",
    "image": "assets/images/ideas/idea_chi_incompetent_officers.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "chi_war_of_resistance",
    "image": "assets/images/ideas/idea_chi_war_of_resistance.png",
    "tags": ["vanilla", "wtt", "fist"]
  },

  {
    "name": "chi_war_of_resistance2",
    "image": "assets/images/ideas/idea_chi_war_of_resistance2.png",
    "tags": ["vanilla", "wtt", "fist"]
  },

  {
    "name": "chi_war_of_resistance3",
    "image": "assets/images/ideas/idea_chi_war_of_resistance3.png",
    "tags": ["vanilla", "wtt", "fist"]
  },

  {
    "name": "chi_wargaming_division",
    "image": "assets/images/ideas/idea_chi_wargaming_division.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "chi_warlord_integration",
    "image": "assets/images/ideas/idea_chi_warlord_integration.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "chi_warlord_integration2",
    "image": "assets/images/ideas/idea_chi_warlord_integration2.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "chi_warlord_integration3",
    "image": "assets/images/ideas/idea_chi_warlord_integration3.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "chi_warlord_integration4",
    "image": "assets/images/ideas/idea_chi_warlord_integration4.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "chi_warlord_integration5",
    "image": "assets/images/ideas/idea_chi_warlord_integration5.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "chi_whampoa_military_academy",
    "image": "assets/images/ideas/idea_chi_whampoa_military_academy.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "general_staff",
    "image": "assets/images/ideas/idea_general_staff.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "generic_army_problems",
    "image": "assets/images/ideas/idea_generic_army_problems.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "generic_build_infrastructure",
    "image": "assets/images/ideas/idea_generic_build_infrastructure.png",
    "tags": ["vanilla", "wtt", "infrastructure"]
  },

  {
    "name": "generic_navy_carrier_bonus",
    "image": "assets/images/ideas/idea_generic_navy_carrier_bonus.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "generic_neutrality_drift_bonus",
    "image": "assets/images/ideas/idea_generic_neutrality_drift_bonus.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "generic_oppression",
    "image": "assets/images/ideas/idea_generic_oppression.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "generic_political_support",
    "image": "assets/images/ideas/idea_generic_political_support.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "generic_purge",
    "image": "assets/images/ideas/idea_generic_purge.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "generic_the_london_naval_treaty",
    "image": "assets/images/ideas/idea_generic_the_london_naval_treaty.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "ger_bulwark_against_bolshevism",
    "image": "assets/images/ideas/idea_ger_bulwark_against_bolshevism.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "ger_mefo_bills",
    "image": "assets/images/ideas/idea_ger_mefo_bills.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "ger_mefo_bills_payment",
    "image": "assets/images/ideas/idea_ger_mefo_bills_payment.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "ger_rebuild_the_nation",
    "image": "assets/images/ideas/idea_ger_rebuild_the_nation.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "ger_revive_the_kaiserreich",
    "image": "assets/images/ideas/idea_ger_revive_the_kaiserreich.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "ger_the_great_red_menace",
    "image": "assets/images/ideas/idea_ger_the_great_red_menace.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "jap_duplicate_research",
    "image": "assets/images/ideas/idea_jap_duplicate_research.png",
    "tags": ["vanilla", "wtt", "research"]
  },

  {
    "name": "jap_ichi_go",
    "image": "assets/images/ideas/idea_jap_ichi_go.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "jap_interservice_rivalry_army_dominant",
    "image": "assets/images/ideas/idea_jap_interservice_rivalry_army_dominant.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "jap_interservice_rivalry_army_strengthened",
    "image": "assets/images/ideas/idea_jap_interservice_rivalry_army_strengthened.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "jap_interservice_rivalry_balanced",
    "image": "assets/images/ideas/idea_jap_interservice_rivalry_balanced.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "jap_interservice_rivalry_navy_dominant",
    "image": "assets/images/ideas/idea_jap_interservice_rivalry_navy_dominant.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "jap_interservice_rivalry_navy_strengthened",
    "image": "assets/images/ideas/idea_jap_interservice_rivalry_navy_strengthened.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "jap_intervene_in_china",
    "image": "assets/images/ideas/idea_jap_intervene_in_china.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "jap_militarism_showa",
    "image": "assets/images/ideas/idea_jap_militarism_showa.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "jap_supremacy_of_technology",
    "image": "assets/images/ideas/idea_jap_supremacy_of_technology.png",
    "tags": ["vanilla", "wtt", "research"]
  },

  {
    "name": "jap_supremacy_of_will",
    "image": "assets/images/ideas/idea_jap_supremacy_of_will.png",
    "tags": ["vanilla", "wtt", "research"]
  },

  {
    "name": "jap_the_unthinkable_option",
    "image": "assets/images/ideas/idea_jap_the_unthinkable_option.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "jap_zaibatsu",
    "image": "assets/images/ideas/idea_jap_zaibatsu.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "jap_zaibatsu_ally",
    "image": "assets/images/ideas/idea_jap_zaibatsu_ally.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "jap_zaibatsu_control",
    "image": "assets/images/ideas/idea_jap_zaibatsu_control.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "man_five_year_plan_air",
    "image": "assets/images/ideas/idea_man_five_year_plan_air.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "man_five_year_plan_industry",
    "image": "assets/images/ideas/idea_man_five_year_plan_industry.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "man_five_year_plan_tank",
    "image": "assets/images/ideas/idea_man_five_year_plan_tank.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "man_low_legitimacy",
    "image": "assets/images/ideas/idea_man_low_legitimacy.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "man_low_legitimacy2",
    "image": "assets/images/ideas/idea_man_low_legitimacy2.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "man_low_legitimacy3",
    "image": "assets/images/ideas/idea_man_low_legitimacy3.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "man_low_legitimacy4",
    "image": "assets/images/ideas/idea_man_low_legitimacy4.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "man_low_legitimacy5",
    "image": "assets/images/ideas/idea_man_low_legitimacy5.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "man_militarism",
    "image": "assets/images/ideas/idea_man_militarism.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "prc_low_popular_support",
    "image": "assets/images/ideas/idea_prc_low_popular_support.png",
    "tags": ["vanilla", "wtt", "soldier"]
  },

  {
    "name": "prc_low_popular_support2",
    "image": "assets/images/ideas/idea_prc_low_popular_support2.png",
    "tags": ["vanilla", "wtt", "soldier"]
  },

  {
    "name": "prc_low_popular_support3",
    "image": "assets/images/ideas/idea_prc_low_popular_support3.png",
    "tags": ["vanilla", "wtt", "soldier"]
  },

  {
    "name": "prc_permit_opium_trade",
    "image": "assets/images/ideas/idea_prc_permit_opium_trade.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "prc_the_long_march",
    "image": "assets/images/ideas/idea_prc_the_long_march.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "prc_the_long_march2",
    "image": "assets/images/ideas/idea_prc_the_long_march2.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "send_attache",
    "image": "assets/images/ideas/idea_send_attache.png",
    "tags": ["vanilla", "wtt"]
  },

  {
    "name": "NOR_uob_support_idea",
    "image": "assets/images/ideas/NOR_syndicalist_support.png",
    "tags": ["Kaiserreich", "KR", "syndicalist", "communist"]
  },

  {
    "name": "generic_radical_socialist_revolution",
    "image": "assets/images/ideas/idea_generic_radical_socialist_revolution.png",
    "tags": ["Kaiserreich", "KR", "syndicalist", "communist", "radical socialist"]
  },

  {
    "name": "generic_totalist_revolution",
    "image": "assets/images/ideas/idea_generic_totalist_revolution.png",
    "tags": ["Kaiserreich", "KR", "syndicalist", "communist", "totalist"]
  },

  {
    "name": "generic_syndicalism_drift_bonus",
    "image": "assets/images/ideas/idea_generic_syndicalism_drift_bonus.png",
    "tags": ["Kaiserreich", "KR", "syndicalist", "communist"]
  },

  {
    "name": "generic_syndicalist_fort",
    "image": "assets/images/ideas/idea_generic_syndicalist_fort.png",
    "tags": ["Kaiserreich", "KR", "syndicalist", "communist"]
  },

  {
    "name": "generic_syndicalist_manpower",
    "image": "assets/images/ideas/idea_generic_syndicalist_manpower.png",
    "tags": ["Kaiserreich", "KR", "syndicalist", "communist"]
  },

  {
    "name": "generic_syndicalist_medal",
    "image": "assets/images/ideas/idea_generic_syndicalist_medal.png",
    "tags": ["Kaiserreich", "KR", "syndicalist", "communist"]
  },

  {
    "name": "generic_syndicalist_monarchy",
    "image": "assets/images/ideas/idea_generic_syndicalist_monarchy.png",
    "tags": ["Kaiserreich", "KR", "syndicalist", "communist"]
  },

  {
    "name": "NOR_secret_police_idea_1",
    "image": "assets/images/ideas/NOR_secret_police_spirit.png",
    "tags": ["Kaiserreich", "KR", "syndicalist", "communist"]
  },

  {
    "name": "No_Oil",
    "image": "assets/images/ideas/No_Oil.png",
    "tags": ["Kaiserreich", "KR", "production", "resource"]
  },

  {
    "name": "Oil",
    "image": "assets/images/ideas/Oil.png",
    "tags": ["Kaiserreich", "KR", "production", "resource"]
  },

  {
    "name": "OTT_gendarmerie",
    "image": "assets/images/ideas/OTT_gendarmerie.png",
    "tags": ["Kaiserreich", "KR", "hat"]
  },

  {
    "name": "Recruitment_Crisis",
    "image": "assets/images/ideas/Recruitment_Crisis.png",
    "tags": ["Kaiserreich", "KR", "soldier", "flames"]
  },

  {
    "name": "UK_military_loyal_idea",
    "image": "assets/images/ideas/UK_military_loyal_idea.png",
    "tags": ["Kaiserreich", "KR", "soldiers"]
  },

  {
    "name": "TUS_syndie_economy",
    "image": "assets/images/ideas/TUS_recovering_syndies_economy.png",
    "tags": ["Kaiserreich", "KR"]
  },

  {
    "name": "TUS_syndie_government",
    "image": "assets/images/ideas/TUS_syndie_ministers.png",
    "tags": ["Kaiserreich", "KR", "crown"]
  },

  {
    "name": "UoB_militia_idea",
    "image": "assets/images/ideas/UoB_militia_idea.png",
    "tags": ["Kaiserreich", "KR"]
  },

  {
    "name": "NOR_labour_conflicts",
    "image": "assets/images/ideas/NOR_general_strike.png",
    "tags": ["Kaiserreich", "KR", "strike"]
  },

  {
    "name": "syndicalist_industry_idea",
    "image": "assets/images/ideas/NOR_planned_economy.png",
    "tags": ["Kaiserreich", "KR", "production", "factory"]
  },

  {
    "name": "LEC_police",
    "image": "assets/images/ideas/LEC_police.png",
    "tags": ["Kaiserreich", "KR"]
  },

  {
    "name": "denbts",
    "image": "assets/images/ideas/denbts.png",
    "tags": ["Kaiserreich", "KR"]
  },

  {
    "name": "death_men",
    "image": "assets/images/ideas/death_men.png",
    "tags": ["Kaiserreich", "KR", "soldier", "skull"]
  },

]

export default ideas;
