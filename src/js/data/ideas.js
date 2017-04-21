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
    "name": "idea_generic_army",
    "image": "assets/images/ideas/idea_generic_army.png",
    "tags": ["Kaiserreich", "KR"],
  },

  {
    "name": "idea_generic_navy",
    "image": "assets/images/ideas/idea_generic_navy.png",
    "tags": ["Kaiserreich", "KR"],
  },

  {
    "name": "idea_generic_trade",
    "image": "assets/images/ideas/idea_generic_trade.png",
    "tags": ["Kaiserreich", "KR"],
  },

  {
    "name": "idea_guns_shield",
    "image": "assets/images/ideas/idea_guns_shield.png",
    "tags": ["Kaiserreich", "KR"],
  },

  {
    "name": "idea_advisors_italysoc",
    "image": "assets/images/ideas/idea_advisors_italysoc.png",
    "tags": ["Kaiserreich", "KR"],
  },

  {
    "name": "idea_advisors_natfrance",
    "image": "assets/images/ideas/idea_advisors_natfrance.png",
    "tags": ["Kaiserreich", "KR"],
  },

  {
    "name": "idea_advisors_portugal",
    "image": "assets/images/ideas/idea_advisors_portugal.png",
    "tags": ["Kaiserreich", "KR"],
  },

  {
    "name": "idea_advisors_russia",
    "image": "assets/images/ideas/idea_advisors_russia.png",
    "tags": ["Kaiserreich", "KR"],
  },

  {
    "name": "idea_advisors_soviet",
    "image": "assets/images/ideas/idea_advisors_soviet.png",
    "tags": ["Kaiserreich", "KR"],
  },

  {
    "name": "idea_generic_airforce",
    "image": "assets/images/ideas/idea_generic_airforce.png",
    "tags": ["Kaiserreich", "KR"],
  },

  {
    "name": "idea_advisors_england",
    "image": "assets/images/ideas/idea_advisors_england.png",
    "tags": ["Kaiserreich", "KR"],
  },

  {
    "name": "idea_advisors_france",
    "image": "assets/images/ideas/idea_advisors_france.png",
    "tags": ["Kaiserreich", "KR"],
  },

  {
    "name": "idea_advisors_germany",
    "image": "assets/images/ideas/idea_advisors_germany.png",
    "tags": ["Kaiserreich", "KR"],
  },

  {
    "name": "idea_advisors_italianfed",
    "image": "assets/images/ideas/idea_advisors_italianfed.png",
    "tags": ["Kaiserreich", "KR"],
  },

  {
    "name": "idea_advisors_austria",
    "image": "assets/images/ideas/idea_advisors_austria.png",
    "tags": ["Kaiserreich", "KR"],
  },

]

export default ideas;
