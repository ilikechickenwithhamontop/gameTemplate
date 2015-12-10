$( document ).ready(function() {

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/1520504.jpg')");
		$("#goRight1").hide();
		$("#goBack").hide();
		$("#goRight-Straight1").show();
		$("#goLeft1").hide();
		$("#goStraight1").hide();
		$("#goStraight2").hide();
	});

	$("#goRight-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/4984770900_13b607842b_b.jpg')");
	    $("#goBack").show();
	    $("#goRight-Straight1").hide();
	    $("#goStraight2").hide();
	});


	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/001254_large.jpg')");
		$("#goLeft1").hide();
		$("#goLeft-Straight1").show();
		$("#goRight1").hide();
		$("#goStraight1").hide();
	});

	$("#goLeft2").click(function() {
		$("#exploreBody").css("background-image", "url('')");
		$("#goStraight1").hide();
		$("#goLeft-Straight1").show();
		$("#goRight2").hide();
		$("#goStraight-Straight1").hide();
	});

	$("#goLeft-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/18vxcgwq8bi3fjpg.jpg')");
		$("#goLeft1").hide();
		$("#goLeft-Straight1").hide();
		$("#goBack").show();
	});

	$("#goLeft-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/6257.png')");
		$("#goLeft2").hide();
		$("#goBack").show();
	});


	$("#goBack").click(function() {
		$("#exploreBody").css("background-image", "url('img/Long_Dark_Hallway_v2_wip_by_spinagain.png')");
		$("#goBack").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
		$("#goStraight1").show();
	});

    $("#goStraight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/Dark_hallway_widescreen_hd_wallpaper.jpg')");
		$("#goStraight-Left1").show();
		$("#goBack").hide();
		$("#goStraight-Right1").show();
		$("#goStraight-Straight1").show();
		$("#goLeft1").hide();
		$("#goRight1").hide();
	});

});
