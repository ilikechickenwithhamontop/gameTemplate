$( document ).ready(function() {

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/1520504.jpg')");
		$("#goRight1").hide();
		$("#goBack").hide();
		$("#goRight-Straight1").show();
		$("#goRight-Right2").hide();
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

	$("#goRight-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goRight-Straight2").hide();
		$("#goRight-Straight3").hide();
	});

	$("#goRight-Straight3").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('img/explore2-goBack2.jpg')");
		$("#goRight-Right2").hide();
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
		$("#goStraight2").hide();
	});

	$("#goLeft-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/18vxcgwq8bi3fjpg.jpg')");
		$("#goLeft2").hide();
		$("#goLeft-Straight1").hide();
		$("#goBack").show();
		$("#goStraight2").hide();
	});

	$("#goLeft-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft3.jpg')");
		$("#goLeft3").hide();
		$("#goBack").show();
		$("#goStraight2").hide();
	});


	$("#goBack").click(function() {
		$("#exploreBody").css("background-image", "url('img/Long_Dark_Hallway_v2_wip_by_spinagain.png')");
		$("#goBack").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
		$("#goStraight1").show();
		$("#goStraight2").hide();
	});

    $("#goStraight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/Dark_hallway_widescreen_hd_wallpaper.jpg')");
		$("#goStraight-Left1").show();
		$("#goBack").hide();
		$("#goStraight-Right1").show();
		$("#goStraight-Straight1").show();
		$("#goLeft1").hide();
		$("#goRight1").hide();
		$("#goStraight2").hide();
	});

	$("#goStraight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/6257.png')");
		$("#goStraight-Left1").hide();
		$("#goBack").show();
		$("#goStraight-Right1").hide();
		$("#goStraight-Straight1").hide();
		$("#goLeft1").hide();
		$("#goRight1").hide();
		$("#goStraight2").hide();
	});

	$("#goStraight-Left1").click(function() {
		$("#exploreBody").css("background-image", "url('img/scare-room.jpg')");
		$("#goStraight-Right1").hide();
		$("#goStraight-Straight1").hide();
		$("#goLeft1").hide();
		$("#goRight1").hide();
		$("#goStraight2").show();
        $("#goStraight-Left1").hide();
        $("#goStraight-LeftStraight1").show();
		$("#goStraight-Left1").hide();
		$("#goStraight-Right1").hide();
		$("#goLeft-Straight2").show();

	});
});
